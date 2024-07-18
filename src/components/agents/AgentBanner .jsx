import useContactLinks from "@/Hooks/useContactLinks";
import Image from "next/image";
import { useSelector } from "react-redux";

const AgentBanner = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const message =
    "مساء الخير مهتم أعرف تفاصيل أكتر عن الحسابات المميزة وكيفية الاشنراك";
  const { WhatappLinkBtn } = useContactLinks({
    phoneNumber: "+201032362898",
    message: message,
  });
  return (
    <div className=" text-white relative col-span-full rounded-md  overflow-hidden h-[20dvh] sm:h-[35dvh]">
      <Image
        className="w-full h-full absolute object-cover  -z-10  brightness-50"
        src="/agents/agent-banner.webp"
        width={400}
        height={400}
        alt="agents banner"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,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"
      />
      <div className="flex sm:px-10 px-5 justify-center h-full  flex-col overflow-hidden w-full ">
        <div className="flex flex-col space-y-1 ">
          <p className=" text-white sm:text-lg lg-text font-bold font-noto">
            {language
              ? " هل تبحث عن مزيد من الانتشار ؟"
              : "Are you looking to reach a wider audience?"}
          </p>
          <p className=" text-white sm:text-lg lg-text   font-noto">
            {language
              ? "انضم إلينا الان واصبح احد عملاء ليسول المميزين"
              : "Join us now and become one of Lesoll's distinguished clients."}
          </p>
        </div>
        <WhatappLinkBtn className="bg-[#1351A3] font-noto sm:mt-[40px] mt-[20px] p-1 px-2 lg-text rounded-md w-fit">
          {language ? "اكتشف المزيد" : "Know more!"}
        </WhatappLinkBtn>
      </div>
    </div>
  );
};
export default AgentBanner;
