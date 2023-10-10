import React from "react";
import BlogCard from "./blogCard";

function blogsInPage({ blogData }) {
  return (
    <div className="w-full min-h-[75dvh]">
      {/*gap-2 grid grid-cols-1 sm:grid-cols-4 */}
      <BlogCard blogData={blogData} />
    </div>
  );
}

export default React.memo(blogsInPage);
