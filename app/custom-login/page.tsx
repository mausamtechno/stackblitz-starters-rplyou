import { methodSignIn } from "../signIn";

export default function SignIn() {
  return (
    <form
      action={methodSignIn}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  );
}
