import { cn } from "@/utils/cn";
import BlogCard from "./BlogCard";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import styles from "@/styles/Pagination.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const BlogPosts = ({ blogs, className, keyword }) => {
  const router = useRouter();
  const handlePageChange = (page) => {
    router.push(`?page=${page + 1}`);
  };

  return (
    <div
      className={cn(
        "flex flex-col  gap-[24px] md:gap-[60px] mt-6 md:mt-0  md:mx-0 px-2",
        className
      )}
    >
      {blogs.getBlogs.map((blog) => {
        return <BlogCard blog={blog} key={blog._id} />;
      })}

      {blogs?.totalPages > 1 && (
        <div dir="ltr" className={styles.pagination}>
          <ReactPaginate
            breakLabel={
              <span className="rounded px-2 border-2 h-fit"> ...</span>
            }
            breakClassName={"break-me"}
            pageCount={blogs?.totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={(data) => handlePageChange(data.selected)}
            containerClassName={styles.paginationContainer} // Use the styles from the CSS module
            pageClassName={styles.paginationPage}
            activeClassName={styles.activePage}
            previousLabel={
              <FaAngleLeft className="text-2xl font-medium text-baseGray" />
            }
            previousClassName={styles.paginationPrevious}
            nextLabel={
              <FaAngleRight className="text-2xl font-medium text-baseGray" />
            }
            nextClassName={styles.paginationNext}
            disabledClassName={styles.paginationDisabled}
            initialPage={keyword?.page ? keyword.page - 1 : 0}
          />
        </div>
      )}
    </div>
  );
};
export default BlogPosts;
