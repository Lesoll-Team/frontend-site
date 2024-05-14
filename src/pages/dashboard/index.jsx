import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import {
  getDeleteView,
  getPropertiesView,
  getRentView,
  getSaleView,
  getUsersView,
} from "@/redux-store/features/dashboard/overViewSlice";
import {
  downloadUserData,
  downloadRealtyData,
  downloadOverviewData,
  downloadSearchKeyword,
  downloadOnlineUsers,
  downloadPropertyTrack,
  downloadCampaign,
  downloadTrackUsers,
  downloadUpdateProperties,
} from "@/utils/dashboardApi/overviewDashboard";
import Head from "next/head";
import { CgSoftwareDownload } from "react-icons/cg";
import {
  DropdownAction,
  ItemDropdown,
} from "@/components/dashboard/model/DropdownAction";
import { MdOutlineUpdate } from "react-icons/md";
import { useUser } from "@/Shared/UserContext";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
  ArcElement,
);

function Dashboard() {
  const { data } = useUser();

  const dataProperties = useSelector((state) => state.OverView.dataProperties);

  const dataSale = useSelector((state) => state.OverView.dataSale);
  const dataRents = useSelector((state) => state.OverView.dataRent);
  const dataDelete = useSelector((state) => state.OverView.dataDeleted);
  const dataUser = useSelector((state) => state.OverView.dataUsers);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isToggleDateRange, setToggleDateRange] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
    const date = new Date(Date.parse(ranges.selection.endDate));
    const date2 = new Date(Date.parse(ranges.selection.startDate));
    const options = { year: "numeric", month: "long", day: "2-digit" };
    const options2 = { year: "numeric", month: "long", day: "2-digit" };
    const fullDateString = date.toLocaleDateString("ar-EG", options);
    const fullDateString2 = date2.toLocaleDateString("ar-EG", options2);
    setEndDate(fullDateString);
    setStartDate(fullDateString2);
  };

  const formatDate = (inputDateString) => {
    // Step 1: Parse the input date string
    const parsedDate = new Date(inputDateString);

    // Step 2: Format the date to "YYYY-MM-DD"
    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1 and pad with '0' if needed
    const day = String(parsedDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const dates = {
    dateFrom: formatDate(dateRange[0].startDate.toDateString()),
    dateEnd: formatDate(dateRange[0].endDate.toDateString()),
  };
  useEffect(() => {
    dispatch(getPropertiesView(dates));
    dispatch(getSaleView(dates));
    dispatch(getRentView(dates));
    dispatch(getDeleteView(dates));
    dispatch(getUsersView(dates));
  }, [dateRange]);

  useEffect(() => {
    if (data && data.isAdmin === false && data.supAdmin === false) {
      router.push("/404");
    }
  }, [data]);
  const dataDeletes = {
    labels: dataDelete?.resultDelete.map((item) => {
      const [year, month, day] = item.date.split("-");
      return day;
    }),
    datasets: [
      {
        label: `Total Properties of deleted ${dataDelete?.totalCount}`,
        data: dataDelete?.resultDelete.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
        borderColor: "gray",
        backgroundColor: dataDelete?.resultDelete.map((item) => {
          if (dataDelete?.totalCount < dataDelete?.resultDelete.length) {
            return item.count >=
              dataDelete?.resultDelete.length / dataDelete?.totalCount
              ? "#3ababeff"
              : "#fab570";
          } else
            return item.count >=
              dataDelete?.totalCount / dataDelete?.resultDelete.length
              ? "#3ababeff"
              : "#fab570";
        }),
        tension: 0.4,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const overviewProperties = {
    labels: dataRents?.resultRent.map((item) => {
      const [year, month, day] = item.date.split("-");
      return day;
    }),
    datasets: [
      {
        label: `Sale ${dataSale?.totalCount}`,
        data: dataSale?.resultSale.map((item) => item.count),
        borderColor: "#fab570",
        backgroundColor: "#fab570",
      },
      {
        label: `Rent ${dataRents?.totalCount}`,
        data: dataRents?.resultRent.map((item) => item.count),
        borderColor: "#3ababeff",
        backgroundColor: "#3ababeff",
      },
      {
        label: `Deleted ${dataDelete?.totalCount}`,
        data: dataDelete?.resultDelete.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
        borderColor: "#FF0006",
        backgroundColor: "#FF0006",
      },
    ],
  };

  const dataUsers = {
    labels: dataUser?.resultUser.map((item) => {
      const [year, month, day] = item.date.split("-");
      return day;
    }), // هنا بنحط الايام
    datasets: [
      {
        label: `Total  users ${dataUser?.totalCount}`,
        data: dataUser?.resultUser.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
        borderColor: "gray",
        backgroundColor: dataUser?.resultUser.map((item) => {
          if (dataUser?.totalCount < dataUser?.resultUser.length) {
            return item.count >=
              dataUser?.resultUser.length / dataUser?.totalCount
              ? "#3ababeff"
              : "#fab570";
          } else
            return item.count >=
              dataUser?.totalCount / dataUser?.resultUser.length
              ? "#3ababeff"
              : "#fab570";
        }),
        tension: 0.4,
        borderWidth: 1, //border size

        // innerWidth:1,
        // outerHeight:10,
      },
    ],
  };

  const dataRent = {
    labels: dataRents?.resultRent.map((item) => {
      const [year, month, day] = item.date.split("-");
      return day;
    }), // هنا بنحط الايام
    datasets: [
      {
        label: `Total Properties of Rent ${dataRents?.totalCount}`,
        data: dataRents?.resultRent.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
        borderColor: "gray",
        backgroundColor: dataRents?.resultRent.map((item) => {
          if (dataRents?.totalCount < dataRents?.resultRent.length) {
            return item.count >=
              dataRents?.resultRent.length / dataRents?.totalCount
              ? "#3ababeff"
              : "#fab570";
          } else
            return item.count >=
              dataRents?.totalCount / dataRents?.resultRent.length
              ? "#3ababeff"
              : "#fab570";
        }),
        tension: 0.4,
        borderWidth: 1, //border size

        // innerWidth:1,
        // outerHeight:10,
      },
    ],
  };

  const dataSales = {
    labels: dataSale?.resultSale.map((item) => {
      const [year, month, day] = item.date.split("-");
      return day;
    }), // هنا بنحط الايام
    datasets: [
      {
        label: `Total Properties of Sale ${dataSale?.totalCount}`,
        data: dataSale?.resultSale.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
        borderColor: "gray",
        backgroundColor: dataSale?.resultSale.map((item) => {
          if (dataSale?.totalCount < dataSale?.resultSale.length) {
            return item.count >=
              dataSale?.resultSale.length / dataSale?.totalCount
              ? "#3ababeff"
              : "#fab570";
          } else
            return item.count >=
              dataSale?.totalCount / dataSale?.resultSale.length
              ? "#3ababeff"
              : "#fab570";
        }),
        tension: 0.4,
        borderWidth: 1, //border size

        // innerWidth:1,
        // outerHeight:10,
      },
    ],
  };

  const dataProperty = {
    labels: dataProperties?.resultRealtyData.map((item) => {
      const [year, month, day] = item.date.split("-");
      return day;
    }), // هنا بنحط الايام
    datasets: [
      {
        label: `Total Properties ${dataProperties?.totalCount}`,
        data: dataProperties?.resultRealtyData.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
        borderColor: "gray",
        backgroundColor: dataProperties?.resultRealtyData.map((item) => {
          if (
            dataProperties?.totalCount < dataProperties?.resultRealtyData.length
          ) {
            return item.count >=
              dataProperties?.resultRealtyData.length /
                dataProperties?.totalCount
              ? "#3ababeff"
              : "#fab570";
          } else
            return item.count >=
              dataProperties?.totalCount /
                dataProperties?.resultRealtyData.length
              ? "#3ababeff"
              : "#fab570";
        }),
        tension: 0.4,
        borderWidth: 1, //border size

        // innerWidth:1,
        // outerHeight:10,
      },
    ],
  };
  return data && (data.isAdmin || data.supAdmin) ? (
    <div className="min-h-[90dvh]  flex" dir="ltr">
      <Head>
        <title>Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="relative">
        <div className="  sticky top-0">
          <Sidebar />
        </div>
      </div>
      <div className=" flex flex-col  w-full  ">
        <div className=" w-full h-fit md:p-4 p-2  gap-y-1 md:mt-10 mt-5 rounded-2xl flex flex-col justify-between ">
          <div className=" flex md:flex-row flex-col-reverse md:justify-end justify-center  gap-2 ">
            {startDate && endDate && (
              <div className="flex items-center md:justify-end  justify-center">
                <span> {endDate} </span>
                <span className="text-gray1 mx-2 mr-4 flex "> : الي </span>
                <span> {startDate} </span>
                <span className="text-gray1 mx-2  flex "> : من </span>
              </div>
            )}
            <div className="flex md:justify-end justify-center gap-2 ">
              <button
                onClick={() => setToggleDateRange(!isToggleDateRange)}
                className={`text-lightGreen flex gap-1 items-center  text-2xl rounded-md px-2 ${isToggleDateRange ? "rotate-90 duration-700" : "rotate-0 duration-700"}`}
              >
                <MdOutlineUpdate />
              </button>
              <DropdownAction iconIs={<CgSoftwareDownload />}>
                <ItemDropdown
                  label={"download overview"}
                  href={null}
                  action={() => downloadOverviewData(dates)}
                  title="تحميل"
                  description=" تأكيد تحميل جميع البيانات "
                />
                <ItemDropdown
                  label={"download properties"}
                  href={null}
                  action={() => downloadRealtyData(dates)}
                  title="تحميل"
                  description=" تأكيد تحميل بيانات العقارات"
                />
                <ItemDropdown
                  label={"download user"}
                  href={null}
                  action={() => downloadUserData(dates)}
                  title="تحميل"
                  description=" تأكيد تحميل بيانات المستخدين"
                />
                <ItemDropdown
                  label={"download Search"}
                  href={null}
                  action={() => downloadSearchKeyword(dates)}
                  title="تحميل"
                  description=" تأكيد تحميل بيانات بحث المستخدمين"
                />
                <ItemDropdown
                  label={"update properties"}
                  href={null}
                  action={() => downloadUpdateProperties(dates)}
                  title="تحميل"
                  description=" تأكيد تحميل بيانات بحث المستخدمين"
                />
                <ItemDropdown
                  label={"track users"}
                  href={null}
                  action={() => downloadTrackUsers(dates)}
                  title="تحميل"
                  description=" تأكيد تحميل بيانات بحث المستخدمين"
                />
                <ItemDropdown
                  label={"download campaign"}
                  href={null}
                  action={() => downloadCampaign(dates)}
                  title="تحميل"
                  description=" تأكيد تحميل بيانات بحث المستخدمين"
                />
                <ItemDropdown
                  label={"property track"}
                  href={null}
                  action={() => downloadPropertyTrack(dates)}
                  title="تحميل"
                  description=" تأكيد تحميل بيانات بحث المستخدمين"
                />
                <ItemDropdown
                  label={"online users"}
                  href={null}
                  action={() => downloadOnlineUsers(dates)}
                  title="تحميل"
                  description=" تأكيد تحميل بيانات بحث المستخدمين"
                />
              </DropdownAction>
            </div>
          </div>
          <div className="   w-full flex gap-1 md:justify-between justify-center flex-wrap ">
            <div className="md:w-2/12 w-5/12  max-w-[150px] min-h-[100px]  border-gray2 border-1 rounded-md flex flex-col items-center justify-center font-semibold text-lightGreenHover">
              <span className="text-3xl">{dataUser?.totalCount}</span>
              <span>user</span>
            </div>
            <div
              className="md:w-2/12 w-5/12 max-w-[150px] min-h-[100px]  border-gray2 border-1 rounded-md flex items-center
            justify-center font-semibold text-lightGreenHover flex-col"
            >
              <span className="text-3xl">{dataRents?.totalCount}</span>
              <span>Rent</span>
            </div>

            <div className="md:w-2/12 w-5/12 max-w-[150px] min-h-[100px]  flex-col border-gray2 border-1 rounded-md flex items-center justify-center font-semibold text-lightGreenHover">
              <span className="text-3xl">{dataSale?.totalCount}</span>
              <span>Sale</span>
            </div>

            <div
              className="md:w-2/12 w-5/12 max-w-[150px] min-h-[100px]  flex-col border-gray2 border-1 rounded-md flex items-center
            justify-center font-semibold text-lightGreenHover"
            >
              <span className="text-3xl"> {dataProperties?.totalCount}</span>
              <span>Properties</span>
            </div>
          </div>
        </div>
        {isToggleDateRange && (
          <div className=" overflow-x-auto   p-1 mt-10 md:p-5">
            <DateRangePicker
              className={"md:w-full flex justify-center  p-2"}
              ranges={dateRange}
              onChange={handleSelect}
            />
          </div>
        )}
        <div className=" p-1 overflow-hidden mx-[10px] grid grid-cols-1 md:gap-3 md:grid-cols-2">
          <div
            className="overflow-hidden overflow-x-auto bg-gray-50"
            style={{ width: "100%" }}
          >
            <Line
              data={overviewProperties}
              width={100}
              height={50}
              options={options}
            />
          </div>
          <div
            className="overflow-hidden overflow-x-auto bg-gray-50"
            style={{ width: "100%" }}
          >
            <Bar data={dataProperty} width={100} height={50} />
          </div>
          <div
            className="overflow-hidden overflow-x-auto bg-gray-50"
            style={{ width: "100%" }}
          >
            <Bar data={dataSales} width={100} height={50} />
          </div>
          <div
            className="overflow-hidden overflow-x-auto bg-gray-50"
            style={{ width: "100%" }}
          >
            <Bar data={dataRent} width={100} height={50} />
          </div>
          <div
            className="overflow-hidden overflow-x-auto bg-gray-50"
            style={{ width: "100%" }}
          >
            <Bar data={dataDeletes} width={100} height={50} />
          </div>
          <div
            className="overflow-hidden overflow-x-auto bg-gray-50"
            style={{ width: "100%" }}
          >
            <Bar data={dataUsers} width={100} height={50} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full items-center min-h-[90dvh] flex justify-center text-center">
      Loading...
    </div>
  );
}

export default Dashboard;
