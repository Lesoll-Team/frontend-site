// import Head from "next/head";
// import React from "react";
// import RealtyCardBuy from "../../components/realtyCard/RealtyCard.jsx";
// import PaginationPage from "../../Shared/Pagination/Pagination.jsx";
// import { useRouter } from "next/router";
// // import Link from "next/link";
// import { SearchBar } from "@/Shared/search/SearchBar.jsx";
// import { useSelector } from "react-redux";
export default function PropertyBuy() {
  return null;
  // const language = useSelector((state) => state.GlobalState.languageIs);
  // const router = useRouter();
  // const currentPage = router.query.page;
  // const path = router.asPath;
  // return (
  //   <div className="container mx-auto">
  //     <Head>
  //       <title>
  //         {language
  //           ? "عقارات للبيع في مصر | شقق للبيع في مصر | ليسول"
  //           : "Real estate for sale in Egypt | Apartments for sale in Egypt | Lesoll"}
  //       </title>
  //       <meta
  //         name="description"
  //         content={
  //           language
  //             ? "شقق للبيع في مصر بأسعار مناسبة لجميع الميزانيات. اختر شقتك من بين مجموعة واسعة من الشقق المتاحة، بما في ذلك شقق للبيع بالتقسيط وشقق دوبلكس. احجز شقتك الآن!"
  //             : "Apartments for sale in Egypt at prices suitable for all budgets. Choose your apartment from a full range of available apartments, including apartments for sale in installments and duplex apartments. Book your apartment now!"
  //         }
  //       />
  //       <link rel="canonical" href={`https://lesoll.com${path}`} />
  //     </Head>
  //     <SearchBar pageSaleOption="For Sale" />

  //     <div>
  //       <h1 className="font-bold text-5xl pt-20  md:flex md:justify-start flex justify-center text-lightGreen">
  //         {language ? "عقارات للبيع فى مصر" : " Properties for Buy in Egypt"}
  //       </h1>
  //     </div>
  //     <div className=" flex flex-wrap items-center py-5 gap-x-5 justify-center justify-items-center gap-y-12 md:gap-y-16 mt-5 md:mt-12 ">
  //       {propertyForBuy
  //         ? propertyForBuy.result.map((property) => (
  //             <RealtyCardBuy key={property._id} propertyDetails={property} />
  //           ))
  //         : "no property found"}
  //     </div>

  //     <div>
  //       <div className="py-2 px-2 flex  justify-center items-center">
  //         <PaginationPage
  //           hrefRout={"buy"}
  //           currentPage={currentPage}
  //           totalPages={propertyForBuy.totalPages}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
}

export async function getServerSideProps() {
  // Your logic to determine if the resource is gone
  // const isResourceGone = true; // Example condition

  // if (isResourceGone) {
  // Redirect to the homepage with a 410 status code
  return {
    redirect: {
      destination: "/properties/sale/residential/search?page=1",
      statusCode: 308,
    },
  };
  // }

  // Continue with your logic if the resource is not gone
  // return {
  //   props: {}, // Your props object
  // };
}
// export async function getServerSideProps(context) {
//   const { page } = context.query;
//   const resBuy = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/property/gethomesale?limit=20&page=${page}`
//   );
//   const dataBuy = await resBuy.json();
//   return {
//     props: { propertyForBuy: dataBuy, revalidate: 1 },
//   };
// }

/**import Head from "next/head";
import React, { useState } from "react";
import RealtyCardBuy from "../../components/realtyCard/RealtyCard.jsx";
import PaginationPage from "../../Shared/Pagination/Pagination.jsx";
import { useRouter } from "next/router";
// import Link from "next/link";
import { SearchBar } from "@/Shared/search/SearchBar.jsx";
import { useSelector } from "react-redux";
export default function PropertyBuy({ propertyForBuy }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  // const currentPage = router.query.page;
  const [currentPage, setCurrentPage] = useState(parseInt(router.query.page) || 1);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage + 1); // React-paginate starts indexing from 0
    router.push(`/buy/${selectedPage + 1}`);
  };
  return (
    <div className="container mx-auto">
      <Head>
        <title>{language ? "عقارات للبيع" : "properties for sale"}</title>

        <meta
          name="description"
          content="استكشف مجموعة واسعة من العقارات المتاحة للبيع على منصتنا للعقارات. ابحث عن منازل وشقق وعقارات تجارية للبيع في المواقع الرئيسية. ابحث عن العقار الذي تحلم به للبيع اليوم!"
        />
      </Head>
      <SearchBar />

      <div>
        <h2 className="font-bold text-5xl pt-20  md:flex md:justify-start flex justify-center text-lightGreen">
          {language ? "عقارات للبيع" : " Properties for Buy"}
        </h2>
      </div>
      <div className="items-center py-5  grid  lg:grid-cols-3 md:grid-cols-2 gap-x-2 justify-center justify-items-center gap-y-12 md:gap-y-16 mt-5 md:mt-12  ">
        {propertyForBuy
          ? propertyForBuy.result.map((property) => (
              <RealtyCardBuy key={property._id} propertyDetails={property} />
            ))
          : "no property found"}
         <Link  href={`/propertyDetails/${property._id}`}>   </Link> 
        </div>

        <div>
          <div className="py-2 px-2 flex justify-between items-center">
            <PaginationPage
              hrefRout={"buy"}
              currentPage={currentPage}
              totalPages={propertyForBuy.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
  
  export async function getServerSideProps(context) {
    const { page } = context.query;
    const resBuy = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/property/gethomesale?limit=2&page=${page}`
    );
    const dataBuy = await resBuy.json();
    return {
      props: { propertyForBuy: dataBuy },
    };
  }
   */
