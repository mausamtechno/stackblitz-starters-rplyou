import { createContext, ReactNode, useContext } from "react";

export type TPost = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};
const PostContext = createContext<TPost>(null!);

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostContext");
  }
  return context;
};

const PostCard = ({ post, children }: { post: TPost; children: ReactNode }) => {
  return (
    <PostContext.Provider value={post}>
      <div>{children}</div>
    </PostContext.Provider>
  );
};


PostCard.Title = function PostCardTitle() {
  const { title } = usePostContext();
  return <p>{`Title: ${title}`}</p>;
};
PostCard.Name = function PostCardName() {
  const { user } = usePostContext();
  return <p>{`Name: ${user.name}`}</p>;
};
PostCard.Content = function PostCardContent() {
  const { content } = usePostContext();
  return <p>{`Content: ${content}`}</p>;
};

PostCard.Button = function PostCardButton() {
  const handleClick = () => {
    console.log("clicked");
  };
  return <button onClick={handleClick}>Click me</button>;
};

export default PostCard;
