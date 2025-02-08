import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

const authorizedUser = {
  email: "mausam@gmail.com",
  password: "mausam",
};

const userDetails = {
  id: "mausam",
  name: "mausam",
  phone: "999999999999",
  email: "mausam@gmail.com",
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize: async (credentials) => {
        let user = null;
        try {
          if (
            authorizedUser.email === credentials.email &&
            authorizedUser.password === credentials.password
          ) {
            user = userDetails;
          }

          if (!user) {
            return null;
          }
        } catch (error) {
          console.log(`184946330385665391 `, error);
        }
        return user;
      },
    }),
  ],
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;
      if (pathname.startsWith("/custom-login") && isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl));
      }
      return !!auth;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      console.log(token, "token");
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
    async redirect({ url, baseUrl }) {
        
      console.log("Redirecting to:", url, baseUrl); // Debugging
      return baseUrl; // Always redirect to the base URL
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },
  pages: {
    signIn: "/custom-login",
  },
});
