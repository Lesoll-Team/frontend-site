import { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TbFilterSearch } from "react-icons/tb";
import { SiMicrosoftexcel } from "react-icons/si";
import { downloadUserLog } from "@/utils/userAPI";
import { useRouter } from "next/router";
import { MdDownload } from "react-icons/md";
const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formattedDate = new Date(date).toLocaleString("en-US", options);
  return formattedDate;
};

const copyLinkPage = (text) => {
  navigator.clipboard.writeText(text);
};

const UserLog = ({ visitedPages, userData }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reverseOrder, setReverseOrder] = useState(false);
  const router = useRouter();
  const slug = router.query.id;
  const filterByDate = (page) => {
    if (!startDate || !endDate) {
      return true; // No date range specified, show all pages
    }

    const pageDate = new Date(page.startPage);
    return pageDate >= startDate && pageDate <= endDate;
  };

  const filteredPages = visitedPages.filter(filterByDate);

  const handleReverse = () => {
    setReverseOrder((prevReverse) => !prevReverse);
  };

  const rowsToRender = reverseOrder ? filteredPages.reverse() : filteredPages;
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <section className="w-full md:bg-gray-100 md:p-5 space-y-4 rounded-lg">
      <h3 className="text-2xl font-medium text-lightGreen">
        سجل تصفح المستخدم
      </h3>
      <div className="flex gap-2 items-start sm:items-end sm:flex-row flex-col">
        <div className="flex items-center flex-col sm:flex-row gap-1">
          <div>
            <p>من</p>
            <DatePicker
              placeholderText="start Date"
              closeOnScroll={(e) => e.target === document}
              dateFormat="yyyy/MM/dd"
              value={startDate}
              className="rounded-md border px-2 py-1"
              selected={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div>
            <p>الى</p>
            <DatePicker
              placeholderText="end Date"
              closeOnScroll={(e) => e.target === document}
              dateFormat="yyyy/MM/dd"
              value={endDate}
              className="rounded-md border px-2 py-1"
              selected={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>

        <div className="flex w-full justify-between">
          <button
            onClick={handleReverse}
            className="flex items-center gap-1 bg-darkGreen text-white font-bold px-3 rounded-md py-1"
          >
            <TbFilterSearch /> <p>{reverseOrder ? "الأقدم" : "الأحدث"}</p>
          </button>
          <button
            className="text-4xl text-darkGray hover:text-lightGreen duration-300"
            onClick={() => downloadUserLog(userData?._id, userData?.username)}
          >
            <MdDownload />
          </button>
        </div>
      </div>
      <Table
        isHeaderSticky
        isStriped
        dir="ltr"
        aria-label="Example static collection table"
        classNames={{
          base: "max-h-[520px] overflow-scroll w-[300px] sm:w-full",
          table: "min-h-[400px]",
        }}
      >
        <TableHeader>
          <TableColumn>التاريخ</TableColumn>
          <TableColumn>الصفحة</TableColumn>
        </TableHeader>
        <TableBody>
          {rowsToRender.map((page) => {
            return (
              <TableRow key={page._id}>
                <TableCell>{formatDate(page.startPage)}</TableCell>
                <TableCell>
                  <Tooltip content="اضغط لنسخ الرابط">
                    <button
                      onClick={() => copyLinkPage(page.Action)}
                      className="text-start focus:outline-none"
                    >
                      {page.Action}
                    </button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

export default UserLog;
