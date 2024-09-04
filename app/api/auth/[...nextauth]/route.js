import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/app/lib/mongodb";
import User from '../../../lib/mongoose/userModel';
import bcrypt from 'bcryptjs';

const handler = NextAuth({

    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Username", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {
                await connectDB()
                
                const userFound = await User.findOne({email: credentials?.email}).select('+password');
                
                if (!userFound) throw new Error('Credenciales invalidas')

                const passwordMatch = await bcrypt.compare(credentials?.password, userFound.password)

                if (!passwordMatch) throw new Error('Credenciales invalidas')

                return userFound
                
            }
        })
    ],
    callbacks: {
        jwt({account, token, user, profile, session}) {
            if (user) token.user = user;
            return token
        },
        session({session, token}) {
            session.user = token.user;
            return session
        }
    },
    pages: {
        signIn: "/login"
    }

})

export { handler as GET, handler as POST }