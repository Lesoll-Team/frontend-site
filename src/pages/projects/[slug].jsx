import SingleProject from "@/components/projects/singleProject/SingleProject";
import axios from "axios";

const SingleProjectPage = ({ data, query }) => {
  return (
    <SingleProject propertyData={data.result} allData={data} query={query} />
  );
};
export default SingleProjectPage;

export async function getServerSideProps(context) {
  const slug = context?.query?.slug;
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/property/get-single-projects/${slug}`
    );

    const data = res.data;
    return {
      props: { data: data, query: context.query },
      // revalidate: 10,
    };
  } catch (error) {
    // context.res.writeHead(410);
    // context.res.end();

    // If the error is not a 400 status code, re-throw the error
    throw error;
  }
}
