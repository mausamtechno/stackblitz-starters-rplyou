export { auth as middleware } from "@/customAuth"

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"]
}