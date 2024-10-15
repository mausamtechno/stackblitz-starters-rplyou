import Image from "next/image";
import { TServiceCard } from "../ServiceCard";
import { FC, ReactNode } from "react";

type TImageAndDescription = {
  imageURL: string;
  type: TServiceCard["type"];
  title: string;
  children: ReactNode;
};

type TTourDescription = {
  eventDate: string;
  location: string;
};

const TourDescription = ({ location, eventDate }: TTourDescription) => {
  return (
    <div className="text-steelGrey600 text-xs leading-4">
      <p>{eventDate}</p>
      <p>{`Location ${location}`}</p>
    </div>
  );
};

type TVisaDescription = {
  eventDate: string;
  serviceProcessingTime: string;
};

const VisaDescription = ({
  eventDate,
  serviceProcessingTime,
}: TVisaDescription) => {
  return (
    <div className="text-steelGrey600 text-xs leading-4">
      <p>{eventDate}</p>
      <p>{serviceProcessingTime}</p>
    </div>
  );
};

type THotelDescription = {
  bookingDateRange: string;
  location: string;
};

const HotelDescription = ({
  location,
  bookingDateRange,
}: THotelDescription) => {
  return (
    <div className="text-steelGrey600 text-xs leading-4">
      <p>{bookingDateRange}</p>
      <p>{location}</p>
    </div>
  );
};

const ImageAndDescription: FC<TImageAndDescription> = ({
  imageURL,
  type,
  title,
  children,
}) => {
  return (
    <div className="flex">
      <Image src={imageURL} alt="image" height={100} width={100} className="h-24 w-auto rounded" />
      <div>
        <p className="text-orange text-xs leading-4">{type}</p>
        <p className="text-steelGrey800 font-semibold leading-5">{title}</p>
        {children}
      </div>
    </div>
  );
};

export { ImageAndDescription, VisaDescription, HotelDescription, TourDescription };
