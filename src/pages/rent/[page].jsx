import Head from "next/head";
import Link from "next/link";
import PaginationPage from "../../Shared/Pagination/Pagination";
import { useRouter } from "next/router";
import RealtyCardRent from "../../components/realtyCard/RealtyCardRent";
import { SearchBar } from "@/Shared/search/SearchBar";
export default function PropertyRent({ propertyForRent }) {
  const router = useRouter();
  const currentPage = router.query.page;
  return (
    <div className=" container mx-auto">
      <Head>
        <title>property</title>
      </Head>
      <SearchBar/>
      <div>
        <h1 className="font-bold text-5xl pt-20  md:flex md:justify-start flex justify-center text-lightGreen">
          Properties for Rent
        </h1>
      </div>

      <div className="items-center py-5  grid  lg:grid-cols-3 md:grid-cols-2 gap-x-2 justify-center justify-items-center gap-y-12 md:gap-y-16 mt-5 md:mt-12  ">
        {propertyForRent.result.map((property) => (
          

            <RealtyCardRent key={property._id} propertyDetails={property} />
            
        ))}
          {/* <Link  href={`/propertyDetails/${property._id}`}>  </Link> */}

      </div>

      <div>
        <div className="py-2 px-2 flex justify-between items-center">
          <PaginationPage hrefRout={'rent'} currentPage={currentPage} totalPages={propertyForRent.totalPages} />
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { page } = context.query;
  const resRent = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomerent?limit=9&page=${page}` //limit|| page||
  );
  const dataRent = await resRent.json();

  return {
    props: { propertyForRent: dataRent },
  };
}
