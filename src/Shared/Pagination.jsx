import Link from "next/link";
import styles from "../styles/Pagination.module.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos
} from "react-icons/md";
const paginationPage = ({ currentPage, totalPages }) => {
  // const NUMBERPAGE = 5;
  // const renderPageNumbers = () => {
  //   const MNumber = Math.ceil(totalPages / 5+1);
  //   let pages = 0;
  //   let pagerow = [[], []];
  //   for (let i = 1; i < MNumber; i++) {
  //     pagerow[0].push(i)
  //     // console.log("عدد القسمة", i);
  //     for (let j = 1; j < 6; j++) {
  //       pages++;
  //     pagerow[1].push(pages)
  //       // console.log("عدد الصفحات", pages);
  //     }
  //     // console.table(pagerow)
  //     console.table(pagerow);
  //   }
  //   return pagerow;
  // };
  // console.log(
  // renderPageNumbers()
  // [0]
  // );
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
        {/* <div>
          <Link
            href={`/rent/${NUMBERPAGE - NUMBERPAGE + 1}`}
            className={styles.buttonNumber}
          >
            {NUMBERPAGE - NUMBERPAGE + 1}
          </Link>
        </div> */}
        <div className={styles.buttonNumber}>{currentPage}</div>
        {/* {Array.from(Array(NUMBERPAGE), (e, i) => (
          <div>
            {i == 0 ? null : (
              <Link href={`/rent/${i}`}>
                <div className={styles.buttonNumber} key={i}>
                  <button>
                    <span>{i}</span>
                  </button>
                </div>
              </Link>
            )}
          </div>
        ))} */}
        {/* <div >{renderPageNumbers()}</div> */}
        {/* <div>
          <Link className={styles.buttonNumber} href={`/rent/${NUMBERPAGE}`}>
            {NUMBERPAGE}
          </Link>
        </div> */}
      </div>

      {currentPage < totalPages && (
        <Link href={`/rent/${parseInt(currentPage) + 1}`}>
          <button>
            <span className={styles.paginationLink}> <MdOutlineArrowForwardIos/> </span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default paginationPage;
