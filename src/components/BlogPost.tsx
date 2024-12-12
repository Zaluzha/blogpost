import Link from "next/link";
import { BlogPage } from "@/lib/contentful";

interface BlogPageProps {
  post: BlogPage;
}

export default function BlogPost({ post }: BlogPageProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{post.fields.title}</h2>
        <p className="text-gray-600 mb-4">{post.fields.excerpt}</p>
        <Link
          href={`/post/${post.sys.id}`}
          className="text-blue-500 hover:underline"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
