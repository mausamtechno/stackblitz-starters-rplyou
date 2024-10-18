import { Meta, StoryObj } from "@storybook/react";
import TaskList from "./TaskList";
import { TaskProps } from "@/stories/Task";
import { createContext } from "react";
import { GlobalStateProvider } from "@/app/context/GlobalStateProvider";

const meta = {
  component: TaskList,
  title: "Example/Components/TaskList",
  tags: ["autodocs"],
} satisfies Meta<typeof TaskList>;

export default meta;

const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" as const },
  { id: "2", title: "Something more", state: "TASK_INBOX" as const },
  { id: "3", title: "Something else", state: "TASK_INBOX" as const },
  { id: "4", title: "Something again", state: "TASK_INBOX" as const },
];

export type TaskActionHandler = (id: TaskProps["task"]["id"]) => void;
export type TaskListProps = {
  tasks: TaskProps["task"][];
  loading: boolean;
  onArchiveTask: TaskActionHandler;
  onPinTask: TaskActionHandler;
};

const GlobalContext = createContext<TaskListProps>(null!);

type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  decorators: [
    (story) => (
      <GlobalStateProvider taskList={defaultTasks}>
        {story()}
      </GlobalStateProvider>
    ),
  ],
};

export const WithPinnedTasks: Story = {
  decorators: [
    (story) => (
      <GlobalStateProvider
        taskList={[
          ...defaultTasks.map((task, index) =>
            index === 3 ? { ...task, state: "TASK_PINNED" as const } : task
          ),
        ]}
      >
        {story()}
      </GlobalStateProvider>
    ),
  ],
};

export const Loading: Story = {
  decorators: [
    (story) => (
      <GlobalStateProvider taskList={[]} loading={true}>
        {story()}
      </GlobalStateProvider>
    ),
  ],
};

export const Empty: Story = {
  decorators: [
    (story) => (
      <GlobalStateProvider taskList={[]}>
        {story()}
      </GlobalStateProvider>
    ),
  ],
};
