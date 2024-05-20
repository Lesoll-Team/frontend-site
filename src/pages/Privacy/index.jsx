const PrivacyRedirect = () => {
  return null;
};

export default PrivacyRedirect;
export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/privacypolicy",
      statusCode: 308,
    },
  };
}
