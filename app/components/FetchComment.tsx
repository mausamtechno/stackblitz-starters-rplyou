"use server"
import { fetchComment } from "../utils";

const FetchComment = async () => {
  console.log("This is Fetch Comment server component");
  const data = await fetchComment({ id: 2 });
  console.log(data, "FetchComment Inside server component.");
  return <div>{JSON.stringify(data)}</div>;
};

export default FetchComment;
