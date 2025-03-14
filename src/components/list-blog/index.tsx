import { FC } from "react";
import CommunityBanner from "../community-banner";
import Link from "next/link";
import Image from "next/image";
import Bom from "@/images/bom.png";
import { blogPosts } from "@/data/blog.json";
import Card from "../card";

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
          <Card
            key={index}
            date={blog.date}
            href={`/blog/${blog.slug}?id=${blog.id}`}
            thubnail={Bom}
            title={blog.title}
            readingTime={blog.readingTime}
          />
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
