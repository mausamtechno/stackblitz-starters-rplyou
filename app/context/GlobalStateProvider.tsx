"use client";
import { TaskProps } from "@/stories/Task";
import { createContext, useContext, useState } from "react";

export const fetchPostURL =
  "https://jsonplaceholder.typicode.com/todos?userId=1";

export type TaskActionHandler = (id: TaskProps["task"]["id"]) => void;
export type TaskListProps = {
  tasks: TaskProps["task"][];
  loading: boolean;
  onArchiveTask: TaskActionHandler;
  onPinTask: TaskActionHandler;
  fetchTasks: () => Promise<void>;
  error: boolean;
};

const GlobalContext = createContext<TaskListProps>(null!);

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tasks, setTasks] = useState<TaskProps["task"][]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch(fetchPostURL);
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      
      const data = await response.json();
      console.log('167363631369038368 ', data);

      const result: TaskProps["task"][] = data.map((task: any) => ({
        id: `${task.id}`,
        title: task.title,
        state: task.completed ? "TASK_ARCHIVED" : "TASK_INBOX",
      }));

      setTasks(result);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      throw error;
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        onArchiveTask,
        onPinTask,
        fetchTasks,
        loading,
        error,
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
