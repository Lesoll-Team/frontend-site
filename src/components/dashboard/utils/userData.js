import axiosInstance from "@/Shared/axiosInterceptorInstance";

// import React from "react";
const columns = [
  { name: "ID", uid: "_id" }, //, sortable: true
  { name: "User", uid: "fullname" }, //, sortable: true
  { name: "EMAIL", uid: "email" },
  { name: "Phone", uid: "phone" },
  { name: "Type", uid: "typeOfUser" }, //, sortable: true
  { name: "Created", uid: "createdAt", sortable: true }, //, sortable: true
  { name: "User Name", uid: "username" }, //, sortable: true
  { name: "ACTIONS", uid: "actions" },
  // {name: "Image", uid: "name"},//, sortable: true
];

// const statusOptions = [
//   {name: "Active", uid: "active"},
//   {name: "Paused", uid: "paused"},
//   // {name: "paused", uid: "paused"},
// ];

export async function getAllUsers(userToken, limitPages) {
  // const userToken=JSON.parse(localStorage.getItem("userToken"))
  if (userToken) {
    try {
      const response = await axiosInstance.get(
        `/admin/getallusers?limit=${limitPages}&page=1`,
        //?limit=num&page=num
        // const response = await axiosInstance.get(`http://api0.lesoll-demo.site/api/user/profile`,
        {
          headers: {
            token: userToken,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error.response.massage;
    }
  }
  return undefined;
}

export async function getCountUsersInDate(userToken, startDate, endDate) {
  // const userToken=JSON.parse(localStorage.getItem("userToken"))
  if (userToken) {
    try {
      const response = await axiosInstance.get(
        `/admin/getContUser?from=${startDate}&to=${endDate}`,
        //?limit=num&page=num
        // const response = await axiosInstance.get(`http://api0.lesoll-demo.site/api/user/profile`,
        {
          headers: {
            token: userToken,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error.response.massage;
    }
  }
  return undefined;
}

export { columns }; //statusOptions
