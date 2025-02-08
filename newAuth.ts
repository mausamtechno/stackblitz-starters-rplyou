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
        email: { label: "Email"},
        password: { label: "Password"}
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
                return null
            }
    
        } catch (error) {
            console.log(`184946330385665391 `, error);
        }
        return user;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },
  pages: {
    signIn: "/custom-login"
  }
});
