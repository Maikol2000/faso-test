import { blogPosts } from "@/data/blog.json";
import Bom from "@/images/bom.png";
import Image from "next/image";
import Link from "next/link";
import Card from "../card";

export default function RelatedArticles() {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-6">Bài Viết Liên Quan</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(0, 3).map((blog, idx) => (
          <Card
            key={idx}
            date={blog.date}
            href={`/blog/${blog.slug}?id=${blog.id}`}
            thubnail={Bom}
            title={blog.title}
            readingTime={blog.readingTime}
          />
        ))}
      </div>
    </div>
  );
}
