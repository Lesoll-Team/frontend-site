import Head from "next/head";
import PaginationPage from "../../Shared/Pagination/Pagination";
import { useRouter } from "next/router";
import RealtyCardMostView from "../../components/realtyCard/RealtyCard";
import { SearchBar } from "@/Shared/search/SearchBar";
import { useSelector } from "react-redux";

function MostView({ propertyForView }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const currentPage = router.query.page;
  return (
    <div className="container mx-auto">
      <Head>
        <title>
          {language ? "عقارات الأكثر مشاهدة" : "properties for most view"}
        </title>
        <meta
          name="description"
          content="استكشف مجموعة واسعة من العقارات المتاحة والمميزة على منصتنا للعقارات. ابحث عن شقق ومنازل ومساحات  في المواقع الرئيسية. ابحث عن العقار المثالي اليوم!"
        />
      </Head>
      <SearchBar />
      <div>
        <h1 className="font-bold text-5xl pt-20 md:flex md:justify-start flex justify-center text-lightGreen">
          {language ? "عقارات الأكثر مشاهدة" : "properties for most view"}
        </h1>
      </div>

      <div className="flex flex-wrap items-center py-5 gap-x-5 justify-center justify-items-center gap-y-12 md:gap-y-16 mt-5 md:mt-12">
        {propertyForView && propertyForView.result
          ? propertyForView.result.map((property) => (
              <RealtyCardMostView
                key={property?._id}
                propertyDetails={property}
              />
            ))
          : "no property found"}
      </div>

      <div>
        <div className="py-2 px-2 flex  justify-center items-center">
          <PaginationPage
            hrefRout={"most-view"}
            currentPage={currentPage}
            totalPages={propertyForView?.totalPages}
          />
        </div>
      </div>
    </div>
  );
}

export default MostView;

export async function getServerSideProps(context) {
  const { page } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/mostview?limit=20&page=${
      page || 1
    }`
  );
  const data = await res.json();
  return {
    props: {
      propertyForView: data,
      revalidate: 1,
    },
  };
}
