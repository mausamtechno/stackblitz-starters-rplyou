import Image from "next/image";
import {
  FC,
  MouseEventHandler,
  ReactNode,
  createContext,
  useContext,
} from "react";

export type TServiceCard = {
  type: "HOTEL" | "VISA" | "TOUR";
  title: string;
  status: "Pending" | "Confirmed" | "Rejected";
  eventDate: string;
  location: string;
  numberOfDaysToFulfill: string;
  imageURL: string;
  // handleActionButtonClick?: MouseEventHandler<HTMLButtonElement>
};

const ServiceCardContext = createContext<TServiceCard>(null!);

export const useServiceCardContext = () => {
  const context = useContext(ServiceCardContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostContext");
  }
  return context;
};

export const ServiceCardContextProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: TServiceCard;
}) => {
  return (
    <ServiceCardContext.Provider value={value}>
      {children}
    </ServiceCardContext.Provider>
  );
};

export const imageURL =
  "/square.avif";

// const ServiceCardHeader: FC<IServiceCardHeader> = ({
//   type,
//   title,
//   children,
// }) => {
//   return (
//     <div className="flex">
//       <p>{type}</p>
//       <p>{title}</p>
//       {children}
//     </div>
//   );
// };

const ActionButton = ({
  handleClick,
}: {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return <button onClick={handleClick}>...</button>;
};

const FulfillmentDay = ({
  numberOfDaysToFulfill,
}: {
  numberOfDaysToFulfill: string;
}) => {
  return <p>{numberOfDaysToFulfill}</p>;
};

const ServiceCard = ({
  value,
  children,
}: {
  value: TServiceCard;
  children: ReactNode;
}) => {
  console.log(children, typeof children, Object.keys(children || {}), "ServiceCard");
  return (
    <ServiceCardContextProvider value={value}>
      <div>{children}</div>
    </ServiceCardContextProvider>
  );
};

{
  /* <div>
          <div>
            
            <ServiceCardHeader title={title} type={type}>
              <ActionButton handleClick={handleClick} />
            </ServiceCardHeader>
            <div>
              <EventDate eventDate={eventDate} />
              <EventLocation location={location} />
            </div>
          </div>
        </div> */
}

ServiceCard.ImageContainer = function ImageContainer() {
  const { imageURL } = useServiceCardContext();

  return <Image src={imageURL} height={200} width={200} alt="" />;
};

ServiceCard.ActionButton = function ActionButton({
  handleClick,
}: {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return <button onClick={handleClick}>...</button>;
};

ServiceCard.ServiceStatus = function ServiceStatus({
  status,
}: {
  status: "Pending" | "Confirmed" | "Rejected";
}) {
  return <p>{status}</p>;
};

ServiceCard.EventDate = function EventDate() {
  const { eventDate } = useServiceCardContext();
  return <p>{`Event Date ${eventDate}`}</p>;
};
ServiceCard.EventLocation = function EventDate() {
  const { location } = useServiceCardContext();
  return <p>{`Location ${location}`}</p>;
};

export default ServiceCard;
