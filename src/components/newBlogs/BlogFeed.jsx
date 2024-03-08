import { useSelector } from "react-redux";
import BlogCategories from "./BlogCategories";
import BlogPosts from "./BlogPosts";
import BlogSearch from "./BlogSearch";
import BlogsHeader from "./BlogsHeader";

const BlogFeed = ({ blogs, keyword }) => {
  const userData = useSelector((state) => state.userProfile.userData);
  console.log(userData);
  return (
    <div className="flex flex-col md:gap-y-[80px] mb-10">
      <BlogsHeader />
      <main className="md:container w-full mx-auto flex flex-col md:flex-row md:gap-20">
        <aside
          className={` sticky   h-fit w-full md:w-1/2 md:space-y-[48px] ${
            userData ? "top-[62px] md:top-28 " : "top-[95px] md:top-[140px]"
          }`}
        >
          <BlogSearch />
          <BlogCategories blogs={blogs} />
        </aside>
        <BlogPosts keyword={keyword} blogs={blogs} className={" w-full"} />
      </main>
    </div>
  );
};
export default BlogFeed;
