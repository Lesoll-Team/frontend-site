import BlogCategories from "./BlogCategories";
import BlogPosts from "./BlogPosts";
import BlogSearch from "./BlogSearch";
import BlogsHeader from "./BlogsHeader";

const BlogFeed = ({ blogs, keyword }) => {
  return (
    <div className="flex flex-col md:gap-y-[80px] mb-10">
      <BlogsHeader />
      <main className="md:container w-full mx-auto flex flex-col md:flex-row md:gap-20">
        <aside className=" sticky top-[79px] md:top-24 h-fit w-full md:w-1/2 md:space-y-[48px]">
          <BlogSearch />
          <BlogCategories blogs={blogs} />
        </aside>
        <BlogPosts keyword={keyword} blogs={blogs} className={" w-full"} />
      </main>
    </div>
  );
};
export default BlogFeed;