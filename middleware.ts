import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fetchData } from "./app/utils";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
//   console.log(request, "Print request inside middleware");
  const res = await fetchData({ id: 1 });
  console.log(res, "API response inside middleware");
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/product",
};
