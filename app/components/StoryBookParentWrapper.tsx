import { ReactNode } from "react";

const StoryBookParentWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>Story book parent wrapper</p>
      {children}
    </div>
  );
};

export default StoryBookParentWrapper;
