import React from "react";
import { Button, ButtonProps } from "./Button";

type ButtonGroupProps = {
  buttons: ButtonProps[];
  orientation?: "horizontal" | "vertical";
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  orientation = "horizontal",
}) => {
  return (
    <div
      className={`flex ${
        orientation === "vertical" ? "flex-col gap-y-4" : "flex-row gap-x-4"
      }`}
    >
      {buttons.map((buttonProps, index) => (
        <Button className="block" key={index} {...buttonProps}>
          {buttonProps.text} {/* Ensure the text is passed to children */}
        </Button>
      ))}
    </div>
  );
};
