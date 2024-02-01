import PropertyDetailsAdmin from "@/components/dashboard/router/propertyDetails/PropertyDetailsAdmin";
import { getPropertyDashboard } from "@/utils/propertyAPI";
import { DotPulse } from "@uiball/loaders";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PropertyDtailsPage = () => {
  const [propertyDetails, setPropertyDetails] = useState();
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
  }, [slug]);
  return (
    <div className="bg-gray-100 min-h-[90dvh]">
      <Head>
        <title>Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      {propertyDetails ? (
        <PropertyDetailsAdmin propertyDetails={propertyDetails} />
      ) : (
        <div className="h-[90vh] flex items-center justify-center">
          <DotPulse size={60} speed={1.3} color="#309da0" />
        </div>
      )}
    </div>
  );
};
export default PropertyDtailsPage;
