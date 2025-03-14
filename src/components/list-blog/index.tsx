import { FC } from "react";
import CommunityBanner from "../community-banner";
import Link from "next/link";
import Image from "next/image";
import Bom from "@/images/bom.png";
import { blogPosts } from "@/data/blog.json";

interface ListBlogProps {}

const ListBlog: FC<ListBlogProps> = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <h2 className="text-2xl font-bold mb-6">Tất Cả Bài Viết</h2>
        <div className="mb-8">
          <CommunityBanner />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <Link
              href={`/blog/${blog.slug}?id=${blog.id}`}
              className="block relative w-full h-56 overflow-hidden rounded-lg"
            >
              <div className="relative w-full h-full">
                <Image
                  src={Bom}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-4">
              <h3 className="font-bold mb-2">{blog.title}</h3>
              <div className="flex items-center text-gray-500 text-xs space-x-4 mb-3">
                <div className="flex items-center">
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center">
                  <span>{blog.readingTime}</span>
                </div>
              </div>
              <Link
                href={"blog/" + blog.slug + `${"?id=" + blog.id}`}
                className="inline-flex items-center text-gray-600 text-sm"
              >
                Khám phá thêm
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ml-2 h-3 w-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <button className="text-gray-500 flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Trang trước
        </button>
        <div className="flex items-center space-x-2">
          {[1, 2, 3, "...", 9, 10].map((page, index) => (
            <Link
              key={index}
              href="#"
              className={`h-8 w-8 flex items-center justify-center rounded-full ${
                page === 1
                  ? "bg-green-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </Link>
          ))}
        </div>
        <button className="text-gray-500 flex items-center text-sm">
          Trang kế tiếp
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
        </button>
      </div>
    </div>
  );
};

export default ListBlog;
