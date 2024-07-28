import React from "react";

const Index = () => {
  return <div>Index</div>;
};

export default Index;
export async function getServerSideProps() {
  return {
    redirect: {
      destination: `/blog?page=1`,
      statusCode: 308,
    },
  };
}
