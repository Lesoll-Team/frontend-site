import BlogsInPage from "@/components/blogs/blogsInPage";
import Head from "next/head";
import React from "react";
import { getAllBlogs } from "@/utils/dashboardApi/blogDashboardAPI";
import { useSelector } from "react-redux";
function Blog({ blogs }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  console.log("blogs",blogs);
  return (
    <div className="  mx-auto  p-10">
      <Head>
        <title>{language?"المقالات":"Blogs"}</title>
        <meta
          name="description"
          content="استكشف مقالاتنا في مجال العقارات لقراءة مقالات مفيدة ونصائح وأدلة. ابقى على اطلاع دائم بشأن اتجاهات السوق، ونصائح شراء المنازل، واستراتيجيات الاستثمار، والمزيد. اكتشف معلومات قيمة لمساعدتك في اتخاذ قرارات مستنيرة في عالم العقارات."
        />
        <link rel="canonical" href="https://lesoll.com/blog" />
      </Head>
      <div className="py-20">
        <h1 className="text-7xl text-lightGreen  ">
          {language ? "المقالات" : "Blogs"}
        </h1>
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
    revalidate: 1,
  };
}
