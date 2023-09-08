import BlogsInPage from "@/components/blogs/blogsInPage";
import Head from "next/head";
import React from "react";
import { getAllBlogs } from "@/utils/dashboardApi/blogDashboardAPI";
import { useSelector } from "react-redux";

function Blog({ blogs }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="container mx-auto  p-5">
      <Head>
        <title> {language ? "المقالات" : "Blogs"}</title>
        <meta
          name="description"
          content="استكشف مدونتنا في مجال العقارات لقراءة مقالات مفيدة ونصائح وأدلة. ابقى على اطلاع دائم بشأن اتجاهات السوق، ونصائح شراء المنازل، واستراتيجيات الاستثمار، والمزيد. اكتشف معلومات قيمة لمساعدتك في اتخاذ قرارات مستنيرة في عالم العقارات."
        />
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
