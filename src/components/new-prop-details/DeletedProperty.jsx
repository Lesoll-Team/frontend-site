import Head from "next/head";
import RealtyCard from "../realtyCard/RealtyCard";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
const DeletedProperty = ({ RecommendedOther }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("Deleted_Property")}</title>
      </Head>
      <div className="sm:container mx-2 sm:mx-auto min-h-[90dvh] py-10">
        <div className="min-h-[20dvh] flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
            <Image
              width={423}
              height={339}
              src="/deleted-property-1.svg"
              alt="vector image of a woman aside to an empty folder "
              className="md:w-[500px] object-cover"
            />
            <div className="flex flex-col gap-5 md:gap-14">
              {" "}
              <div className="flex flex-col gap-3 md:gap-5 items-center md:items-start">
                <h1 className=" text-2xl md:text-5xl font-bold  text-darkGray ">
                  {t("Property_Been_Deleted")}
                </h1>
                <p className="text-lg text-baseGray">
                  {t("Browse_similar_Properties")}
                </p>
              </div>
              <Link
                href={"/"}
                className="w-full rounded-md py-2 bg-lightGreen text-white text-center"
              >
                {t("Back_To_Home")}
              </Link>
            </div>
          </div>
        </div>
        {RecommendedOther.length !== 0 && (
          <div className={` text-c  space-y-4 mt-16`}>
            <h3 className="md:text-2xl text-lg  font-bold">
              {t("Browse_similar_Properties")}
            </h3>
            <div className=" grid grid-cols-1 md:container md:mx-auto  mx-[20px]  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10">
              {RecommendedOther.map((recommendations) => (
                <RealtyCard
                  key={recommendations._id}
                  propertyDetails={recommendations}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DeletedProperty;
