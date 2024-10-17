"use client";
import { useGlobalContext } from "@/app/context/GlobalStateProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ServiceCard, { imageURL, TServiceCard } from "../components/ServiceCard";


const value: TServiceCard = {
  type: "HOTEL",
  title: "This is service title",
  status: "Pending",
  eventDate: "23oct 2028",
  location: "Sarjah",
  numberOfDaysToFulfill: "3 - 4 working day",
  imageURL: "/",
};

const Dashboard = () => {
  const { count, increaseCount, decreaseCount } = useGlobalContext();
  const { push, prefetch } = useRouter();
  const handleClick = () => {};
  const submitHandler = () => {
    prefetch("/dashboard/product");
    setTimeout(() => push("/dashboard/product"), 3000);
  };
  console.log("This is Dashboard Page");
  return (
    <div className="flex flex-col items-center space-y-6">
      {count}
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <a href="/dashboard/product">Redirect to product using anchor tag</a>
      <Link href="/dashboard/product">Redirect to Product from link</Link>

      <button onClick={submitHandler}>Product on btn click (prefetch)</button>
      <Link href="/">Go to Homepage</Link>

      {/* <ServiceCard value={value}>
        <ServiceCard.ImageContainer />
        <ServiceCard.EventLocation />
        <ServiceCard.EventDate />
        <ServiceCard.ActionButton handleClick={handleClick} />
        <ServiceCard.ServiceStatus status="Pending" />
      </ServiceCard> */}
      {/* <ServiceCardWithoutComposition service={value} /> */}
      {/* <PostCard post={data}>
        <PostCard.Name />
        <PostCard.Content />
        <PostCard.Title />
        <PostCard.Button />
      </PostCard> */}
    </div>
  );
};

export default Dashboard;
