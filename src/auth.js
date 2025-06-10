import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import User from "./models/user.model";
import { connectMongoDB } from "./lib/mongodb";
import { cookies } from "next/headers";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account }) {
    
      let role = "buyer";
      const cookieStore = cookies();
      const tempRole =await cookieStore.get("temp_role")?.value
      console.log(tempRole)

      if(tempRole === 'seller'){
        role = 'seller'
      }

      try {
        if (account?.state) {
          const parsed = JSON.parse(account.state);
          if (parsed?.role) {
            role = parsed.role;
          }
        }
        console.log(account?.state)
  
        await connectMongoDB();
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          await User.create({
            email: user.email,
            name: user.name,
            image: user.image,
            role,
          });
        }
        return true;
      } catch (error) {
        console.log("Error connecting database", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        const dbUser = await User.findOne({ email: user.email });
        token.role = dbUser?.role || "buyer";
      }
      return token;
    },

    async session({ session, token }) {
      if (token?.role) {
        session.user.role = token.role;
      }
      return session;
    },
  },
});
