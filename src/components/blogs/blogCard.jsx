import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from 'next/link';

function BlogCard({blogData}) {
    const list = [
        {
          title: "تطور سوق العقارات في مدينة نصر من شقق وكمبوندات",
          img: "https://www.propertyfinder.eg/property/9002b82765a42affc9d7bb866d1318e9/260/185/MODE/52462b/4273128-0d566o.webp?ctr=eg",
          price: "$5.50",
        },
        {
          title: "تتميز مدينة نصر بتوفر مجموعة متنوعة من الشقق السكنية",
          img: "https://www.propertyfinder.eg/property/2d93cdcf78e87534ac009e7af20261d9/260/185/MODE/9b9fe2/4126456-e34e7o.webp?ctr=eg",
          price: "$3.00",
        },
        {
          title: "تطور سوق العقارات في مدينة نصر من شقق وكمبوندات",
          img: "https://www.propertyfinder.eg/property/437970be147eaf6550b66012ef8cd1d2/260/185/MODE/10fb6b/4267286-29a89o.webp?ctr=eg",
          price: "$10.00",
        },
        {
          title: "الاستثمار العقاري في مصر هل يستحق الاهتمام؟",
          img: "https://www.propertyfinder.eg/property/456c3bb2f1fef32b8264f94ceacc4c83/260/185/MODE/2a57f5/3943276-4ce12o.webp?ctr=eg",
          price: "$5.30",
        },
        {
          title: "مصادر: بدء تسليم شقق موظفي العاصمة الإدارية استعدادا لنقلهم رسميا للعمل بها",
          img: "https://www.propertyfinder.eg/property/b42c225d9abf2232428e153d7369f955/260/185/MODE/8d4d10/4271474-577c0o.webp?ctr=eg",
          price: "$15.70",
        },
        {
          title: "الاستثمار العقاري في مصر هل يستحق الاهتمام؟",
          img: "https://www.propertyfinder.eg/property/85d1cee8c7a7162475f1a6f6a21e341f/500/356/MODE/39ed8f/4222285-0c6a7o.webp?ctr=eg",
          price: "$8.00",
        },
        {
          title: "مصادر: بدء تسليم شقق موظفي العاصمة الإدارية استعدادا لنقلهم رسميا للعمل بها",
          img: "https://www.propertyfinder.eg/property/b1d59168d8682ed8f529e3354a51bdde/338/248/MODE/5235c5/3585510-b9249o.webp?ctr=eg",
          price: "$7.50",
        },
        {
          title: "الاستثمار العقاري في مصر هل يستحق الاهتمام؟",
          img: "https://www.propertyfinder.eg/property/1cdb5f552e0252df73cc260a32cf8af4/338/248/MODE/84f5be/4114723-35f5ao.webp?ctr=eg",
          price: "$12.20",
        },
      ];
    
      return (
        <div className="gap-10 grid grid-cols-1  md:grid-cols-3 ">
          {blogData.map((item) => (
            <Link href={`/blogs/${item._id}`}>
            <Card className='' shadow="sm" key={item._id} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  height="100%"
                  alt={item.title.ar}
                  className=" object-cover "
                  src={item.BlogImage}
                />
              </CardBody>
              <CardFooter className="text-small justify-center">
              <div>         <b className='text-lightGreen text-xl'>{item.title.ar}</b>
              </div>
              </CardFooter>
            </Card>
            </Link>  ))}
        </div>
      );
}

export default React.memo(BlogCard)