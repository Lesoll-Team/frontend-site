const AboutRedirect = () => {
  return null;
};

export default AboutRedirect;
export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/about-us",
      statusCode: 308,
    },
  };
}
