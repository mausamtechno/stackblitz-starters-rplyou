import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions"; // Correct import for action logging

import { Button } from "./Button";
import StoryBookParentWrapper from "@/app/components/StoryBookParentWrapper";

// Meta configuration
const meta = {
  title: "Example/Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {},
  },
  decorators: [
    (Story) => (
      <StoryBookParentWrapper>
        <Story />
      </StoryBookParentWrapper>
    ),
  ],
  tags: ["autodocs"],
  args: { onClick: action("clicked") },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  parameters: {},
  args: {
    className: "bg-orange",
    variant: "default",
    size: "sm",
    text: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    className: "bg-lightGreen800 text-white",
    variant: "default",
    size: "default",
    text: "Secondary",
  },
};

export const Large: Story = {
  args: {
    className: "text-steelGrey600",
    variant: "outline",
    size: "lg",
    text: "Large",
  },
};

export const Small: Story = {
  parameters: {},
  args: {
    className: "bg-orange",
    variant: "default",
    size: "sm",
    text: "Small",
  },
};
