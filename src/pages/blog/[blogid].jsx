import BlogSinglePage from "@/components/blogs/blogSinglePage";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Head from "next/head";
import React from "react";

function blogId({ singleBlog }) {
  return (
    <div>
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
  const { locale, query } = context;

  // إعادة التوجيه إذا كانت البادئة تحتوي على لغة
  if (locale === "en") {
    return {
      redirect: {
        destination: `/blog/${query.blogid}`,
        permanent: true,
      },
    };
  }

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/blog/singleblogs/${query.blogid}`,
    );
    const data = res.data;

    if (data.getBlogs) {
      return {
        props: {
          singleBlog: data,
          ...(await serverSideTranslations(locale, ["common"])),
        },
      };
    } else {
      context.res.writeHead(410);
      context.res.end();
      return { props: {} }; // لتجنب الخطأ عند عدم وجود محتوى
    }
  } catch (error) {
    if (error.response && error.response.status === 500) {
      context.res.statusCode = 410;
    }
    throw error;
  }
}
