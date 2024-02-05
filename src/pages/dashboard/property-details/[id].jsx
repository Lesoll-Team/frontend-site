import PropertyDetailsAdmin from "@/components/dashboard/router/propertyDetails/PropertyDetailsAdmin";
import { getPropertyDashboard } from "@/utils/propertyAPI";
import { DotPulse } from "@uiball/loaders";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PropertyDtailsPage = () => {
  const [propertyDetails, setPropertyDetails] = useState();
  const [isSoldChange, setIsSoldChange] = useState(false);

  const router = useRouter();
  const slug = router.query.id;
  useEffect(() => {
    const fetchData = async () => {
      if (slug) {
        const data = await getPropertyDashboard(slug);
        setPropertyDetails(data);
      }
    };
    fetchData();
  }, [slug, isSoldChange]);
  return (
    <div className="bg-gray-100 min-h-[90dvh]">
      <Head>
        <title>Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      {propertyDetails ? (
        <>
          <div className=" container mx-auto pt-10">
            {propertyDetails.getProperty?.isSold ? (
              <span className="text-2xl text-green-500 font-semibold">
                تم البيع او التأجير
              </span>
            ) : (
              <span className="text-2xl text-yellow-500 font-semibold">
                متاح للبيع او التأجير
              </span>
            )}
          </div>

          <PropertyDetailsAdmin
            setIsSoldChange={setIsSoldChange}
            isSoldChange={isSoldChange}
            propertyDetails={propertyDetails}
          />
        </>
      ) : (
        <div className="h-[90vh] flex items-center justify-center">
          <DotPulse size={60} speed={1.3} color="#309da0" />
        </div>
      )}
    </div>
  );
};
export default PropertyDtailsPage;
