import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { useSelector } from "react-redux";

function BlogCard({ blogData }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  // console.log(blogData);
  return (
    <div className="gap-10 flex flex-wrap justify-center ">
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
            <CardFooter className="text-small justify-center">
              <div>
                {" "}
                <h2 className="text-lightGreen sm:text-xl text-lg md:text-2xl lg:text-4xl ">
                  {language ? item.title.ar : item.title.en}
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
