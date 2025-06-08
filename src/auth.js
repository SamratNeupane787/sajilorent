import NextAuth, { NextAuthConfig, } from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
   async signIn({user, account}){
    console.log(user)
    console.log(account)
   }
}});
