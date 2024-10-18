import { Meta } from "@storybook/react";
import { Default as TaskDefault } from "./Task.stories";
import TaskList from "./TaskList";

const meta = {
  component: TaskList,
  title: "Example/Components/TaskList",
  decorators: [(story) => <div style={{ margin: "3rem" }}>{story()}</div>],
  tags: ["autodocs"],
  args: {
    
  },
} satisfies Meta<typeof TaskList>;

export default meta

export const Default = {
  args: {
    tasks: [
      { ...TaskDefault.args.task, id: "1", title: "Task 1" },
      { ...TaskDefault.args.task, id: "2", title: "Task 2" },
      { ...TaskDefault.args.task, id: "3", title: "Task 3" },
      { ...TaskDefault.args.task, id: "4", title: "Task 4" },
      { ...TaskDefault.args.task, id: "5", title: "Task 5" },
      { ...TaskDefault.args.task, id: "6", title: "Task 6" },
    ],
  },
};

export const WithPinnedTasks = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
};
