import { Meta } from "@storybook/react";
import Task from "./Task";
import { fn } from "@storybook/test";

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

const meta = {
  title: "Example/Components/Task",
  component: Task,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Task>;

export default meta;

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned = {
  args: {
    task: {
      title: "Pinned Task",
      id: "2",
      state: "TASK_PINNED",
    },
  }, 
};

export const Archived = {
  args: {
    task: {
      title: "Pinned Task",
      id: "3",
      state: "TASK_ARCHIVED",
    },
  },
};
