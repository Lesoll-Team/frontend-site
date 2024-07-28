import { useSelector } from "react-redux";
import BlogCategories from "./BlogCategories";
import BlogPosts from "./BlogPosts";
import BlogSearch from "./BlogSearch";
import BlogsHeader from "./BlogsHeader";
import Head from "next/head";

const BlogFeed = ({ blogs, keyword }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const canonicalLink = `https://lesoll.com/blog?page=${keyword?.page || "1"}${keyword?.search ? "&search=" + keyword?.search : ""}${keyword?.category ? "&category=" + keyword?.category : ""}`;
  return (
    <div className="flex flex-col md:gap-y-[80px] mb-10">
      <Head>
        <title>المقالات</title>
        <meta
          name="description"
          content={
            language
              ? "تابع آخر المقالات والنصائح العقارية في مصر. احصل على معلومات قيمة حول السوق، نصائح لتأجير وبيع العقارات، وإرشادات لتحسين تجربتك في البحث عن السكن المثالي."
              : "Stay updated with the latest articles and real estate tips in Egypt. Get valuable insights on the market, advice for renting and selling properties, and guidance to enhance your search for the perfect home."
          }
        />
        <link rel="canonical" href={canonicalLink} />
      </Head>
      <BlogsHeader />
      <main className="md:container w-full mx-auto flex flex-col md:flex-row md:gap-20">
        <aside
          className={` sticky   h-fit w-full md:w-1/2 space-y-0 md:space-y-[48px] top-[62px] md:top-28`}
        >
          <BlogSearch />
          <BlogCategories blogs={blogs} keyword={keyword} />
        </aside>
        <BlogPosts keyword={keyword} blogs={blogs} className={" w-full"} />
      </main>
    </div>
  );
};
export default BlogFeed;
