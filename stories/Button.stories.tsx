import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions"; // Correct import for action logging

import { Button } from "./Button";
import StoryBookParentWrapper from "@/app/components/StoryBookParentWrapper";

// Meta configuration
const meta = {
  title: "Example/Components/Button",
  component: Button,
  parameters: {
    layout: "centered", // Center the component in the Storybook canvas
  },
  decorators: [(Story) => (
    <StoryBookParentWrapper>
      <Story />
    </StoryBookParentWrapper>
  ),],
  tags: ["autodocs"], // Automatic docs generation
  args: { onClick: action("clicked") }, // Log clicks to the Storybook Actions panel
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>; // Correct Story type

// Primary story
export const Primary: Story = {
  args: {
    className: "bg-orange", // Add any required className
    variant: "default", // Set your variant prop
    size: "sm",
    text: "Primary",
  },
};

// Secondary story
export const Secondary: Story = {
  args: {
    className: "bg-lightGreen800 text-white",
    variant: "default",
    size: "default",
    text: "Secondary",
  },
};

// Large story
export const Large: Story = {
  args: {
    className: "text-steelGrey600",
    variant: "outline",
    size: "lg",
    text: "Large",
  },
};

// Small story
export const Small: Story = {
  parameters: {},
  args: {
    className: "bg-orange",
    variant: "default",
    size: "sm",
    text: "Small",
  },
};