import { FC, MouseEventHandler } from "react";

export type TaskProps = {
  task: { id: number; title: string; state: "TASK_PINNED" | "TASK_INBOX" | "TASK_ARCHIVED" };
  onArchiveTask: MouseEventHandler<HTMLButtonElement>;
  onPinTask: MouseEventHandler<HTMLButtonElement>;
};

const Task: FC<TaskProps> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div className="list-item">
      <label htmlFor={`title-${id}`} aria-label={title}>
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          id={`title-${id}`}
        />
      </label>
    </div>
  );
};

export default Task