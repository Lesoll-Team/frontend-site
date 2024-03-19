import useContactLinks from "@/Hooks/useContactLinks";
import { localizedNumber } from "@/utils/localizedNumber";
import { WhatsAppBtn } from "@/utils/propertyAPI";
import Image from "next/image";
import { useSelector } from "react-redux";

const ProjectTitlePrice = ({ projectData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { WhatappLinkBtn, CallLinkBtn } = useContactLinks({
    phoneNumber: projectData.owner.code + projectData.owner.phone,
    message: "",
  });
  // console.log(projectData);
  return (
    <section className="flex justify-between items-end md:pb-16 md:border-b-2 flex-wrap gap-y-5">
      <div className="flex items-start gap-8">
        {projectData?.projectLogo && (
          <div className="hidden md:block">
            <Image
              src={projectData?.projectLogo}
              width={68}
              height={68}
              className="rounded-full object-cover"
              alt="company logo"
            />
          </div>
        )}

        <div className="flex flex-col gap-2 md:gap-y-4">
          <h1 className="">
            {language ? projectData.titleAr : projectData.titleEn}
          </h1>
          <div className="flex gap-6 items-center">
            <div className="flex gap-4 items-center">
              <p>{language ? "السعر يبدأ من :" : "Price start from"}</p>
              <h2>
                {localizedNumber(projectData.priceFrom)}{" "}
                {language ? "ج.م " : "Egp "}
              </h2>
            </div>
            {projectData.priceTo && (
              <div className="hidden md:flex gap-4  items-center">
                <p>{language ? " إلى:" : "To:"}</p>
                <h2>
                  {localizedNumber(projectData.priceTo)}{" "}
                  {language ? "ج.م " : "Egp "}
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden items-center gap-5 lg:flex ">
        <CallLinkBtn
          className={
            "py-3 px-8 max-w-fit flex flex-row-reverse items-center gap-2 bg-lightNeutral text-xl text-[#5F98D1] rounded-md"
          }
        />
        <WhatappLinkBtn
          className={
            "py-3 px-8 max-w-fit flex flex-row-reverse items-center gap-2 bg-[#39AE41] text-xl text-white rounded-md"
          }
        />
      </div>
    </section>
  );
};
export default ProjectTitlePrice;
