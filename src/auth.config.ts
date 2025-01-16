import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "./lib/prisma";
import bcryptjs from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  providers: [
    //proveedores

    Credentials({
      async authorize(credentials) {
        
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

          if( !parsedCredentials.success )return null;

          const { email, password } = parsedCredentials.data;
         

        //buscar el correo
        const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() }})
        if( !user ) return null;

        //Comparar las contraseñas
        if( !bcryptjs.compareSync( password, user.password) ) return null

        //Devolver el usuario
        const { password: _, ...rest }= user
        console.log({rest});
        
        return rest;
      },
    }),
  ],
});
