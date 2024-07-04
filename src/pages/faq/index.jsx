const index = () => {
  return null;
};
export default index;
export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}
