import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import JoinWithUs from "@/images/join-with-us.png";

interface CommunityBannerProps {}

const CommunityBanner: FC<CommunityBannerProps> = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 to-blue-600">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng phát triển!
            </h2>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 text-blue-600 bg-white rounded-full font-medium transition-transform hover:scale-105 hover:shadow-lg"
            >
              Tham Gia Ngay
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>

          {/* Illustration */}
          <div className="relative min-h-[300px] top-20">
            <Image
              src={JoinWithUs}
              alt="FMRP Community Illustration"
              fill
              className=""
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBanner;
