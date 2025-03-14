import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import JoinWithUS from "@/images/join-with-us.png";
import TrialSectionOne from "./trial-section-one";
import TrialSectionTwo from "./trial-section-two";
import data from "@/data/blog.json";

interface SideBarSearchProps {}

const SideBarSearch: FC<SideBarSearchProps> = () => {
  return (
    <div className="lg:w-1/3">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-medium mb-4">Tìm Kiếm</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Nhập từ khóa..."
            className="w-full border rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-teal-400 text-white p-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-medium mb-4">Danh Mục</h3>
        <ul className="space-y-3">
          {data.blogCategories.map((cate, idx) => {
            return (
              <li className="flex justify-between items-center" key={idx}>
                <p className="text-gray-700 hover:text-green-500">
                  {cate.name}
                </p>
                <span className="text-gray-500">{cate.count}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="space-y-6">
        <TrialSectionOne />
        <TrialSectionTwo />
      </div>
    </div>
  );
};

export default SideBarSearch;
