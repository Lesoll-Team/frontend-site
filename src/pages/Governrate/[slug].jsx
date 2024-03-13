
const RedirectPage = () => {


  return null;
};

export default RedirectPage;
export async function getServerSideProps() {

  return {
    redirect: {
      destination: "/properties/sale/residential/search?page=1",
      statusCode: 308,
    },
  };

}