import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import {db} from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions=  {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login'
    },
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "Username..." },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
            if(!credentials?.username || !credentials.password){
                return null;
            }
    
            const existingUser = await db.databankUsers.findUnique({
                where: { username: credentials?.username }
            });
            if(!existingUser) {
                return null;
            }

            const passwordMatch = await compare(credentials.password, existingUser.password);

            if(!passwordMatch) {
                return null;
            }

            return {
                id: `${existingUser.username}`,
                username: existingUser.username,
                
            }
        }
      })
    ]
}