import { MouseEventHandler, ReactNode } from "react";
import { TServiceCard } from "../ServiceCard";

const ServiceStatus = ({ status }: { status: TServiceCard["status"] }) => {
  const config = {
    Pending: {
      textColor: "#FF8229",
      bgColor: "#FFF6F0",
    },
    Confirmed: {
      textColor: "#1F9E45",
      bgColor: "#F0FFF6",
    },
    Rejected: {
      textColor: "#DC232F",
      bgColor: "#FFF1F0",
    },
  };

  return (
    <p
      className={`py-1 px-2 text-center text-xs rounded text-${config[status].textColor} bg-${config[status].bgColor}`}
    >
      {status}
    </p>
  );
};

const CartActionButton = ({
  handleClick,
}: {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11.5333 11.5C11.5333 11.6326 11.5825 11.7598 11.67 11.8536C11.7575 11.9473 11.8762 12 12 12C12.1238 12 12.2425 11.9473 12.33 11.8536C12.4175 11.7598 12.4667 11.6326 12.4667 11.5C12.4667 11.3674 12.4175 11.2402 12.33 11.1464C12.2425 11.0527 12.1238 11 12 11C11.8762 11 11.7575 11.0527 11.67 11.1464C11.5825 11.2402 11.5333 11.3674 11.5333 11.5ZM5 11.5C5 11.6326 5.04917 11.7598 5.13668 11.8536C5.2242 11.9473 5.3429 12 5.46667 12C5.59043 12 5.70913 11.9473 5.79665 11.8536C5.88417 11.7598 5.93333 11.6326 5.93333 11.5C5.93333 11.3674 5.88417 11.2402 5.79665 11.1464C5.70913 11.0527 5.59043 11 5.46667 11C5.3429 11 5.2242 11.0527 5.13668 11.1464C5.04917 11.2402 5 11.3674 5 11.5ZM18.0667 11.5C18.0667 11.6326 18.1158 11.7598 18.2034 11.8536C18.2909 11.9473 18.4096 12 18.5333 12C18.6571 12 18.7758 11.9473 18.8633 11.8536C18.9508 11.7598 19 11.6326 19 11.5C19 11.3674 18.9508 11.2402 18.8633 11.1464C18.7758 11.0527 18.6571 11 18.5333 11C18.4096 11 18.2909 11.0527 18.2034 11.1464C18.1158 11.2402 18.0667 11.3674 18.0667 11.5Z"
          fill="#2F2F2F"
          stroke="#2F2F2F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

const ServiceStatusContainer = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};
export { ServiceStatusContainer, ServiceStatus, CartActionButton };
