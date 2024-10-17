async function getPosts() {
  return [
    { id: "1", title: "Post 1" },
    { id: "2", title: "Post 2" },
    { id: "3", title: "Post 3" },
  ];
}
async function getPostById(id: number) {
  return [
    { id: "1", title: "Post 1" },
    { id: "2", title: "Post 2" },
    { id: "3", title: "Post 3" },
  ][id];
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostPage({ params }: { params: { dynamic: number } }) {
  console.log(params, "params")
  const post = await getPostById(params.dynamic);

  return (
    <div>
      <h1>Title</h1>
      <h1>{post.title}</h1>
    </div>
  );
}
