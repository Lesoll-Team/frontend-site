import BlogSinglePage from "@/components/blogs/blogSinglePage";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function blogId({ singleBlog }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const path = router.asPath;

  return (
    <div className="lg:container mx-auto ">
      <Head>
<<<<<<< HEAD
        <title>{language?`تفاصيل المقال عن ${singleBlog?.getBlogs.title.ar}`:` Article details about ${singleBlog?.getBlogs.title.en}`}</title>
=======
        <title>{language?`${singleBlog?.getBlogs.metaTitle.ar||singleBlog?.getBlogs.title.ar}`:`${singleBlog?.getBlogs.metaTitle.en ||singleBlog?.getBlogs.title.ar}`}</title>
>>>>>>> main
        <meta
          name="description"
          content={
            language
              ? `${singleBlog?.getBlogs.metaDescription.ar}`
              : `${singleBlog?.getBlogs.metaDescription.en}`
          }
        />
        <link rel="canonical" href={`https://lesoll.com/${path}`} />
      </Head>
<<<<<<< HEAD
=======

>>>>>>> main
      <div className="md:mb-20 mb-10">
        <BlogSinglePage BlogData={singleBlog} />
      </div>
    </div>
  );
}

export default blogId;

export async function getServerSideProps(context) {
<<<<<<< HEAD
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/blog/singleblogs/${context.query.blogid}`
  );
  const data = await res.data;
  return {
    props: { singleBlog: data },
  };
=======
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/blog/singleblogs/${context.query.blogid}`
    );
    const data = await res.data;
    if (data.getBlogs) {
      return {
        props: { singleBlog: data },
        // revalidate:1,
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
>>>>>>> main
}
