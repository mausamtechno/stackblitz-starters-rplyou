"use client";
import { useEffect } from "react";
import TaskList from "./TaskList";
import { useGlobalContext } from "@/app/context/GlobalStateProvider";

export default function InboxScreen() {
  const { fetchTasks, error } = useGlobalContext();

  useEffect(() => {
    fetchTasks();
  }, []);

  return error ? (
    <div className="page lists-show">
      <div className="wrapper-message">
        <span className="icon-face-sad" />
        <p className="title-message">Oh no!</p>
        <p className="subtitle-message">Something went wrong</p>
      </div>
    </div>
  ) : (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">Taskbox</h1>
      </nav>
      <TaskList />
    </div>
  );
}
