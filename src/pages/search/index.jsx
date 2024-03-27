
const SearchRedirect = () => {
  return null;
};

export default SearchRedirect;
export async function getServerSideProps() {

  return {
    redirect: {
      destination: "/properties/sale/residential/search?page=1",
      statusCode: 308,
    },
  };

}