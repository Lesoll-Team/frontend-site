import useContactLinks from "@/Hooks/useContactLinks";

const ContactLinksMobile = ({ propertyData }) => {
  const message = "";
  const { CallLinkBtn, WhatappLinkBtn } = useContactLinks({
    phoneNumber: propertyData.user?.code + propertyData.user?.phone,
    message: message,
  });
  return (
    <div className="md:hidden  sticky -bottom-[1px] flex w-full ">
      <WhatappLinkBtn className="py-3 flex items-center justify-center w-full gap-2 bg-[#39AE41] text-white" />
      <CallLinkBtn className="py-3 flex items-center justify-center w-full gap-2 bg-lightNeutral text-[#5F98D1]" />
    </div>
  );
};
export default ContactLinksMobile;
