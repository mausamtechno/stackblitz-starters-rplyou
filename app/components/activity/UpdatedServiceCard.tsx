import { imageURL, TServiceCard } from "../ServiceCard";
import {
  PostHotelBookingInfo,
  PostTourBookingInfo,
  PostVisaBookingInfo,
  ServiceCardBottomWrapper,
} from "./BottomWrapper";
import {
  HotelDescription,
  ImageAndDescription,
  TourDescription,
  VisaDescription,
} from "./ImageWrapper";
import { ServiceStatus } from "./ServiceStatusContainer";

type TUpdatedServiceCard = {
  step: "prebooking" | "postbooking";
  serviceType: TServiceCard["type"];
};

const data: TServiceCard = {
  type: "TOUR",
  imageURL,
  title: "This is Tour title",
  location: "Dubai",
  eventDate: "22Oct 2025",
  status: "Pending",
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
    status,
  }: {
    step: TUpdatedServiceCard["step"];
    status: TServiceCard["status"];
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
  const handlePrimaryBtnClick = () => {};
  const handleSecondaryBtnClick = () => {};

  return (
    <>
      <div>
        <ImageAndDescription imageURL={imageURL} title={title} type={type}>
          <div className="flex justify-between">
            {renderActionForCardDescription({ serviceType })}
            {renderActionForStatus({ step, status })}
          </div>
        </ImageAndDescription>
        <ServiceCardBottomWrapper
          primaryBtnText="primary"
          secondaryBtnText="secondary"
          handlePrimaryBtnClick={handlePrimaryBtnClick}
          handleSecondaryBtnClick={handleSecondaryBtnClick}
        >
          {renderActionForPostBookingInfo({ serviceType })}
        </ServiceCardBottomWrapper>
      </div>
    </>
  );
};

export default UpdatedServiceCard;
