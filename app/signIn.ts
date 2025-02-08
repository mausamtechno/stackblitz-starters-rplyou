'use server'
import { signIn } from "@/customAuth";

export const methodSignIn = async (formData: FormData) => {
    try {
        const password = formData.get('password')?.valueOf()
        const email = formData.get('email')?.valueOf()
        console.log(`437419918236197108 `, password, email);
        await signIn("credentials", {email, password, redirect: false });
    } catch (error) {
        console.log(`404287197235542525 `, error);
    }
}