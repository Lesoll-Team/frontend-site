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
          <h1 className="overflow-hidden text-lightGreen w-full  text-center rounded-2xl">
            {language ? BlogData.getBlogs.title.ar : BlogData.getBlogs.title.en}
          </h1>
        </CardHeader>

        <CardFooter className="">
          <div
            dir={language ? "rtl" : "ltr"}
            className={`text-lg text-darkGray text-justify px-10 rounded-2xl ${styles.genericDiv}`}
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
