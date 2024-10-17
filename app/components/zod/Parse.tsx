import { number, z } from "zod";

const Parse = () => {
  const ObjectSchema = z.object({
    name: z.string(),
    age: z.number().optional(),
  });

  const name = "mausam";

  const checkForString = z.coerce.string({
    required_error: "Value can't be empty",
    message: "Value must be string",
  });
  const checkForDate = z.coerce.date();

  console.log(checkForDate.safeParse("10/10/2035"), "check For date"); //

  const checkforEmail = z.coerce.string().email().min(7);

  console.log(checkforEmail.safeParse("mausam"), "check for email");

  console.log(checkForString.parse(32), checkForString.parse(true));

  const tuna = z.literal("tuna");
  const twelve = z.literal(12);
  const twobig = z.literal(2n); // bigint literal
  const tru = z.literal(true);

  console.log(tuna.safeParse("muasm"), twelve, twobig, tru);

  type TObject = z.infer<typeof ObjectSchema>;
  console.log(ObjectSchema.safeParse({ age: 88 }), "objectSchema");
  console.log(ObjectSchema, "objectSchema log");

  //   console.log(stringParser.parse("23"));
  //   console.log(stringParser.safeParse(true));
  //   console.log(stringParser.safeParse(22));
  //   console.log(stringParser.safeParse({ name: "mausam" }));

  const FishEnum = z.enum(["tuna", "puna", "funa"]);
  const values = ["tuna", "puna", "funa"] as const;
  const UpdatedFishEnum = z.enum(values);
  type TFishEnum = z.infer<typeof FishEnum>;
  type TUpdatedFishEnum = z.infer<typeof UpdatedFishEnum>;

  const Animal = z.object({
    age: z.number(),
    name: z.string(),
    dog: z.object({
      name: z.string(),
      age: z.number(),
    }),
  });

  const DogSchema = Animal.shape.dog
  type TDog = z.infer<typeof DogSchema>
  const keys = Animal.keyof()
  // console.log(keys, "keys of Animal")
  return <div>Zod</div>;
};

export default Parse;
