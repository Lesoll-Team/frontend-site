import React, { useEffect, useRef, useState } from "react";
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
import { Line, Bar, Pie } from "react-chartjs-2";
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
import { Button } from "@nextui-org/react";
import {
  downloadUserData,
  downloadRealtyData,
  downloadOverviewData,
  downloadSearchKeyword,
} from "@/utils/dashboardApi/overviewDashboard";
import Head from "next/head";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
  ArcElement
);

function Dashboard() {
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const dataProperties = useSelector((state) => state.OverView.dataProperties);

  const dataSale = useSelector((state) => state.OverView.dataSale);
  const dataRents = useSelector((state) => state.OverView.dataRent);
  const dataDelete = useSelector((state) => state.OverView.dataDeleted);
  const dataUser = useSelector((state) => state.OverView.dataUsers);
  const router = useRouter();
  const dispatch = useDispatch();
  // const [countProperties, setCountProperties] = useState([]);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
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
    if (userInfo && userInfo.isAdmin === false && userInfo.supAdmin === false) {
      router.push("/404");
    }
  }, [userInfo]);

  const dataDeletes = {
    labels: dataDelete?.resultDelete.map((item) => item.date), // هنا بنحط الايام
    datasets: [
      {
        label: `Total Properties of deleted ${dataDelete?.totalCount}`,
        data: dataDelete?.resultDelete.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
        borderColor: "gray",
        backgroundColor: dataDelete?.resultDelete.map((item) => {
          if (dataDelete?.totalCount < dataDelete?.resultDelete.length) {
            return item.count >=
              dataDelete?.resultDelete.length / dataDelete?.totalCount
              ? "#33cc33"
              : "#ff0000";
          } else
            return item.count >=
              dataDelete?.totalCount / dataDelete?.resultDelete.length
              ? "#33cc33"
              : "#ff0000";
        }),
        // backgroundColor: [
        //   "#d2512d",
        //   "#309da0",
        //   "#d55d3aff",
        //   "#3ababeff",
        //   "#a63626",
        //   "#5c5a5a",
        // ],
        tension: 0.4,
        borderWidth: 1, //border size

        // innerWidth:1,
        // outerHeight:10,
      },
    ],
  };
  const dataUsers = {
    labels: dataUser?.resultUser.map((item) => item.date), // هنا بنحط الايام
    datasets: [
      {
        label: `Total  users ${dataUser?.totalCount}`,
        data: dataUser?.resultUser.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
        borderColor: "gray",
        backgroundColor: dataUser?.resultUser.map((item) => {
          if (dataUser?.totalCount < dataUser?.resultUser.length) {
            return item.count >=
              dataUser?.resultUser.length / dataUser?.totalCount
              ? "#33cc33"
              : "#ff0000";
          } else
            return item.count >=
              dataUser?.totalCount / dataUser?.resultUser.length
              ? "#33cc33"
              : "#ff0000";
        }),
        tension: 0.4,
        borderWidth: 1, //border size

        // innerWidth:1,
        // outerHeight:10,
      },
    ],
  };

  const dataRent = {
    labels: dataRents?.resultRent.map((item) => item.date), // هنا بنحط الايام
    datasets: [
      {
        label: `Total Properties of Rent ${dataRents?.totalCount}`,
        data: dataRents?.resultRent.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
        borderColor: "gray",
        backgroundColor: dataRents?.resultRent.map((item) => {
          if (dataRents?.totalCount < dataRents?.resultRent.length) {
            return item.count >=
              dataRents?.resultRent.length / dataRents?.totalCount
              ? "#33cc33"
              : "#ff0000";
          } else
            return item.count >=
              dataRents?.totalCount / dataRents?.resultRent.length
              ? "#33cc33"
              : "#ff0000";
        }),
        tension: 0.4,
        borderWidth: 1, //border size

        // innerWidth:1,
        // outerHeight:10,
      },
    ],
  };

  const dataSales = {
    labels: dataSale?.resultSale.map((item) => item.date), // هنا بنحط الايام
    datasets: [
      {
        label: `Total Properties of Sale ${dataSale?.totalCount}`,
        data: dataSale?.resultSale.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
        borderColor: "gray",
        backgroundColor: dataSale?.resultSale.map((item) => {
          if (dataSale?.totalCount < dataSale?.resultSale.length) {
            return item.count >=
              dataSale?.resultSale.length / dataSale?.totalCount
              ? "#33cc33"
              : "#ff0000";
          } else
            return item.count >=
              dataSale?.totalCount / dataSale?.resultSale.length
              ? "#33cc33"
              : "#ff0000";
        }),
        tension: 0.4,
        borderWidth: 1, //border size

        // innerWidth:1,
        // outerHeight:10,
      },
    ],
  };

  const dataProperty = {
    labels: dataProperties?.resultRealtyData.map((item) => item.date), // هنا بنحط الايام
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
              ? "#33cc33"
              : "#ff0000";
          } else
            return item.count >=
              dataProperties?.totalCount /
                dataProperties?.resultRealtyData.length
              ? "#33cc33"
              : "#ff0000";
        }),
        tension: 0.4,
        borderWidth: 1, //border size

        // innerWidth:1,
        // outerHeight:10,
      },
    ],
  };
  return userInfo && (userInfo.isAdmin || userInfo.supAdmin) ? (
    <div className="min-h-[90dvh]  flex" dir="ltr">
      <Head>
        <title>Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="relative">
        <div className="bg-gray-100 shadow-md shadow-gray-500  sticky top-0">
          <Sidebar />
        </div>
      </div>
      <div className=" grid  w-full lg:grid-cols-2 grid-cols-1 ">
        <div className=" justify-center  overflow-x-auto flex   p-5">
          <DateRangePicker
            className="w-10/12"
            ranges={dateRange}
            onChange={handleSelect}
          />
        </div>

        <div className="p-5 m-10 bg-gray-100 min-h-[300px] justify-center rounded-2xl flex flex-wrap gap-10  ">
          <div className="text-center">
            <div className="w-[130px] h-[80px] bg-blue-500 rounded-md flex flex-col items-center justify-center font-semibold text-white">
              <span className="text-3xl">{dataUser?.totalCount}</span>
              <span>user</span>
            </div>
          </div>
          <div className="text-center">
            <div
              className="w-[130px] h-[80px] bg-orange-500 rounded-md flex items-center
             justify-center font-semibold text-white flex-col"
            >
              <span className="text-3xl">{dataRents?.totalCount}</span>
              <span>Rent</span>
            </div>
          </div>

          <div className="text-center">
            <div className="w-[130px] h-[80px] flex-col bg-lightGreenHover rounded-md flex items-center justify-center font-semibold text-white">
              <span className="text-3xl">{dataSale?.totalCount}</span>
              <span>Sale</span>
            </div>
          </div>

          <div className="text-center">
            <div
              className="w-[130px] h-[80px] flex-col bg-secondary-500 rounded-md flex items-center 
            justify-center font-semibold text-white"
            >
              <span className="text-3xl"> {dataProperties?.totalCount}</span>
              <span>Properties</span>
            </div>
          </div>

          <div className="space-y-3 space-x-3">
            <Button
              onClick={() => downloadOverviewData(dates)}
              className="font-semibold bg-slate-700 text-white "
              // color=""
            >
              {" "}
              Download overview
            </Button>
            <Button
              onClick={() => downloadRealtyData(dates)}
              className="font-semibold bg-orange-500 text-white "
            >
              {" "}
              Download realty
            </Button>
            <Button
              onClick={() => downloadUserData(dates)}
              className="font-semibold text-white "
              color="primary"
            >
              {" "}
              Download user
            </Button>

            <Button
              onClick={() => downloadSearchKeyword(dates)}
              className="font-semibold text-white "
              color="warning"
            >
              {" "}
              Download search keyword
            </Button>
          </div>
        </div>

        <div className="p-5 m-10 bg-gray-100 min-h-[300px] rounded-2xl flex flex-col ">
          <Bar className="w-full" data={dataProperty}></Bar>
        </div>

        <div className="p-5 m-10 min-h-[300px] bg-gray-100 rounded-2xl  ">
          <Bar data={dataSales}></Bar>
        </div>

        <div className="p-5 m-10 min-h-[300px] bg-gray-100 rounded-2xl  ">
          <Bar data={dataRent}></Bar>
        </div>

        <div className="p-5 m-10 min-h-[300px] bg-gray-100 rounded-2xl  ">
          <Bar data={dataDeletes}></Bar>
        </div>

        <div className="p-5 m-10 min-h-[300px] bg-gray-100 rounded-2xl  ">
          <Bar data={dataUsers}></Bar>
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
/**
 *     const data = {
      labels: ["10/1", "10/2", "10/3", "10/4", "10/5", "10/6", "10/7", "10/8"], // هنا بنحط الايام
      datasets: [
        {
          label: "Total User",
          data: [33, 150, 100, 100, 100, 10, 50, 55], // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
          borderColor: "gray",
          backgroundColor: [
            "#d2512d",
            "#309da0",
            "#d55d3aff",
            "#3ababeff",
            "#a63626",
            "#5c5a5a",
          ],
          tension: 0.4,
          borderWidth: 1, //border size

          // innerWidth:1,
          // outerHeight:10,
        },
      ],
    };
 */
