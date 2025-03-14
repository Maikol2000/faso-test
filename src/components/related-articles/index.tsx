import { blogPosts } from "@/data/blog.json";
import Bom from "@/images/bom.png";
import Image from "next/image";
import Link from "next/link";

export default function RelatedArticles() {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-6">Bài Viết Liên Quan</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(0, 3).map((article) => (
          <div
            key={article.id}
            className="flex flex-col rounded-lg overflow-hidden"
          >
            {/* Article Image */}
            <Link
              href={`/blog/${article.slug}?id=${article.id}`}
              className="block relative w-full h-56 overflow-hidden rounded-lg"
            >
              <div className="relative w-full h-full">
                <Image
                  src={Bom}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
            <Link href={`/blog/${article.slug}`} className="block mt-2 mb-3">
              <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
            </Link>

            {/* Article Meta */}
            <div className="flex items-center text-sm text-gray-500 mt-auto">
              <div className="flex items-center mr-4">
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <span>{article.readingTime}</span>
              </div>
            </div>

            {/* Read More Link */}
            <Link
              href={`/blog/${article.slug}`}
              className="flex items-center text-teal-600 mt-3 text-sm font-medium hover:text-teal-700 transition-colors group"
            >
              Khám phá thêm
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
