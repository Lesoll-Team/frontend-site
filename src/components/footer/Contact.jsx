import Link from "next/link";
import React, { memo } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { useSelector } from "react-redux";

const Contact = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <p className="text-xl font-bold">{language ? "التواصل" : "Contact"}</p>

      <address className="not-italic	">
        <Link
          title="Cairo, Nasr City"
          className="flex gap-1 items-center "
          href="https://maps.app.goo.gl/P71VgHcHPUaiVo2FA"
          target="_blank"
        >
          <ImLocation2 className="text-lightOrange text-lg" /> Cairo, Naser City
        </Link>
      </address>
      <Link
        title="info@lesoll.com"
        href="mailto:info@lesoll.com"
        className="flex gap-1 items-center"
      >
        {" "}
        <AiOutlineMail className="text-lightOrange text-lg" />
        info@lesoll.com
      </Link>
    </>
  );
};

export default memo(Contact);
