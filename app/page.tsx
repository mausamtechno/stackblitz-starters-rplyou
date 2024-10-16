"use client"
import Link from "next/link";
import {
  ComponentB,
} from "./components/activity/UpdatedServiceCard";
import { dataArray } from "@/lib/data";

export default function Home() {
  return (
    <div>
      <Link href="/dashboard" prefetch>
        Go to Dashboard
      </Link>
      <div className="grid grid-cols-4 gap-10 p-6">
      {dataArray.map((data) => {
        return <ComponentB {...data} />;
      })}
      </div>
    </div>
  );
}
