import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CardProps {
  href: string;
  thubnail: StaticImageData;
  title: string;
  date: string;
  readingTime: string;
}

const Card: FC<CardProps> = ({ href, thubnail, title, date, readingTime }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md">
      <Link
        href={href}
        className="block relative w-full h-56 overflow-hidden rounded-lg"
      >
        <div className="relative w-full h-full">
          <Image
            src={thubnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col gap-3 justify-between flex-1">
        <h3 className="font-bold mb-2">{title}</h3>
        <div className="space-x-3">
          <div className="flex items-center text-gray-500 text-xs space-x-4 mb-3">
            <div className="flex items-center">
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <span>{readingTime}</span>
            </div>
          </div>
          <Link
            href={href}
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
    </div>
  );
};

export default Card;
