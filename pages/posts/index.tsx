import Link from "next/link";
import { useRouter } from "next/router";

interface Post {
  id: number;
  title: string;
}

interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading</div>;
  }
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h3>
                {post.id}+{post.title}
              </h3>
            </Link>
          </div>
        );
      })}
      <div>
        <Link href="/posts">posts</Link>
      </div>
    </>
  );
}
export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data.slice(0, 3));
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
