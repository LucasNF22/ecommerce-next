import NextAuth, { DefaultSession } from "next-auth";


declare module 'next-auth' {
    interface Session{
        user: {
            id: string;
            name: string;
            email: string;
            emailVerified?: boolean;
            role: string;
            iamge?: string;
        } & DefaultSession['user'];
    }
}