import { ImageAndDescription } from "@/app/components/activity/ImageWrapper";
import { Meta, StoryObj } from "@storybook/react";
import { imageURL } from "@/lib/data";

const meta = {
  title: "Example/ImageWrapper",
  component: ImageAndDescription,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ImageAndDescription>;

export default meta;

type Story = StoryObj<typeof ImageAndDescription>;

export const Tour: Story = {
  args: {
    imageURL,
    type: "TOUR",
    title: "This is tour title",
    children: <div>This is tour children</div>,
  },
};

export const Visa: Story = {
  args: {
    ...Tour.args,
    type: "VISA",
    title: "This is visa title",
    children: <div>This is visa children</div>,
  },
};

export const Hotel: Story = {
  args: {
    ...Tour.args,
    type: "HOTEL",
    title: "This is hotel title",
    children: <div>This is hotel children</div>,
  },
};

