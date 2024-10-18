"use client";
import { TaskProps } from "@/stories/Task";
import { createContext, useContext, useState } from "react";

export type TaskActionHandler = (id: TaskProps["task"]["id"]) => void
export type TaskListProps = {
  tasks: TaskProps["task"][];
  loading: boolean,
  onArchiveTask: TaskActionHandler;
  onPinTask: TaskActionHandler;
};

const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" as const },
  { id: "2", title: "Something more", state: "TASK_INBOX" as const },
  { id: "3", title: "Something else", state: "TASK_INBOX" as const },
  { id: "4", title: "Something again", state: "TASK_INBOX" as const },
];

const GlobalContext = createContext<TaskListProps>(null!);

export const GlobalStateProvider = ({
  taskList,
  children,
  loading = false
}: {
  children: React.ReactNode;
  taskList: TaskProps["task"][];
  loading?: boolean
}) => {
  const [tasks, setTasks] = useState<TaskProps["task"][]>(taskList);

  const onArchiveTask: TaskActionHandler = (id) => {
    const updatedTasks = tasks.map((_task) => {
      if (_task.id === id) {
        return {
          ..._task,
          state: "TASK_ARCHIVED" as const,
        };
      }
      return _task;
    });
    setTasks(updatedTasks);
  };

  const onPinTask: TaskActionHandler = (id) => {
    const updatedTasks = tasks.map((_task) => {
      if (_task.id === id) {
        return {
          ..._task,
          state: "TASK_PINNED" as const,
        };
      }
      return _task;
    });
    setTasks(updatedTasks);
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        onArchiveTask,
        onPinTask,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalStateProvider"
    );
  }
  return context;
};
