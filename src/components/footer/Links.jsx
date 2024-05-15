import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Links = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const pageLinks = [
    {
      link: "/about-us",
      titleAr: "من نحن",
      titleEn: "About-us",
      id: 1,
    },
    {
      link: "/contact-us",
      titleAr: "تواصل معنا",
      titleEn: "Connect us",
      id: 2,
    },
    {
      link: "/blog?page=1",
      titleAr: "المقالات",
      titleEn: "Blogs",

      id: 3,
    },
    {
      link: "/faq",
      titleAr: "الأسئلة الشائعة",
      titleEn: "Common Questions",
      id: 4,
    },
    {
      link: "/termsofservice",
      titleAr: "الشروط والاحكام",
      titleEn: "Terms and Conditions",
      id: 5,
    },
    {
      link: "/privacypolicy",
      titleAr: "سياسة الخصوصية",
      titleEn: "Privacy Policy",
      id: 6,
    },
  ];
  return (
    //grid md:grid-cols-6 grid-cols-4
    <>
      <div className=" flex-wrap hidden  md:flex gap-x-[10px] justify-center items-center font-cairo w-full">
        {pageLinks.map((link) => (
          <div
            key={link.id}
            className="   flex mx-1 justify-around items-center gap-x-[20px] "
          >
            <div>
              <Link className="flex  lg-text" href={link.link}>
                {language ? link.titleAr : link.titleEn}
              </Link>
            </div>
            {link.id !== 6 && <div className={` bg-gray2 w-[1px] h-[16px]`} />}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:hidden gap-y-[8px]">
        <div className="flex  justify-center">
          {pageLinks
            .filter((_, i) => i < 4)
            .map((link) => (
              <div
                key={link.id}
                className="  flex mx-1 justify-around items-center gap-x-[8px] "
              >
                <Link className="flex  lg-text" href={link.link}>
                  {language ? link.titleAr : link.titleEn}
                </Link>
                {link.id !== 4 && (
                  <div className={` bg-gray2 w-[1px] h-[16px]`} />
                )}
              </div>
            ))}
        </div>
        <div className="flex  justify-center">
          {pageLinks
            .filter((_, i) => i > 3)
            .map((link) => (
              <div
                key={link.id}
                className="  flex  mx-1 justify-around items-center gap-x-[8px] "
              >
                <Link className="flex  lg-text" href={link.link}>
                  {language ? link.titleAr : link.titleEn}
                </Link>
                {link.id !== 6 && (
                  <div className={` bg-gray2 w-[1px] h-[16px]`} />
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Links;
