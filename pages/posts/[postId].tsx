interface PostProps {
  post: {
    id: string;
    title: string;
    body: string;
  };
}

function Post({ post }: PostProps) {
  return (
    <>
      <h3>
        {post.id}+{post.title}
      </h3>
      <p>{post.body}</p>
    </>
  );
}
export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: false,
  };
}
export async function getStaticProps(context: { params: { postId: string } }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
