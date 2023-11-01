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
// import {
//   fetchPropertiesView,
//   fetchSaleView,
// } from "@/utils/dashboardApi/overviewDashboard";
import {
  getDeleteView,
  getPropertiesView,
  getRentView,
  getSaleView,
  getUsersView,
} from "@/redux-store/features/dashboard/overViewSlice";
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
    // dispatch(getPropertiesView(dates));
    // (async () => {
    // const totalProperties = await fetchPropertiesView({
    //   dateFrom: formatDate(dateRange[0].startDate.toDateString()),
    //   dateEnd: formatDate(dateRange[0].endDate.toDateString()),
    // });
    // const totalSale=await fetchSaleView({
    //   dateFrom: formatDate(dateRange[0].startDate.toDateString()),
    //   dateEnd: formatDate(dateRange[0].endDate.toDateString()),
    // })
    // setCountProperties(totalProperties.resultRealtyData);
    // setCountSale(totalProperties.resultRealty);
    // })();

    // const data =  fetchPropertiesView({
    //   dateFrom: formatDate(dateRange[0].startDate.toDateString()),
    //   dateEnd: formatDate(dateRange[0].endDate.toDateString()),
    // });
    // // console.log(data.resultRealty);
    // setCountProperties(data.resultRealty);
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
  const dataUsers = {
    labels: dataUser?.resultUser.map((item) => item.date), // هنا بنحط الايام
    datasets: [
      {
        label: `Total  users ${dataUser?.totalCount}`,
        data: dataUser?.resultUser.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
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

  const dataRent = {
    labels: dataRents?.resultRent.map((item) => item.date), // هنا بنحط الايام
    datasets: [
      {
        label: `Total Properties of dataRent ${dataRents?.totalCount}`,
        data: dataRents?.resultRent.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
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

  const dataSales = {
    labels: dataSale?.resultSale.map((item) => item.date), // هنا بنحط الايام
    datasets: [
      {
        label: `Total Properties of Sale ${dataSale?.totalCount}`,
        data: dataSale?.resultSale.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
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

  const dataProperty = {
    labels: dataProperties?.resultRealtyData.map((item) => item.date), // هنا بنحط الايام
    datasets: [
      {
        label: `Total Properties ${dataProperties?.totalCount}`,
        data: dataProperties?.resultRealtyData.map((item) => item.count), // عدد المستخدمين خلال ال3 ايام اللى موجدين فوق
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
  // console.log("data is", data);
  return userInfo && (userInfo.isAdmin || userInfo.supAdmin) ? (
    <div className="min-h-[90dvh] grid grid-cols-6 relative" dir="ltr">
      <div className="bg-lightGreenHover px-5 col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5 grid  lg:grid-cols-2 grid-cols-1 ">
        <div className="grid justify-center  m-5 p-5">
          <DateRangePicker
            // showDateDisplay={false}
            ranges={dateRange}
            onChange={handleSelect}
          />
        </div>
        <div className="p-5 m-10 bg-gray-200 rounded-2xl  ">
          <Line data={dataProperty}></Line>
        </div>

        <div className="p-5 m-10 bg-gray-200 rounded-2xl  ">
          <Bar data={dataSales}></Bar>
        </div>

        <div className="p-5 m-10 bg-gray-200 rounded-2xl  ">
          <Line data={dataRent}></Line>
        </div>

        <div className="p-5 m-10 bg-gray-200 rounded-2xl  ">
          <Bar data={dataDeletes}></Bar>
        </div>

        <div className="p-5 m-10 bg-gray-200 rounded-2xl  ">
          <Line data={dataUsers}></Line>
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
