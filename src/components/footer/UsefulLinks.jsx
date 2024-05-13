import Link from "next/link";
import React, { memo } from "react";
import { useSelector } from "react-redux";

const UsefulLinks = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <p className="text-xl font-bold">
        {language ? "روابط مساعدة" : "Useful Links"}
      </p>

      <Link
        title={language ? "من نحن" : "About Us"}
        href="/about-us"
        className="  text-darkGray"
      >
        {language ? "من نحن" : "About Us"}
      </Link>

      <Link
        title={language ? "المقالات" : "Blogs"}
        href="/blog"
        className=" text-darkGray"
      >
        {language ? "المقالات" : "Blogs"}
      </Link>

      <Link
        title={language ? "تواصل معنا" : "Contact"}
        href="/contact-us"
        className=" text-darkGray"
      >
        {language ? "تواصل معنا" : "Contact"}
      </Link>
    </>
  );
};

export default memo(UsefulLinks);
