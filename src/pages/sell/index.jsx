const index = () => {
  return null;
};

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/add-property",
      statusCode: 308,
    },
  };
}

export default index;
