import { imageURL, TServiceCard } from "../ServiceCard";
import {
  ActionButton,
  PostHotelBookingInfo,
  PostTourBookingInfo,
  PostVisaBookingInfo,
} from "./BottomWrapper";
import {
  HotelDescription,
  ImageAndDescription,
  TourDescription,
  VisaDescription,
} from "./ImageWrapper";
import { ServiceStatus } from "./ServiceStatusContainer";

type TUpdatedServiceCard = {
  step: "prebooking" | "postbooking" | "cart";
  serviceType: TServiceCard["type"];
};

const data: TServiceCard = {
  type: "TOUR",
  imageURL,
  title: "This is Tour title",
  location: "Dubai",
  eventDate: "22Oct 2025",
  status: "Confirmed",
  numberOfDaysToFulfill: "4 days",
};

const UpdatedServiceCard = ({ step, serviceType }: TUpdatedServiceCard) => {
  const { imageURL, type, title, location, eventDate, status } = data;

  const renderActionForPostBookingInfo = ({
    serviceType,
  }: {
    serviceType: TUpdatedServiceCard["serviceType"];
  }) => {
    switch (serviceType) {
      case "HOTEL":
        return (
          <PostHotelBookingInfo
            roomCount={3}
            bookingDuration={4}
            adultGuestCount={3}
            childGuestCount={3}
          />
        );
      case "TOUR":
        return (
          <PostTourBookingInfo
            type="Private Transfers"
            adultCount={3}
            childrenCount={3}
          />
        );
      case "VISA":
        return (
          <PostVisaBookingInfo
            type="Single Entry"
            duration={50}
            travellerCount={3}
          />
        );
      default:
        return null;
    }
  };

  const renderActionForStatus = ({
    step,
  }: {
    step: TUpdatedServiceCard["step"];
  }) => {
    switch (step) {
      case "prebooking":
        return null;
      case "postbooking":
        return <ServiceStatus status={status} />;
      default:
        return null;
    }
  };

  const renderActionForCardDescription = ({
    serviceType,
  }: {
    serviceType: TUpdatedServiceCard["serviceType"];
  }) => {
    switch (serviceType) {
      case "HOTEL":
        return (
          <HotelDescription
            location={location}
            bookingDateRange="23 Mar 2024 - 28 Mar 2024"
          />
        );
      case "TOUR":
        return <TourDescription location={location} eventDate={eventDate} />;
      case "VISA":
        return (
          <VisaDescription
            eventDate="19 Mar 2024"
            serviceProcessingTime="3 - 4 Working day"
          />
        );
      default:
        return null;
    }
  };

  const renderActionForActionButton = ({
    step,
  }: {
    step: TUpdatedServiceCard["step"];
  }) => {
    switch (step) {
      case "prebooking":
        return (
          <ActionButton
            primaryBtnText="Remove"
            secondaryBtnText="Book Now"
            handlePrimaryBtnClick={handlePrimaryBtnClick}
            handleSecondaryBtnClick={handleSecondaryBtnClick}
          />
        );
      case "postbooking":
        return (
          <ActionButton
            primaryBtnText="Get Help"
            secondaryBtnText="Vouchers"
            handlePrimaryBtnClick={handlePrimaryBtnClick}
            handleSecondaryBtnClick={handleSecondaryBtnClick}
          />
        );

      default:
        break;
    }
  };
  const handlePrimaryBtnClick = () => {};
  const handleSecondaryBtnClick = () => {};

  return (
    <>
      <div className="p-4 shadow-md rounded-md">
        <ImageAndDescription imageURL={imageURL} title={title} type={type}>
          <div className="flex justify-between gap-x-10">
            {renderActionForCardDescription({ serviceType })}
            {renderActionForStatus({ step })}
          </div>
        </ImageAndDescription>
        <div className="flex justify-between">
          {renderActionForPostBookingInfo({ serviceType })}
          {renderActionForActionButton({ step })}
        </div>
      </div>
    </>
  );
};

export default UpdatedServiceCard;
