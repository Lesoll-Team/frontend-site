import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import { getProjectsDashBoard } from "../api/projectsApi";
import ReactPaginate from "react-paginate";
import styles from "@/styles/Pagination.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const ViewProjects = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [Status, setStatus] = useState("idle");
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [serverError, setServerError] = useState(null);
  const handlePageChange = (page) => {
    setPage(page + 1);
  };
  useEffect(() => {
    const fetchProjects = async () => {
      await getProjectsDashBoard({
        setData,
        setStatus,
        setServerError,
        page,
      });
    };
    fetchProjects();
  }, [page]);
  // console.log(data);
  return (
    <div
      dir={language ? "rtl" : "ltr"}
      className="sm:container mx-auto px-3 py-10 space-y-5"
    >
      <h1 className="text-xl md:text-3xl">
        {language ? "المشاريع" : "Projects"}
      </h1>
      <div className="grid lg:grid-cols-2 gap-4">
        {data && data?.Property.length > 0
          ? data?.Property.map((item) => {
              return <ProjectCard data={item} key={item._id} />;
            })
          : ""}
      </div>
      {data?.totalPages > 1 && (
        <div dir="ltr" className={styles.pagination}>
          <ReactPaginate
            breakLabel={
              <span className="rounded px-2 border-2 h-fit"> ...</span>
            }
            breakClassName={"break-me"}
            pageCount={data?.totalPages}
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
            initialPage={page ? page - 1 : 0}
          />
        </div>
      )}
    </div>
  );
};
export default ViewProjects;
