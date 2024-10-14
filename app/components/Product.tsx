"use client"
import { useGlobalContext } from "@/app/context/GlobalStateProvider";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const Product = ({ children }:{ children: ReactNode }) => {
  const { count, increaseCount, decreaseCount } = useGlobalContext();
  const { back } = useRouter();
  console.log("This is product page containing FetchPost server component.");

  return (
    <div className="flex flex-col items-center">
      {count}
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={back}>Go Back</button>
      {children}
    </div>
  );
};
export default Product