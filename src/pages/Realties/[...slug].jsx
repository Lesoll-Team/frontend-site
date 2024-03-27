
const RealtiesSlugPage = () => {
  return null
};

export default RealtiesSlugPage;
export async function getServerSideProps() {

  return {
    redirect: {
      destination: "/properties/sale/residential/search?page=1",
      statusCode: 308,
    },
  };

}