import ContactLinksMobile from "@/components/new-prop-details/ContactLinksMobile";
import NewPropDetails from "@/components/new-prop-details/NewPropDetails";
import axios from "axios";
import Image from "next/image";

const index = ({ propertyData }) => {
  console.log(propertyData);
  //   console.log(firstSegment);

  return (
    <main className="  min-h-[80dvh] relative">
      <section className="px-5 md:px-0 md:container mx-auto">
        <NewPropDetails propertyData={propertyData} />
        <NewPropDetails propertyData={propertyData} />
        <NewPropDetails propertyData={propertyData} />
        <NewPropDetails propertyData={propertyData} />
      </section>

      <ContactLinksMobile
        phone={propertyData?.user?.code + propertyData.user.phone}
      />
    </main>
  );
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
      props: { propertyData: data },
      // revalidate: 10,
    };
  } catch (error) {}
  // return {
  //   props: {}, // will be passed to the page component as props
  // };
}
