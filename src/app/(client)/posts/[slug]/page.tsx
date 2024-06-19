import React from "react";
import Header from "../../components/Header";
import { client } from "../../../../../sanity/lib/client";
import { type Post } from "@/app/lib/interfaces";
import { VT323 } from "next/font/google";
import Link from "next/link";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "../../../../../sanity/lib/image";
import { notFound } from "next/navigation";

export const revalidate = 60;

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

interface Props {
  params: {
    slug: string;
  };
}
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"] [0] {
        title,
        body,
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
export default async function Post({ params }: Props) {
  const { slug } = params;
  const post: Post = await getPost(slug);
  if (!post) {
    return notFound();
  }
  return (
    <div>
      <Header title={post.title} />
      <div className="text-center">
        <span className={`${vt323.className} text-purple-500`}>
          {new Date(post.publishedAt).toDateString()}
        </span>
        <div className="mt-5">
          {post.tags.map((tag) => {
            return (
              <Link href={`/tag/${tag.slug.current}`}>
                <span className="mr-2 p-1 rounded-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                  #{tag.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="richText">
        <PortableText value={post.body} components={myPortableTextComponents} />
      </div>
    </div>
  );
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlForImage(value)} alt="Post" width={700} height={700} />
    ),
  },
};
