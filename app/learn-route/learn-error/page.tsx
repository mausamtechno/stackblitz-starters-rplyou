"use client";
import { Button } from "@/app/components/common/Button";
import { useState } from "react";

const Page = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("This is a client-side rendering error");
  }

  return (
    <div>
      <h1>Error Boundary Example</h1>
      <p>Click the button to throw an error.</p>
      <Button onClick={() => setHasError(true)}>Throw Error</Button>
    </div>
  );
};

export default Page;
