import Banner from "@/components/banner";
import ListBlog from "@/components/list-blog";
import SideBarSearch from "@/components/side-bar-search-blog";
import { FC } from "react";

interface BlogsProps {}

const Blogs: FC<BlogsProps> = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <ListBlog />
          <SideBarSearch />
        </div>
      </div>
    </>
  );
};

export default Blogs;
