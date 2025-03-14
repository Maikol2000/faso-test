import Image from "next/image";
import Link from "next/link";
import JoinWithUS from "@/images/join-with-us.png";

export default function TrialSectionTwo() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 h-full">
      {/* Illustration */}
      <div>
        <Image
          src={JoinWithUS}
          alt="FMRP Community"
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="text-white px-6 py-16">
        <p className="font-bold leading-tight mb-8">
          Gia nhập cộng đồng FMRP Việt - Kết nối, chia sẻ, cùng phát triển!
        </p>
        <Link
          href="#"
          className="inline-flex items-center px-8 py-4 border-2 border-white rounded-full text-lg font-medium transition-all hover:bg-white hover:text-blue-600 hover:scale-105"
        >
          Tham Gia Ngay
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-2 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
