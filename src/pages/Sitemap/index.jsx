
const SiteMapRedirect = () => {

  return null;
};

export default SiteMapRedirect;
export async function getServerSideProps() {

  return {
    redirect: {
      destination: "/properties/sale/residential/search?page=1",
      statusCode: 308,
    },
  };

}