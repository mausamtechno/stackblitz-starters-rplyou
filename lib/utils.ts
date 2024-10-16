import {
  BasePriceInfoSchema,
  TBasePrice,
  THotelInfo,
  THotelInfoSchema,
  TTourInfo,
  TTourInfoSchema,
  TVisaInfo,
  TVisaInfoSchema,
} from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Type Guard Function
type InfoType = "BasePriceInfo" | "TourInfo" | "HotelInfo" | "VisaInfo";

function isInfoOfType<T extends InfoType>(
  info: unknown,
  type: T
): info is T extends "BasePriceInfo"
  ? TBasePrice
  : T extends "TourInfo"
  ? TTourInfo
  : T extends "HotelInfo"
  ? THotelInfo
  : T extends "VisaInfo"
  ? TVisaInfo
  : never {
  switch (type) {
    case "BasePriceInfo":
      return BasePriceInfoSchema.safeParse(info).success;
    case "TourInfo":
      return TTourInfoSchema.safeParse(info).success;
    case "HotelInfo":
      return THotelInfoSchema.safeParse(info).success;
    case "VisaInfo":
      return TVisaInfoSchema.safeParse(info).success;
    default:
      return false;
  }
}

export { isInfoOfType };
