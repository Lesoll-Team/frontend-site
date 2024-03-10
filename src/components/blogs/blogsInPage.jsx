import React from "react";
import BlogCard from "./blogCard";
function blogsInPage({ blogData }) {
  return (
    <div className="w-full  min-h-[75dvh]">
      <BlogCard blogData={blogData} />
    </div>
  );
}
export default React.memo(blogsInPage);
