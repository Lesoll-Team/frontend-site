import axios from "axios";

const index = ({ singleProperty }) => {
  console.log(singleProperty);
  //   console.log(firstSegment);
  return <div>index</div>;
};
export default index;

export async function getServerSideProps(context) {
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  //   const data = JSON.parse(context);
  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/property/get/property/singlepage/${context.query.id}`
    );
    const data = res.data.find;

    return {
      props: { singleProperty: data },
      // revalidate: 10,
    };
  } catch (error) {}
  // return {
  //   props: {}, // will be passed to the page component as props
  // };
}
