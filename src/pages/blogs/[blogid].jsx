import BlogSinglePage from "@/components/blogs/blogSinglePage";
import axios from "axios";
import React from "react";

function blogId({ singleBlog }) {
  // console.log(singleBlog);
  return (
    <div className="container mx-auto">
      <div className="py-10">
        <b className="text-7xl text-lightGreen  ">Blog Details</b>
      </div>
      <div className="mb-20">
        <BlogSinglePage BlogData={singleBlog} />
      </div>
    </div>
  );
}

export default blogId;

export async function getServerSideProps(context) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/blog/singleblogs/${context.query.blogid}`
  );
  const data = await res.data;
  return {
    props: { singleBlog: data },
    // revalidate:10,
  };
}
