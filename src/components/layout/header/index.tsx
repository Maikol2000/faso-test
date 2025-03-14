import { FC } from "react";
import Logo from "@/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "./language-selector";

interface AppHeaderProps {}

const AppHeader: FC<AppHeaderProps> = () => {
  return (
    <header className="pt-5 pb-4">
      <div className="container mx-auto px-2 py-2 shadow-xl bg-white flex items-center justify-between rounded-3xl">
        <div className="flex items-center justify-between gap-20 w-full mx-20">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              alt="FOSO Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#"
              className="text-gray-700 hover:text-green-500 text-sm"
            >
              Về Chúng tôi
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-green-500 text-sm flex flex-row gap-1"
            >
              <span>Giải pháp</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-green-500 text-sm flex flex-row gap-1"
            >
              <span>Tài nguyên</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-green-500 text-sm"
            >
              Liên hệ
            </Link>
          </nav>
          <div className="flex flex-row gap-4">
            <LanguageSelector />
            <button className="hidden md:block text-sm text-gray-700 hover:bg-teal-500 hover:text-white border border-teal-500 rounded-2xl px-4 py-1.5 cursor-pointer transition-all">
              Đăng nhập
            </button>
            <button className="bg-teal-500 text-gray-700 rounded-full px-4 py-1.5 text-sm flex items-center cursor-pointer border border-teal-500 hover:bg-white transition-all">
              <span>Trở Thành Khách Hàng</span>
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
