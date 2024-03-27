import Link from "next/link";
import React, { memo } from "react";
import { useSelector } from "react-redux";

const Help = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <p className="text-xl font-bold">{language ? "مساعدة؟" : "Help?"}</p>

      <Link
        title={language ? "الأسئلة الشائعة" : "FAQ"}
        className="  text-darkGray"
        href="/faq"
      >
        {language ? "الأسئلة الشائعة" : "FAQ"}
      </Link>

      <Link
        title={language ? "الشروط والأحكام" : "Terms & Conditions"}
        className="  text-darkGray"
        href="/termsofservice"
      >
        {language ? "الشروط والأحكام" : "Terms & Conditions"}
      </Link>

      <Link
        title={language ? "سياسة الخصوصية" : "Privacy Policy"}
        className="  text-darkGray"
        href="/privacypolicy"
      >
        {language ? "سياسة الخصوصية" : "Privacy Policy"}
      </Link>
    </>
  );
};

export default memo(Help);
