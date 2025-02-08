import { signIn, signOut, auth } from "@/auth";

export default async function LoginPage() {
  const session = await auth();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>

        {session?.user ? (
          <>
            <p className="mb-4">Signed in as {session.user.name}</p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit">Logout</button>
            </form>
          </>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button type="submit">Signin with GitHub</button>
          </form>
        )}
      </div>
    </div>
  );
}
