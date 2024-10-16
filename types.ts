import { z } from "zod";

const BasePriceInfoSchema = z.object({
  price: z.string(),
});

const TTourInfoSchema = z.object({
  price: z.string(),
  transferType: z.string(),
  numOfAdults: z.number(),
  numOfChildren: z.number(),
});

const THotelInfoSchema = z.object({
  price: z.string(),
  numOfRoom: z.number(),
  nuOfDays: z.number(),
  numOfAdults: z.number(),
  numOfChildren: z.number(),
});

const TVisaInfoSchema = z.object({
  price: z.string(),
  visaType: z.string(),
  numOfTraveller: z.number(),
  validity: z.number(),
});

export type TBasePrice = z.infer<typeof BasePriceInfoSchema>;

export type TTourInfo = z.infer<typeof TTourInfoSchema>;

export type TVisaInfo = z.infer<typeof TVisaInfoSchema>;

export type THotelInfo = z.infer<typeof THotelInfoSchema>;

export {
  BasePriceInfoSchema,
  TTourInfoSchema,
  THotelInfoSchema,
  TVisaInfoSchema,
};
