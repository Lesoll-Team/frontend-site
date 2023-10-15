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

function BlogSinglePage({ BlogData }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  // console.log(BlogData);
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

        <CardFooter className="">
          <div
            dir={language ? "rtl" : "ltr"}
            className={`text-md sm:text-lg text-darkGray sm:px-10 px-0  ${styles.genericDiv}`}
            dangerouslySetInnerHTML={
              language
                ? { __html: BlogData.getBlogs.description.ar }
                : { __html: BlogData.getBlogs.description.en }
            }
          />
        </CardFooter>
      </Card>
    </div>
  );
}

export default React.memo(BlogSinglePage);
