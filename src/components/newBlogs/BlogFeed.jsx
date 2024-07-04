import { useTranslation } from "next-i18next";
import BlogCategories from "./BlogCategories";
import BlogPosts from "./BlogPosts";
import BlogSearch from "./BlogSearch";
import BlogsHeader from "./BlogsHeader";
import Head from "next/head";

const BlogFeed = ({ blogs, keyword }) => {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col md:gap-y-[80px] mb-10">
      <Head>
        <title>{t("Blogs")}</title>
        <meta name="description" content={t("Meta_Blog_Description")} />
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
