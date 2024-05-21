const ContactRedirect = () => {
  return null;
};

export default ContactRedirect;
export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/contact-us",
      statusCode: 308,
    },
  };
}
