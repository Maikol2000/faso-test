"use client";
import ArticleFeedback from "@/components/article-feedback";
import RelatedArticles from "@/components/related-articles";
import SideBarBLogContent from "@/components/sidebar-blog-content";
import { blogPosts } from "@/data/blog.json";
import FacebookLogo from "@/images/facebook.png";
import ZaloLogo from "@/images/Icon_of_Zalo.png";
import LinkedLogo from "@/images/linked.png";
import ReditLogo from "@/images/redit.png";
import XLogo from "@/images/x.png";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

interface BlogDetailProps {}

const BlogDetail: FC<BlogDetailProps> = () => {
  const route = useSearchParams();
  const idBlog = route.get("id");

  const dataBlog = blogPosts.find((d) => d.id == idBlog);
  return (
    <>
      <div className="container mx-auto pb-16 relative py-16">
        <div className="flex flex-col items-center p-4 fixed top-40 left-10 w-fit">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Chia sẻ</h2>

          <div className="flex flex-col items-center">
            <button className="cursor-pointer w-12 h-12 rounded-xl border border-green-500 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-200 mb-3">
              <Image src={ZaloLogo} alt={"Zalo"} />
            </button>
            <button className="cursor-pointer w-12 h-12 rounded-xl border border-green-500 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-200 mb-3">
              <Image src={FacebookLogo} alt={"Zalo"} />
            </button>
            <button className="cursor-pointer w-12 h-12 rounded-xl border border-green-500 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-200 mb-3">
              <Image src={XLogo} alt={"Zalo"} />
            </button>
            <button className="cursor-pointer w-12 h-12 rounded-xl border border-green-500 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-200 mb-3">
              <Image src={LinkedLogo} alt={"Zalo"} />
            </button>
            <button className="cursor-pointer w-12 h-12 rounded-xl border border-green-500 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-200 mb-3">
              <Image src={ReditLogo} alt={"Zalo"} />
            </button>
          </div>
        </div>
        {/* Breadcrumb */}
        <div className="py-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-green-500">
              Trang chủ
            </Link>
            <span>&gt;</span>
            <Link href="/tai-nguyen" className="hover:text-green-500">
              Tài nguyên
            </Link>
            <span>&gt;</span>
            <Link href="/blog" className="hover:text-green-500">
              Blog
            </Link>
            <span>&gt;</span>
            <span className="font-medium">Quản Lý Sản Xuất</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left content */}
          <div className="lg:w-2/3">
            {/* Category tag */}
            <div className="mb-4">
              <Link
                href="/quan-ly-san-xuat"
                className="inline-block px-4 py-1 rounded-md bg-blue-50 text-blue-600 font-medium text-sm hover:bg-blue-100"
              >
                Quản Lý Sản Xuất
              </Link>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {dataBlog?.title}
            </h1>

            {/* Author and date */}
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="text-green-500">
                  {/* <FaLeaf size={18} /> */}
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tác giả</p>
                  <p className="font-medium">FOSO Creator</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Cập nhật vào: {dataBlog?.date}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-gray-400">
                    {/* <FaRegClock size={14} /> */}
                  </div>
                  <span className="text-sm text-gray-600">
                    {dataBlog?.readingTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-8 rounded-lg overflow-hidden bg-blue-50">
              <div className="relative h-64 md:h-96 w-full">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3c2e/9e54/043c2dc1df0b9a516b94427df3ad144d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rxh899ADJSUF~~t3ZdaWzAqmzybf5zxaRhB7E-XaqONn2pmeWMorM6~27b0PafR5SK7p-TNzo~CeFrz1Nvz7iLp5EdEgXetXYs7MURu6Zvo3cmUZxwpHdk5byAoGxc8eNwqVUDQQ~96yo4nQyUFXz1MAw2CeT0w1Bx6UsDkv8eviM~cbD-D3VUivLRPabeHCnOVX27R1NthYY1X5wi-~nivnJhKCVkvyUm1lJunqI9UQGv3qKcHt3~n6VYHaUNGXPPyqxkgCyBtoVEb8zONqj9vd4agc5qb~bC4ZaJ~ccAISqyp~e5pZMMQ1OQ46sz6oVP1O7M45ilQWCO0nisj8Tg__"
                  alt="Quy trình 5S là gì?"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-2 px-4 text-center text-gray-600 text-sm">
                Quy trình 5s là gì?
              </div>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: dataBlog?.content || "" }}
            />
            <ArticleFeedback />
          </div>

          <SideBarBLogContent />
        </div>
        <RelatedArticles />
      </div>
    </>
  );
};

export default BlogDetail;
