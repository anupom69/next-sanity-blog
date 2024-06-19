import { client } from "@/../sanity/lib/client";
import Header from "./components/Header";
import { Post } from "../lib/interfaces";
import PostComponent from "./components/PostComponent";

export const revalidate = 60;

async function getPosts() {
  const query = `*[_type == "post"] {
    title,
      slug,
      publishedAt,
      excerpt,
      _id,
      tags[] -> {
      name, slug, _id
    }
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts: Post[] = await getPosts();
  return (
    <div>
      <Header title="Articles" />
      <div>
        {posts?.length > 0 &&
          posts.map((post) => <PostComponent key={post._id} post={post} />)}
      </div>
    </div>
  );
}
