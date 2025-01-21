import NextAuth from "@node_modules/next-auth";
import GoogleProvider from "@node_modules/next-auth/providers/google";
import { connectToDatabase } from "@utils/database";

console.log({
  clientId: "process.env.GOOGLE_ID",
  clientSecret: "process.env.GOOGLE_CLIENT_SECRET",
});

const  handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId:"process.env.GOOGLE_ID",
            clientSecret:"process.env.GOOGLE_CLIENT_SECRET",
        })
    ],
    async session({session}){

    },
    async signIn({profile}){
        
    }
})
export {handler as GET , handler as POST}