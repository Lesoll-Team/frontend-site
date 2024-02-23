import { cn } from "@/utils/cn";
import BlogCard from "./BlogCard";

const BlogPosts = ({ blogData, blogs, className }) => {
  console.log(blogs);
  return (
    <div
      className={cn(
        "flex flex-col  gap-[24px] md:gap-[60px] mt-6 md:mt-0  md:mx-0 px-2",
        className
      )}
    >
      {blogs.map((blog) => {
        return <BlogCard blog={blog} key={blog._id} />;
      })}
    </div>
  );
};
export default BlogPosts;
