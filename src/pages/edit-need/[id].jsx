import axiosInstance from "@/Shared/axiosInterceptorInstance";
import EditNeed from "@/components/needs/edit-needs/EditNeed";

import React from "react";

const index = ({ data }) => {
  return <EditNeed needData={data} />;
};

export default index;

export async function getServerSideProps(context) {
  try {
    const res = await axiosInstance.get(
      `/need/single-need/${context.query.id}`,
    );
    const data = res.data;
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    if (error.response && error.response.status === 500) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    throw error;
  }
}
