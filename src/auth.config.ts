import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

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

          console.log({email, password});
          

        //buscar el correo

        //Comparar las contraseñas

        return null;
      },
    }),
  ],
});
