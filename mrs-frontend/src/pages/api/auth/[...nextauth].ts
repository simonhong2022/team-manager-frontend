import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest } from "next";

const BASE_PATH: string = 'https://teammanager-backend-app.azurewebsites.net/api/login';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type:"password" }
            },
            async authorize(credentials, req) {
                const response = await fetch(BASE_PATH, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                });
                const user = await response.json();

                if(response.ok) {
                    return user;
                }
                return null;
            }
        })
    ],
    secret: process.env.NEXT_PUBLIC_SECRET
})