import ContactLinksMobile from "@/components/new-prop-details/ContactLinksMobile";
import NewPropDetails from "@/components/new-prop-details/NewPropDetails";
import axios from "axios";
export default function PropertyDetails({
  query,
  singleProperty,
  slug,
}) {
  return (
    <main className="  min-h-[80dvh] relative">
      <section className="px-5 md:px-0 md:container mx-auto">
        <NewPropDetails
          propertyData={singleProperty}
          slug={slug}
          query={query}
        />
      </section>
      <ContactLinksMobile propertyData={singleProperty} />
    </main>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/property/get/property/singlepage/${context.query.id}`
    );
    const all = res.data;
    const data = res.data.find;
    return {
      props: {
        singleProperty: data,
        all,
        slug: context.query.id,
        query: context.query,
      },
    };
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return {
        redirect: {
          destination: "/properties/sale/residential/search?page=1",
          statusCode: 308,
        },
      };
    } else if (error.response && error.response.status === 500) {
      return {
        redirect: {
          destination: "/",
          statusCode: 308,
        },
      };
    }
    return {
      redirect: {
        destination: "/",
        statusCode: 308,
      },
    };
  }
}
