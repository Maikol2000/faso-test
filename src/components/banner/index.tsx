import Image from "next/image";
import { FC } from "react";
import Calendar from "@/images/celenda.png";
import Hand from "@/images/hand.png";

interface BannerProps {}

const Banner: FC<BannerProps> = () => {
  return (
    <div className="relative py-16 px-4">
      <div className="absolute left-10 top-1/2 -translate-y-1/2">
        <Image
          src={Calendar}
          alt="Calendar decoration"
          width={120}
          height={120}
          className="w-[282px] h-[268px]"
        />
      </div>
      <div className="absolute right-15 top-1/2 -translate-y-1/2">
        <Image
          src={Hand}
          alt="Pen decoration"
          width={120}
          height={120}
          className="w-[282px] h-[268px]]"
        />
      </div>
      <div className="max-w-4xl mx-auto p-8 bg-white relative">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight">
            Blog{" "}
            <span className="font-bold bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500 bg-clip-text text-transparent">
              FOSO
            </span>{" "}
            <span className="font-light">-</span>
          </h1>
          <div className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
            Cập Nhật Tin Tức{" "}
            <span className="relative inline-block">
              <span
                className="absolute inset-0 bg-teal-500 rounded-full -rotate-1 h-1/2 top-1/2 w-full z-10"
                style={{
                  padding: "0.25em 0.5em",
                }}
              ></span>
              <span className="relative z-20 font-bold">Mới Nhất</span>
            </span>
          </div>
          <p className="text-center text-foso-gray">
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
