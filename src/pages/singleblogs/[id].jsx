const Index = () => {
  return null;
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
