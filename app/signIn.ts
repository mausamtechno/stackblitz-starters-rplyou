"use server";
import { signIn } from "@/customAuth";
import { AuthError } from "next-auth";

export const methodSignIn = async (formData: FormData) => {
  try {
    const password = formData.get("password")?.valueOf();
    const email = formData.get("email")?.valueOf();
    await signIn("credentials", { email, password, redirectTo: "/" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "Invalid credentials",
          };
        default:
          return {
            message: "Something went wrong.",
          };
      }
    }
    throw error;
  }
};
