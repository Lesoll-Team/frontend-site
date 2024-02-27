import AddProperty from "@/components/newAddProperty/AddProperty";

const addPropertyPage = () => {
  return <AddProperty />;
};

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const firstSegment = req.url.split("/")[1]; // Extracting the first segment of the URL path
//   // You can return an empty object or null since you don't need to fetch any data
//   return {
//     props: { firstSegment },
//   };
// }
export default addPropertyPage;
