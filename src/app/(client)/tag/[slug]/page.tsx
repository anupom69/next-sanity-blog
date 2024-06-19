import React from "react";
import { client } from "../../../../../sanity/lib/client";
import { Post } from "@/app/lib/interfaces";
import Header from "../../components/Header";
import PostComponent from "../../components/PostComponent";
import Link from "next/link";

export const revalidate = 60;

interface Props {
  params: {
    slug: string;
  };
}

async function fetchPostsWithTag(tagSlug: string) {
  const query = `*[_type == "post" && references(*[_type == "tag" && slug.current == "${tagSlug}"]._id)] {
    title,
      slug,
      publishedAt,
      excerpt,
      _id,
      tags[] -> {
      name, slug, _id
    }
    } `;
  const data = await client.fetch(query);
  return data;
}

export default async function TagPosts({ params }: Props) {
  const { slug } = params;
  const posts: Post[] = await fetchPostsWithTag(slug);
  return (
    <div>
      <Header title={`All posts with`}>
        <div className="space-x-2">
          <span className="cursor-pointer pt-4 text-xl font-semibold underline text-purple-700 dark:text-purple-800 uppercase">
            #{slug}
          </span>
          <span className="pt-4 text-xl font-semibold underline text-purple-700 dark:text-purple-800 uppercase">
            <Link href="/tag">#all</Link>
          </span>
        </div>
      </Header>
      <div>
        {posts?.length > 0 &&
          posts.map((post) => <PostComponent key={post._id} post={post} />)}
      </div>
    </div>
  );
}
