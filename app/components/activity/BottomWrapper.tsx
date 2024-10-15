import { MouseEventHandler, ReactNode } from "react";

type TActionButton = {
  primaryBtnText: string;
  secondaryBtnText: string;
  handlePrimaryBtnClick: MouseEventHandler<HTMLButtonElement>;
  handleSecondaryBtnClick: MouseEventHandler<HTMLButtonElement>;
};

type TPostHotelBookingInfo = {
  roomCount: number;
  bookingDuration: number;
  adultGuestCount: number;
  childGuestCount: number;
};
type TPostVisaBookingInfo = {
  type: string;
  duration: number;
  travellerCount: number;
};
type TPostTourBookingInfo = {
  type: string;
  adultCount: number;
  childrenCount: number;
};

const ActionButton = ({
  primaryBtnText,
  secondaryBtnText,
  handlePrimaryBtnClick,
  handleSecondaryBtnClick,
}: TActionButton) => {
  return (
    <div className="flex gap-x-1">
      <button className="block py-1 px-2 border p-3" onClick={handleSecondaryBtnClick}>
        {secondaryBtnText}
      </button>
      <button className="block py-1 px-2 bg-orange text-white border rounded p-3" onClick={handlePrimaryBtnClick}>
        {primaryBtnText}
      </button>
    </div>
  );
};

const PriceInfo = ({ price }: { price: string }) => {
  return (
    <div>
      <p className="text-xs leading-4">Starts from</p>
      <p className="font-semibold leading-5">{`${price}`}</p>
    </div>
  );
};

const PostHotelBookingInfo = ({
  roomCount,
  adultGuestCount,
  childGuestCount,
  bookingDuration,
}: TPostHotelBookingInfo) => {
  return (
    <div>
      <p>{`${roomCount} Room ${bookingDuration} Night`}</p>
      <p>{`${adultGuestCount} Adults ${childGuestCount} Children`}</p>
    </div>
  );
};
const PostVisaBookingInfo = ({
  travellerCount,
  type,
  duration,
}: TPostVisaBookingInfo) => {
  return (
    <div>
      <p>{`${type} ${duration} Days`}</p>
      <p>{`${travellerCount} Travellers`}</p>
    </div>
  );
};

const PostTourBookingInfo = ({
  adultCount,
  childrenCount,
  type,
}: TPostTourBookingInfo) => {
  return (
    <div>
      <p>{type}</p>
      <p>{`${adultCount} Adults ${childrenCount} Children`}</p>
    </div>
  );
};;

export {
  ActionButton,
  PriceInfo,
  PostHotelBookingInfo,
  PostTourBookingInfo,
  PostVisaBookingInfo,
};
