import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import { createBlogs } from "@/redux-store/features/dashboard/blogDashboardSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Textarea } from "@nextui-org/react";
import { useRouter } from "next/router";
import Head from "next/head";
// createBlogs
const AddBlog = () => {
  const router = useRouter();
  const errorBlog = useSelector((state) => state.BlogDashboard.errorBlog);
  const messageEventBlog = useSelector((state) => state.BlogDashboard.messageEventBlog);
  const dispatch = useDispatch();
  const [titleAR, setTitleAR] = useState("");
  const [titleEN, setTitleEN] = useState("");

  const [metaTitleAR, setMetaTitleAR] = useState("");
  const [metaTitleEN, setMetaTitleEN] = useState("");

  const [slugAR, setSlugAR] = useState("");
  const [slugEN, setSlugEN] = useState("");

  const [descriptionAR, setDescriptionAR] = useState(``);
  const [descriptionEN, setDescriptionEN] = useState(``);

  const [metDescriptionAR, setMetDescriptionAR] = useState("");
  const [metDescriptionEN, setMetDescriptionEN] = useState("");

  const [selectedImage, setImage] = useState(null);
  const [selectedImagePrev, setImagePrev] = useState(null);
  const [blogCreated, setBlogCreated] = useState(false);

  const handleImgChange = (e) => {
    const newImage = e.target.files[0];
    setImage(newImage);

    if (newImage) {
      if (typeof window !== "undefined") {
        setImagePrev(window.URL.createObjectURL(newImage));
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
      en: metDescriptionEN,
    };
    const description = {
      ar: descriptionAR,
      en: descriptionEN,
    };
    const title = {
      ar: titleAR,
      en: titleEN,
    };
    const slug = {
      ar: slugAR,
      en: slugEN,
    };
    const metaTitle = {
      ar: metaTitleAR,
      en: metaTitleEN,
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
     }
   });
  };

  useEffect(() => {
    setTitleAR("");
    setTitleEN("");
    setMetaTitleAR("");
    setMetaTitleEN("");
    setSlugAR("");
    setSlugEN("");
    setDescriptionAR(``);
    setDescriptionEN(``);
    setMetDescriptionAR("");
    setMetDescriptionEN("");
    setImage(null);
    setImagePrev(null);
  }, [router]);

  return (
    <div className="min-h-[90dvh] flex" dir="ltr">
      <Head>
        <title>Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="bg-gray-100 shadow-md shadow-gray-500  sticky top-0">
        <Sidebar />
      </div>
      <div className="w-full p-10 overflow-x-auto overflow-y-hidden">
        <div className="">
          <Input
            name="image-set"
            type="file"
            placeholder="set Image here"
            labelPlacement="outside"
            label="Image"
            className="my-5"
            onChange={handleImgChange}
          />
        </div>
        <div>
          <img
            style={{ maxWidth: 100, maxHeight: 100 }}
            src={selectedImagePrev}
          />
          <button
            type="button"
            onClick={handleDeleteImage}
            className="ml-2 text-red-500"
          >
            Delete
          </button>
        </div>
        <div className=" my-5 gap-5 flex">
          <Input
            name="title-ar"
            color="default"
            value={titleAR}
            type="text"
            placeholder="إدخال عنوان المقال باللغة العربية هنا ..."
            labelPlacement="outside"
            dir="rtl"
            label=<b>Title Arabic</b>
            onChange={(e) => setTitleAR(e.target.value)}
          />
          <Input
            color="default"
            type="text"
            value={titleEN}
            name="title-en"
            placeholder="set Title English here"
            labelPlacement="outside"
            label=<b>Title English</b>
            onChange={(e) => setTitleEN(e.target.value)}
          />
        </div>
        <div className=" flex flex-col gap-5">
          <b>Description Arabic</b>
          <textarea
            dir="rtl"
            value={descriptionAR}
            onChange={(e) => setDescriptionAR(e.target.value)}
            placeholder="حقل إدخال الوصف "
            className="min-h-[300px] rounded-lg indent-10 border-4 border-gray-200"
          />
          <b>Description English</b>
          <textarea
            value={descriptionEN}
            onChange={(e) => setDescriptionEN(e.target.value)}
            placeholder="Enter your description"
            className="min-h-[300px] border-4 border-gray-200  rounded-lg indent-10 "
          />
        </div>

        <div className="flex gap-5 ">
          <Input
            color="primary"
            value={metaTitleAR}
            onChange={(e) => setMetaTitleAR(e.target.value)}
            label=<b>
              Meta Title Arabic
              <span className="text-lightOrange">{metaTitleAR.length}</span>
            </b>
            labelPlacement="outside"
            placeholder="حقل إدخال الوصف "
          />
          <Input
            color="primary"
            value={metaTitleEN}
            onChange={(e) => setMetaTitleEN(e.target.value)}
            label=<b>
              Meta Title English
              <span className="text-lightOrange">{metaTitleEN.length}</span>
            </b>
            labelPlacement="outside"
            placeholder="حقل إدخال الوصف "
          />
        </div>
        <div className=" flex gap-5">
          <Textarea
            color="primary"
            value={metDescriptionAR}
            onChange={(e) => setMetDescriptionAR(e.target.value)}
            label=<b>
              Meta Description Arabic{" "}
              <span className="text-lightOrange">
                {metDescriptionAR.length}
              </span>
            </b>
            labelPlacement="outside"
            placeholder="حقل إدخال الوصف "
          />
          <Textarea
            color="primary"
            value={metDescriptionEN}
            onChange={(e) => setMetDescriptionEN(e.target.value)}
            label=<b>
              Meta Description English{" "}
              <span className="text-lightOrange ">
                {metDescriptionEN.length}
              </span>
            </b>
            labelPlacement="outside"
            placeholder="Enter your description"
          />
        </div>
        <div className=" flex gap-5">
          <Input
            color="primary"
            onChange={(e) => setSlugAR(e.target.value)}
            value={slugAR}
            label=<b>
              Slug Arabic{" "}
              <span className="text-lightOrange">{slugAR.length}</span>
            </b>
            labelPlacement="outside"
            placeholder="حقل إدخال الوصف "
          />
          <Input
            color="primary"
            onChange={(e) => setSlugEN(e.target.value)}
            value={slugEN}
            label=<b>
              Slug English{" "}
              <span className="text-lightOrange">{slugEN.length}</span>
            </b>
            labelPlacement="outside"
            placeholder="Enter your description"
          />
        </div>
        <div className=" flex flex-col justify-center  mt-10">
          <button
            onClick={handleBlogButton}
            className="text-3xl font-semibold text-white w-5/12 p-4 rounded-xl justify-center mx-auto  items-center px-10 bg-lightGreen"
          >
            {messageEventBlog ? "add blog..." : "add blog"}
          </button>
          {blogCreated && (
            <div className="text-green-500 font-semibold text-lg pt-5 text-center">
              Blog added successfully!
            </div>
          )}
          {errorBlog && (
            <div className="text-red-500 font-semibold text-lg pt-5 text-center">
              Error adding blog: {errorBlog.message}
            </div>
          )}
          <div className="text-red-500 font-semibold text-lg pt-5 text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
