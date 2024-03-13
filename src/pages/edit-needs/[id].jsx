import React from "react";

const index = () => {
  return <div>index</div>;
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
        data,
      },
      // revalidate: 10,
    };
  } catch (error) {
    // const router = useRouter();
    // Check if the error is due to a 400 status code
    if (error.response && error.response.status === 400) {
      // Handle the 400 error by extracting RecommendedOther from the error response
      const recommendedOther = error.response.data.RecommendedOther;

      // Return the recommendedOther as props
      return {
        props: { RecommendedOther: recommendedOther },
        // revalidate: 10,
      };
    } else if (error.response && error.response.status === 500) {
      context.res.writeHead(410);
      context.res.end();
    }
    // If the error is not a 400 status code, re-throw the error
    throw error;
  }
}
