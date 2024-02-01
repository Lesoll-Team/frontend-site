import BlogSinglePage from "@/components/blogs/blogSinglePage";
import axios from "axios";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

function BlogId({ singleBlog, pathName }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="lg:container mx-auto ">
      <Head>
        <title>
          {language
            ? `${
                singleBlog?.getBlogs.metaTitle.ar ||
                singleBlog?.getBlogs.title.ar
              }`
            : `${
                singleBlog?.getBlogs.metaTitle.en ||
                singleBlog?.getBlogs.title.ar
              }`}
        </title>
        <meta
          name="description"
          content={
            language
              ? `${singleBlog?.getBlogs.metaDescription.ar}`
              : `${singleBlog?.getBlogs.metaDescription.en}`
          }
        />
        <link rel="canonical" href={`https://lesoll.com/blog/${pathName}`} />
      </Head>

      <div className="md:mb-20 mb-10">
        <BlogSinglePage BlogData={singleBlog} />
      </div>
    </div>
  );
}

export default BlogId;

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/blog/singleblogs/${context.query.blogid}`
    );
    const data = await res.data;
    if (data.getBlogs) {
      return {
        props: { singleBlog: data, pathName: context.query.blogid },
      };
    } else {
      context.res.writeHead(410);
      context.res.end();
    }
  } catch (error) {
    if (error.response && error.response.status === 500) {
      context.res.statusCode = 410;
    }
    throw error;
  }
}
