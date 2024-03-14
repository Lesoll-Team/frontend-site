import EditNeed from "@/components/needs/edit-needs/EditNeed";
import axios from "axios";
import React from "react";

const index = ({ data }) => {
  return <EditNeed data={data} />;
};

export default index;

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/need/single-need/${context.query.id}`
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
