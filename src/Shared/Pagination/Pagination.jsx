import Link from "next/link";
import styles from "../../styles/Pagination.module.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
const paginationPage = ({ hrefRout, currentPage, totalPages }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div dir="ltr" className={styles.pagination}>
      {currentPage > 1 && (
        <Link href={`/rent/${parseInt(currentPage) - 1}`}>
          <Button className="bg-lightGreen hover:bg-lightGreenHover">
            <span className={styles.paginationLink}>
              <div className="flex text-white">
                <MdOutlineArrowBackIos /> <MdOutlineArrowBackIos />
              </div>
            </span>
          </Button>
        </Link>
      )}
      <div className="flex">
        <div className={styles.buttonNumber}>{currentPage}</div>
      </div>
      {currentPage < totalPages && (
        <Link href={`/${hrefRout}/${parseInt(currentPage) + 1}`}>
          <Button className="bg-lightGreen hover:bg-lightGreenHover" >
            <span className={styles.paginationLink}>
              <div className="flex text-white ">
                <MdOutlineArrowForwardIos /> <MdOutlineArrowForwardIos />
              </div>
            </span>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default paginationPage;
