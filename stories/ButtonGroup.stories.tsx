import type { Meta, StoryObj } from "@storybook/react";
import * as ButtonStories from "./Button.stories";
import { ButtonGroup } from "./ButtonGroup";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: "Example/Components/ButtonGroup",
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Horizontal: Story = {
  args: {
    buttons: [
      { ...ButtonStories.Primary.args, text: "Primary" },
      { ...ButtonStories.Secondary.args, text: "Secondary" },
      { ...ButtonStories.Large.args, text: "Large" },
      { ...ButtonStories.Small.args, text: "Small" },
    ],
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    buttons: [
      { ...ButtonStories.Primary.args, text: "Primary" },
      { ...ButtonStories.Secondary.args, text: "Secondary" },
      { ...ButtonStories.Large.args, text: "Large" },
      { ...ButtonStories.Small.args, text: "Small" },
    ],
    orientation: "horizontal",
  },
};
