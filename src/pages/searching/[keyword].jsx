const SearchPageRedirect = () => {
  return null;
};
export default SearchPageRedirect;
export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/properties/sale/residential/search?page=1",
      statusCode: 308,
    },
  };
}
