import Image from "next/image";
import { TPost } from "./PostCard";
import { imageURL, TServiceCard } from "./ServiceCard";

const PostCardWithoutComposition = ({ post }: { post: TPost }) => {
  const {
    title,
    user: { name },
    content,
  } = post;
  return (
    <div className="shadow-md">
      <p>{`Title ${title}`}</p>
      <p>{`Content ${content}`}</p>
      <p>{`Name ${name}`}</p>
      <button>Click me</button>
    </div>
  );
};

const ServiceCardWithoutComposition = ({
  service,
}: {
  service: TServiceCard;
}) => {
  const { type, eventDate, location, status, numberOfDaysToFulfill } = service;

  return (
    <div className="p-4 shadow-lg space-y-6">
      <div className="flex justify-between border">
        <Image
          src={imageURL}
          height={50}
          width={50}
          className="h-24 w-auto rounded"
          alt="sample image"
        />
        <div className="flex">
          <div>
            <p>{type}</p>
            <p>{eventDate}</p>
            <p>{`Location ${location}`}</p>
            <p>{numberOfDaysToFulfill}</p>
          </div>
          <div>{status}</div>
        </div>
      </div>
      <div className="flex justify-between border">
        <div>
          <p>Start from</p>
          <p>190 AED</p>
        </div>
        <div className="flex flex-col">
          <button className="block">Remove</button>
          <button className="block">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export { PostCardWithoutComposition, ServiceCardWithoutComposition };
