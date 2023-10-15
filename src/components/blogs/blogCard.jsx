import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { useSelector } from "react-redux";

function BlogCard({ blogData }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  // console.log(blogData);
  return (
    <div className="gap-10 flex flex-wrap  ">
      {blogData.map((item) => (
        <Link
          title={language ? item.title.ar : item.title.en}
          key={item._id}
          href={`/blogs/${language ? item.slug.ar : item.slug.en}`}
        >
          <Card className="w-[300px]" shadow="sm" key={item._id} isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                height="100%"
                alt={language ? item.title.ar : item.title.en}
                className=" object-cover "
                src={item.BlogImage}
              />
            </CardBody>
            <CardFooter className="text-small">
              <div className="">
                <h2 className="text-lightGreen sm:text-lg text-sm text-md md:text-xl lg:text-2xl ">
                  {language ? item.title.ar.substring(0, 30) : 
                  item.title.en.substring(0, 30)
                  }
                  {language ? item.title.ar.length > 30 && "..." : 
                  item.title.en.length > 30 && "..."
                  }
                </h2>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default React.memo(BlogCard);
