interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const fetchData = async ({ id }:{ id: number }): Promise<IPost> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export { fetchData };
