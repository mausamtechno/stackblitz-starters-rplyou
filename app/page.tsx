"use client";
import Link from "next/link";
import { ComponentB } from "./components/activity/UpdatedServiceCard";
import { dataArray } from "@/lib/data";
import Parse from "./components/zod/Parse";
import InboxScreen from "@/stories/InboxScreen";

export default function Home() {
  return (
    <div>
      <Link href="/dashboard" prefetch>
        Go to Dashboard
      </Link>
      <Link href="/fetching" prefetch>
        Go to Fetching
      </Link>
      <InboxScreen />
      <Parse />
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-6">
        {dataArray.map((data, index) => {
          return <div key={index}>
            <ComponentB {...data} />
          </div>;
        })}
      </div>
    </div>
  );
}
