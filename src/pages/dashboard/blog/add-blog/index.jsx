import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import {
  createBlogs,
  resetInputsBlog,
} from "@/redux-store/features/dashboard/blogDashboardSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import BlogAdded from "@/components/dashboard/model/BlogAdded";
const AddBlog = () => {
  const router = useRouter();
  const { errorBlog, messageEventBlog } = useSelector(
    (state) => state.BlogDashboard
  );
  const dispatch = useDispatch();
  const [titleAR, setTitleAR] = useState("");
  const [metDescriptionAR, setMetDescriptionAR] = useState("");
  const [metaTitleAR, setMetaTitleAR] = useState("");
  const [descriptionAR, setDescriptionAR] = useState(``);
  const [slugAR, setSlugAR] = useState("");

  // const [slugEN, setSlugEN] = useState("");
  // const [metaTitleEN, setMetaTitleEN] = useState("");
  // const [titleEN, setTitleEN] = useState("");
  // const [descriptionEN, setDescriptionEN] = useState(``);
  // const [metDescriptionEN, setMetDescriptionEN] = useState("");

  const [selectedImage, setImage] = useState(null);
  const [selectedImagePrev, setImagePrev] = useState(null);
  const [blogCreated, setBlogCreated] = useState(false);

  const handleImgChange = (e) => {
    // const newImage = e.target.files[0];
    setImage(e.target.files[0]);

    if (e.target.files[0]) {
      if (typeof window !== "undefined") {
        setImagePrev(window.URL.createObjectURL(e.target.files[0]));
      }
    } else {
      setImagePrev(null);
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
    setImagePrev(null);
  };
  const handleBlogButton = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const metaDescription = {
      ar: metDescriptionAR,
      en: metDescriptionAR,
    };
    const description = {
      ar: descriptionAR,
      en: descriptionAR,
    };
    const title = {
      ar: titleAR,
      en: titleAR,
    };
    const slug = {
      ar: slugAR,
      en: slugAR,
    };
    const metaTitle = {
      ar: metaTitleAR,
      en: metaTitleAR,
    };

    formData.append("img", selectedImage);
    formData.append("title", JSON.stringify(title));
    formData.append("metaDescription", JSON.stringify(metaDescription));
    formData.append("description", JSON.stringify(description));
    formData.append("slug", JSON.stringify(slug));
    formData.append("metaTitle", JSON.stringify(metaTitle));
    dispatch(createBlogs({ blogData: formData })).then((action) => {
      if (createBlogs.fulfilled.match(action)) {
        setBlogCreated(true);
        dispatch(resetInputsBlog());
        setTitleAR("");
        setMetaTitleAR("");
        setSlugAR("");
        setDescriptionAR(``);
        setMetDescriptionAR("");
        setImage(null);
        setImagePrev(null);
        // setBlogCreated(false);
      }
    });
  };

  useEffect(() => {
    setTitleAR("");
    setMetaTitleAR("");
    setSlugAR("");
    setDescriptionAR(``);
    setMetDescriptionAR("");
    setImage(null);
    setImagePrev(null);
    setBlogCreated(false);
  }, [router]);
  if (blogCreated) {
    return <BlogAdded setBlogCreated={setBlogCreated} />;
  }
  return (
    <div className="min-h-[90dvh] flex" dir="ltr">
      <Head>
        <title>Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="  sticky top-0">
        <Sidebar />
      </div>
      <div className="md:container md:my-20  w-full my-10 md:mx-auto sm:mx-[20px] mx-[5px] gap-y-[40px] flex flex-col">
        <div className="flex items-center justify-between border-1.5 border-gray-200 p-3">
          <div className="flex flex-col w-full">
            {selectedImagePrev && (
              <img
                style={{ maxWidth: 100, maxHeight: 100 }}
                src={selectedImagePrev}
                className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] "
                alt=" selected Prev"
              />
            )}

            <input
              name="image-set"
              type="file"
              placeholder="set Image here"
              className="my-5 w-full p-2 bg-gray-100"
              onChange={handleImgChange}
            />
          </div>

          <button
            type="button"
            onClick={handleDeleteImage}
            className="ml-2 text-red-500"
          >
            Delete
          </button>
        </div>

        <div
          dir="rtl"
          className="w-full border-1.5 border-gray-200 p-3 gap-5 flex  flex-col"
        >
          <b>عنوان المقال </b>

          <input
            name="title-ar"
            className="indent-3 w-full h-full flex  focus:outline-none"
            value={titleAR}
            type="text"
            placeholder="إدخال عنوان المقال..."
            onChange={(e) => setTitleAR(e.target.value)}
          />
          {/* <Input
            color="default"
            type="text"
            value={titleEN}
            name="title-en"
            placeholder="set Title English here"
            labelPlacement="outside"
            label=<b>Title English</b>
            onChange={(e) => setTitleEN(e.target.value)}
          /> */}
        </div>

        <div
          dir="rtl"
          className=" flex flex-col border-gray-200 border-1.5  p-3 gap-5"
        >
          <b>وصف المقال </b>
          <textarea
            // dir="rtl"
            value={descriptionAR}
            onChange={(e) => setDescriptionAR(e.target.value)}
            placeholder="حقل إدخال الوصف "
            className="min-h-[300px] rounded-lg indent-3 "
          />
        </div>

        <div dir="rtl" className="flex flex-col  p-3 md:flex-row gap-10 ">
          <div className="w-full md:w-6/12">
            <b>meta title </b>
            <input
              value={metaTitleAR}
              onChange={(e) => setMetaTitleAR(e.target.value)}
              placeholder="حقل إدخال الوصف meta title"
              className="w-full border-b-1.5 p-2 focus:outline-none"
            />
          </div>
          {/* <div className="bg-gray-400 w-[1px] h-full mx-4" /> */}
          <div className="w-full md:w-6/12">
            <b>URL </b>
            <input
              onChange={(e) => setSlugAR(e.target.value)}
              value={slugAR}
              placeholder="حقل إدخال URL"
              className="w-full border-b-1.5 p-2 focus:outline-none"
            />
          </div>
        </div>
        <div
          dir="rtl"
          className="border-1.5 border-gray-200 p-3 flex flex-col gap-3"
        >
          <b>عنوان المقال </b>
          <textarea
            value={metDescriptionAR}
            onChange={(e) => setMetDescriptionAR(e.target.value)}
            placeholder="حقل إدخال meta description "
            className="min-h-[100px] max-h-[150px] rounded-lg indent-3 w-full focus:outline-none"
          />
        </div>

        <div className=" flex flex-col justify-center  mt-10">
          <button
            onClick={handleBlogButton}
            className="text-3xl font-semibold text-white w-5/12 p-4 rounded-xl justify-center mx-auto  items-center px-10 bg-lightGreen"
          >
            {messageEventBlog ? "add blog..." : "add blog"}
          </button>
          {/* {blogCreated && (
            <div className="text-green-500 font-semibold text-lg pt-5 text-center">
              Blog added successfully!
            </div>
          )} */}
          {errorBlog && (
            <div className="text-red-500 font-semibold text-lg pt-5 text-center">
              Error adding blog: {errorBlog.message}
            </div>
          )}
          {/* <div className="text-red-500 font-semibold text-lg pt-5 text-center"></div> */}
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
