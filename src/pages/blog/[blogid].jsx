import BlogSinglePage from "@/components/blogs/blogSinglePage";
import axios from "axios";
import Head from "next/head";
import React from "react";

function blogId({ singleBlog }) {
  return (
    <div className=" ">
      <Head>
        <title>
          {singleBlog?.getBlogs.metaTitle.ar || singleBlog?.getBlogs.title.ar}
        </title>
        <meta
          name="description"
          content={`${singleBlog?.getBlogs.metaDescription.ar}`}
        />
        <link
          rel="canonical"
          href={`https://lesoll.com/blog/${singleBlog.getBlogs.slug.ar}`}
        />
      </Head>

      <BlogSinglePage BlogData={singleBlog} />
    </div>
  );
}

export default blogId;

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/blog/singleblogs/${context.query.blogid}`,
    );
    const data = await res.data;
    if (data.getBlogs) {
      return {
        props: { singleBlog: data },
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
