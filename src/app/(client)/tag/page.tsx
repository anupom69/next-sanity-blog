import { Tag } from "@/app/lib/interfaces";
import { client } from "../../../../sanity/lib/client";
import Header from "../components/Header";
import Link from "next/link";

export const revalidate = 60;

async function fetchTags() {
  const query = `*[_type == "tag"] {
  name,
    _id,
    slug,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
}`;
  const data = await client.fetch(query);
  return data;
}
export default async function Tags() {
  const tags: Tag[] = await fetchTags();
  return (
    <div>
      <Header title="Tags" />
      <div>
        {tags?.length > 0 &&
          tags.map((tag) => (
            <Link key={tag._id} href={`/tag/${tag.slug.current}`}>
              <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
                #{tag.name} ({tag.postCount})
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
