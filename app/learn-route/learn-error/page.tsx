"use client";
import { Button } from "@/app/components/common/Button";

const Page = () => {
  const throwError = () => {
    throw new Error("This is Error");
  };

  return (
    <div>
      Learn Route Error
      <Button className="block" onClick={throwError}>
        Throw Error
      </Button>
    </div>
  );
};

export default Page;
