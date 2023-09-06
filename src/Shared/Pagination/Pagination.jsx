import Link from "next/link";
import styles from "../../styles/Pagination.module.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos
} from "react-icons/md";
const paginationPage = ({hrefRout, currentPage, totalPages }) => {
  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <Link href={`/rent/${parseInt(currentPage) - 1}`}>
          <button>
          <span className={styles.paginationLink}> <MdOutlineArrowBackIos/> </span>
          </button>
        </Link>
      )}
      <div className="flex">
        <div className={styles.buttonNumber}>{currentPage}</div>
      </div>
      {currentPage < totalPages && (
        <Link href={`/${hrefRout}/${parseInt(currentPage) + 1}`}>
          <button>
            <span className={styles.paginationLink}> <MdOutlineArrowForwardIos/> </span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default paginationPage;
