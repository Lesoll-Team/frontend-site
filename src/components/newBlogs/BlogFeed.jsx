import BlogCategories from "./BlogCategories";
import BlogPosts from "./BlogPosts";
import BlogSearch from "./BlogSearch";
import BlogsHeader from "./BlogsHeader";

const BlogFeed = ({ blogs }) => {
  return (
    <div className="flex flex-col md:gap-y-[80px]">
      <BlogsHeader />
      <main className="md:container w-full mx-auto flex flex-col md:flex-row md:gap-20">
        <aside className="md: md:sticky top-24 h-fit w-full md:w-1/2 md:space-y-[48px]">
          <BlogSearch />
          <BlogCategories />
        </aside>
        <BlogPosts blogs={blogs} className={" w-full"} />
      </main>
    </div>
  );
};
export default BlogFeed;
