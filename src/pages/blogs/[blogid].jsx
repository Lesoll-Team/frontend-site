import BlogSinglePage from "@/components/blogs/blogSinglePage";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

function blogId({ singleBlog }) {
  // console.log(singleBlog);
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="lg:container mx-auto ">
      <div className="py-10">
        <b className="text-4xl md:text-5xl lg:text-6xl text-lightGreen  ">{language ? "تفاصيل المقال" : "Blog Details"}</b>
      </div>
      <div className="md:mb-20 mb-10">
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
