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

export async function getAllUsers(userToken, limitPages) {
  if (userToken) {
    try {
      const response = await axiosInstance.get(
        `/admin/getallusers?limit=${limitPages}&page=1`,
      );
      return response.data;
    } catch (error) {
      throw error.response.massage;
    }
  }
  return undefined;
}

export async function getCountUsersInDate(userToken, startDate, endDate) {
  if (userToken) {
    try {
      const response = await axiosInstance.get(
        `/admin/getContUser?from=${startDate}&to=${endDate}`,
      );
      return response.data;
    } catch (error) {
      throw error.response.massage;
    }
  }
  return undefined;
}

export { columns }; //statusOptions
