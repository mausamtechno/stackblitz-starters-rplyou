import { fetchData } from "../utils";

const FetchPostData = async () => {
  console.log("This is Fetch Post server component");
  const data = await fetchData({ id: 2 });
  console.log(data, "FetchPostData Inside server component.");
  return <div>{JSON.stringify(data)}</div>;
};

export default FetchPostData;
