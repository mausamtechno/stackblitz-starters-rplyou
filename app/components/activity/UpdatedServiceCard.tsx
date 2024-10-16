import Image from "next/image";
import { MouseEventHandler } from "react";
import ActionButton from "./ActionButton";
import { Text } from "../common/Text";
import ProductStatus from "./ProductStatus";
import { TBasePrice, THotelInfo, TTourInfo, TVisaInfo } from "@/types";
import { isInfoOfType } from "@/lib/utils";

const ImageComponent = ({ imageURL }: { imageURL: string }) => {
  return (
    <Image
      src={imageURL}
      height={100}
      width={100}
      className="h-24 w-auto object-contain rounded-2xl"
      alt="image"
    />
  );
};

export type TComponentBProps = {
  productType: "Tour" | "Hotel" | "Visa";
  productName: string;
  imageURL: string;
  dateOfBooking: string | { startDate: string; endDate: string };
  additionalInfo: { location: string } | { numWorkingDays: string };
  headerInfo:
    | { status: "pending" | "confirmed" }
    | { action: "button"; handleClick: MouseEventHandler<HTMLButtonElement> }
    | undefined;
};

export type TComponentCProps = {
  bottomInfo:
    | TBasePrice
    | TTourInfo
    | THotelInfo
    | TVisaInfo
    | Omit<TTourInfo, "price">
    | Omit<THotelInfo, "price">
    | Omit<TVisaInfo, "price">;

  actionButton:
    | {
        action: "button";
        primaryButtonText: string;
        secondaryButtonText: string;
        handlePrimaryBtnClick: MouseEventHandler<HTMLButtonElement>;
        handleSecondaryBtnClick: MouseEventHandler<HTMLButtonElement>;
      }
    | {
        applicableRPoints: number;
        appliedRPoints?: number;
        handleClick: MouseEventHandler<HTMLButtonElement>;
      };
};

export type TComponentB = TComponentBProps & TComponentCProps;

const ComponentB = ({
  imageURL,
  productType,
  productName,
  dateOfBooking,
  additionalInfo,
  headerInfo,
  bottomInfo,
  actionButton,
}: TComponentBProps & TComponentCProps) => {
  return (
    <div className="shadow-shadow1 p-4 rounded-2xl">
      <div className="flex gap-x-2">
        <ImageComponent imageURL={imageURL} />
        <div className="flex gap-x-2 items-start justify-between w-full">
          <div>
            <Text className="uppercase text-orange">{productType}</Text>
            <Text size="lg">{productName}</Text>
            <div className="mt-2">
              {typeof dateOfBooking === "string" && (
                <Text>{dateOfBooking}</Text>
              )}
              {typeof dateOfBooking !== "string" && (
                <Text>
                  {dateOfBooking.startDate} - {dateOfBooking.startDate}
                </Text>
              )}
              {"location" in additionalInfo && (
                <Text>Location {additionalInfo.location}</Text>
              )}
              {"numWorkingDays" in additionalInfo && (
                <Text>{additionalInfo.numWorkingDays}</Text>
              )}
            </div>
          </div>
          {!!headerInfo &&
            "action" in headerInfo &&
            typeof headerInfo.handleClick === "function" && (
              <button>...</button>
            )}
          {!!headerInfo && "status" in headerInfo && (
            <ProductStatus status={headerInfo.status} />
          )}
        </div>
      </div>
      <div className="border-t border-t-gray-200 my-3" />
      <div className="flex justify-between items-start">
        <div>
          {isInfoOfType(bottomInfo, "BasePriceInfo") && (
            <div>
              <Text>Starts from</Text>
              <Text>{bottomInfo.price}</Text>
            </div>
          )}
          {isInfoOfType(bottomInfo, "TourInfo") && (
            <div>
              <Text>{bottomInfo.transferType}</Text>
              <Text>{`${bottomInfo.numOfAdults} Adults ${bottomInfo.numOfChildren} Children`}</Text>
              <Text>{bottomInfo.price}</Text>
            </div>
          )}
          {isInfoOfType(bottomInfo, "HotelInfo") && (
            <div>
              <div className="flex">
                <Text>{`${bottomInfo.numOfRoom} Room`}</Text>
                <Text>{`${bottomInfo.nuOfDays} Night`}</Text>
              </div>
              <Text>{`${bottomInfo.numOfAdults} Adults ${bottomInfo.numOfChildren} Children`}</Text>
              <Text>{bottomInfo.price}</Text>
            </div>
          )}
          {!("price" in bottomInfo) && "numOfRoom" in bottomInfo && (
            <div>
              <div className="flex">
                <Text>{`${bottomInfo.numOfRoom} Room`}</Text>
                <Text>{`${bottomInfo.nuOfDays} Night`}</Text>
              </div>
              <Text>{`${bottomInfo.numOfAdults} Adults ${bottomInfo.numOfChildren} Children`}</Text>
            </div>
          )}
          {!("price" in bottomInfo) && "transferType" in bottomInfo && (
            <div>
              <Text>{bottomInfo.transferType}</Text>
              <Text>{`${bottomInfo.numOfAdults} Adults ${bottomInfo.numOfChildren} Children`}</Text>
            </div>
          )}
          {isInfoOfType(bottomInfo, "VisaInfo") && (
            <div>
              <div className="flex">
                <Text>{`${bottomInfo.visaType}`}</Text>
                <Text>{`${bottomInfo.validity} Days`}</Text>
              </div>
              <Text>{`${bottomInfo.numOfTraveller} Traveller`}</Text>
              <Text>{bottomInfo.price}</Text>
            </div>
          )}
          {!("price" in bottomInfo) && "visaType" in bottomInfo && (
            <div>
              <div className="flex">
                <Text>{`${bottomInfo.visaType}`}</Text>
                <Text>{`${bottomInfo.validity} Days`}</Text>
              </div>
              <Text>{`${bottomInfo.numOfTraveller} Traveller`}</Text>
            </div>
          )}
        </div>
        <ActionButton actionButton={actionButton} />
      </div>
    </div>
  );
};

export { ComponentB };
