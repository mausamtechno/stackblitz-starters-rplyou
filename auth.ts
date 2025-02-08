import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      console.log("✅ Session Created:", session);
      console.log("🔑 Token:", token);
      return session;
    },
  },
  debug: true,
});
