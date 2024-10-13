"use client"
import { useGlobalContext } from "@/app/context/GlobalStateProvider";
import { useRouter } from "next/navigation";

const Product = () => {
  const { count, increaseCount, decreaseCount } = useGlobalContext();
  const { back } = useRouter();
  console.log("This is product page containing FetchPost server component.");

  return (
    <div className="flex flex-col items-center">
      {count}
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={back}>Go Back</button>
    </div>
  );
};
export default Product