"use client";
import { useGlobalContext } from "@/app/context/GlobalStateProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { count, increaseCount, decreaseCount } = useGlobalContext();
  const { push, prefetch } = useRouter();

  const submitHandler = () => {
    prefetch("/dashboard/product");
    setTimeout(() => push("/dashboard/product"), 3000);
  };
  console.log("This is Dashboard Page");
  return (
    <div className="flex flex-col items-center">
      {count}
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <a href="/dashboard/product">Redirect to product using anchor tag</a>
      <Link href="/dashboard/product">Redirect to Product from link</Link>

      <button onClick={submitHandler}>Product on btn click (prefetch)</button>
      <Link href="/">Go to Homepage</Link>
    </div>
  );
};

export default Dashboard;
