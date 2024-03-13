import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const Links = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const pageLinks = [
    {
      link: "https://lesoll.com/about-us",
      titleAr: "من نحن",
      titleEn: "About-us",
      id: 1,
    },
    {
      link: "https://lesoll.com/contact-us",
      titleAr: "تواصل معنا",
      titleEn: "Connect us",
      id: 2,
    },
    {
      link: "https://lesoll.com/blog?page=1",
      titleAr: "المقالات",
      titleEn: "Blogs",

      id: 3,
    },
    {
      link: "https://lesoll.com/faq",
      titleAr: "الأسئلة الشائعة",
      titleEn: "Common Questions",
      id: 4,
    },
    {
      link: "https://lesoll.com/termsofservice",
      titleAr: "الشروط والاحكام",
      titleEn: "Terms and Conditions",
      id: 5,
    },
    {
      link: "https://lesoll.com/privacypolicy",
      titleAr: "سياسة الخصوصية",
      titleEn: "Privacy Policy",
      id: 6,
    },
  ];
  return (
    <div className='flex justify-between items-center font-cairo w-full'>
      {pageLinks.map((link) =>
        <div key={link.id}>
          <Link className='flex lg-text' href={link.link} >
            {language ? link.titleAr : link.titleEn}

          </Link>
          {link.id !== 6 && <div className=" bg-gray2 w-[1px] h-[16px]" />}
        </div>
      )}

    </div>
  );
}

export default Links;
