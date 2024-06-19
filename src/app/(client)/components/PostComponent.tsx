import { Post } from "@/app/lib/interfaces";
import Link from "next/link";
import { Lilita_One, VT323 } from "next/font/google";
interface Props {
  post: Post;
}

const lilita = Lilita_One({ weight: "400", subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

const cardStyle = `
mb-8
p-4
border
border-gray-900 
rounded-sm
shadow-sm
shadow-purple-950
hover:shadow-md
hover:bg-purple-500 
hover:text-white
hover:dark:bg-gray-950
`;

export default function PostComponent({ post }: Props) {
  return (
    <div className={cardStyle}>
      <Link href={`/posts/${post.slug.current}`}>
        <h2 className={`${lilita.className} text-2xl dark:text-slate-300`}>
          {post.title}
        </h2>
        <p className={`${vt323.className} my-2 text-purple-800`}>
          {new Date(post.publishedAt).toDateString()}
        </p>
        <p className="dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
      </Link>
      {/* TAGS */}
      <div>
        {post?.tags?.map((tag) => (
          <Link href={`/tag/${tag.slug.current}`}>
            <span
              key={tag._id}
              className="mr-2 p-1 rounded-sm lowercase dark:bg-gray-950 border dark:border-gray-900"
            >
              #{tag.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
