import BlogsInPage from "@/components/blogs/blogsInPage";
import Head from "next/head";
import React from "react";
import { getAllBlogs } from "@/utils/dashboardApi/blogDashboardAPI";
function Blog({ blogs }) {
  return (
    <div className="container mx-auto  p-5">
      <Head>
        <title>Lesoll Blog</title>
      </Head>
      <div className="py-20">
        <b className="text-7xl text-lightGreen  ">Blog</b>
      </div>
      <BlogsInPage blogData={blogs} />
    </div>
  );
}
export default Blog;

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: { blogs: blogs },
    revalidate: 10,
  };
}
