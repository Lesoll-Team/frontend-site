function MostView() {
  return null;
}

export default MostView;

export async function getServerSideProps() {
  // Your logic to determine if the resource is gone
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
