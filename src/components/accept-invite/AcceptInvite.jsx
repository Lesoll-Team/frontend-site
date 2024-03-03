import Image from "next/image";
import { useSelector } from "react-redux";

const AcceptInvite = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const companyName = "العالمية للعقارات";
  return (
    <div className="flex w-full">
      <div className="w-full flex flex-col gap-20 h-full justify-center items-center px-2">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col justify-center items-center gap-8 md:gap-10">
            <Image
              src={"/user-avatar-placeholder.png"}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <h1 className="text-3xl font-bold">company name </h1>
          </div>
          <p className="text-center">
            {language
              ? `تمت دعوتك من قبل شركة ${companyName} للانضمام كمستخدم فرعي`
              : ""}
          </p>
        </div>
      </div>
      <Image
        src={"/accept-invite.png"}
        width={555}
        height={924}
        className="h-full object-cover lg:block hidden"
      />
    </div>
  );
};
export default AcceptInvite;
