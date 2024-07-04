function MostView() {
  return null;
}

export default MostView;

export async function getServerSideProps() {
  const isResourceGone = true; // Example condition

  if (isResourceGone) {
    return {
      redirect: {
        destination: "/",
        statusCode: 308,
      },
    };
  }
}
