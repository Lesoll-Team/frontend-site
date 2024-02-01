import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import styles from "../../styles/blogs.module.css";
import Link from "next/link";

function BlogSinglePage({ BlogData }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div>
      <Card className=" shadow-none p-5">
        <CardBody className=" ">
          <Image
            radius="lg"
            width="100%"
            alt={"item.title"}
            className="w-full h-[450px] object-cover"
            src={BlogData.getBlogs.BlogImage}
          />
        </CardBody>
        <CardHeader className="">
          <h1 className="overflow-hidden text-lightGreen sm:text-xl font-bold text-xl py-5 md:text-2xl lg:text-3xl w-full  text-center rounded-2xl">
            {language ? BlogData.getBlogs.title.ar : BlogData.getBlogs.title.en}
          </h1>
        </CardHeader>

        <CardFooter className="flex flex-col">
          <div
            dir={language ? "rtl" : "ltr"}
            className={`text-md sm:text-lg text-darkGray sm:px-10 px-0  ${styles.genericDiv}`}
            dangerouslySetInnerHTML={
              language
                ? { __html: BlogData.getBlogs.description.ar }
                : { __html: BlogData.getBlogs.description.en }
            }
          />
          <div className="mt-8 w-full px-10">
          <p >
            يمكنك التواصل مع فريقنا المتخصص من خلال كل وسائل التواصل المتاحة
            عبر:
          </p>

          <div className="flex gap-x-4 mt-3">
            <Link href="https://wa.me/+201032362898">
              <img
                src="https://img.icons8.com/?size=50&amp;id=16713&amp;format=png"
                width="35px"
                alt="whats app icon"
              />
            </Link>
            <Link href="mailto: Info@Lesoll.com">
              <img
                src="https://img.icons8.com/?size=50&amp;id=OumT4lIcOllS&amp;format=png"
                width="35px"
                alt="mail icon"
              />
            </Link>

            <Link href="https://facebook.com/LesollRealestate/" target="_blank">
              <img
                src="https://img.icons8.com/?size=50&amp;id=118497&amp;format=png"
                width="35px"
                alt="facebook icon"
              />
            </Link>
          </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default React.memo(BlogSinglePage);
