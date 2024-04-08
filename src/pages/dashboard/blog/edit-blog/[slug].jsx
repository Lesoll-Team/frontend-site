import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import { editBlog } from "@/redux-store/features/dashboard/blogDashboardSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Head from "next/head";
import BlogAdded from "@/components/dashboard/model/BlogAdded";
import { getAllCategoryBlogs } from "@/utils/dashboardApi/blogDashboardAPI";
const EditBlog = ({ singleBlog }) => {
  const [blogCreated, setBlogCreated] = useState(false);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const errorBlog = useSelector((state) => state.BlogDashboard.errorBlog);
  const messageEventBlog = useSelector(
    (state) => state.BlogDashboard.messageEventBlog
  );
  const [blogCategoryID, setBlogCategoryID] = useState(
    singleBlog?.getBlogs.category || ""
  );
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const [titleAR, setTitleAR] = useState(singleBlog?.getBlogs.title.ar || "");

  const [metaTitleAR, setMetaTitleAR] = useState(
    singleBlog?.getBlogs.metaTitle.ar || ""
  );

  const [slugAR, setSlugAR] = useState(singleBlog?.getBlogs.slug.ar || "");

  const [descriptionAR, setDescriptionAR] = useState(
    singleBlog?.getBlogs.description.ar || ""
  );

  const [metDescriptionAR, setMetDescriptionAR] = useState(
    singleBlog?.getBlogs.metaDescription.ar || ""
  );

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getAllCategoryBlogs(); // Call your API function
        setCategories(data.getAll);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  const [selectedImage, setImage] = useState(
    singleBlog?.getBlogs.BlogImage || null
  );
  const [selectedImagePrev, setImagePrev] = useState(
    singleBlog?.getBlogs.BlogImage || null
  );

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
    formData.append("category", blogCategoryID);
    dispatch(
      editBlog({ blogData: formData, blogID: singleBlog.getBlogs._id }) //, blogData: formData
    ).then((action) => {
      if (editBlog.fulfilled.match(action)) {
        setBlogCreated(true);
      }
    });
  };
  if (blogCreated) {
    return (
      <BlogAdded
        slug={slugAR}
        message={
          language
            ? "تم تعديل  المقال بنجاح"
            : "The blog has been edited successfully"
        }
        setBlogCreated={setBlogCreated}
      />
    );
  }
  return (
    <div className="min-h-[90dvh] flex" dir="ltr">
      <Head>
        <title>Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className=" sticky top-0">
        <Sidebar />
      </div>
      <div className="w-full p-10 overflow-x-auto overflow-y-hidden">
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
          className="w-full border-1.5 border-gray-200 p-3 gap-5 flex md:flex-row flex-col"
        >
          <div className="flex  flex-col gap-5 md:w-6/12 w-full">
            <b>عنوان المقال </b>

            <input
              name="title-ar"
              className="indent-3 w-full h-full flex  focus:outline-none"
              value={titleAR}
              type="text"
              placeholder="إدخال عنوان المقال..."
              onChange={(e) => setTitleAR(e.target.value)}
            />
          </div>
          <div className="flex  flex-col gap-5 md:w-4/12 w-full">
            <b>فئة المقال </b>
            <select
              value={blogCategoryID}
              onChange={(e) => setBlogCategoryID(e.target.value)}
            >
              <option value="">اختر تصنيف</option>
              {categories?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.categoryNameAr}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div
          dir="rtl"
          className=" flex flex-col border-gray-200 border-1.5  p-3 gap-5"
        >
          <b>وصف المقال </b>
          <textarea
            value={descriptionAR}
            onChange={(e) => setDescriptionAR(e.target.value)}
            placeholder="حقل إدخال الوصف "
            className="min-h-[300px] rounded-lg indent-3 "
          />
        </div>

        <div dir="rtl" className="flex flex-col  p-3 md:flex-row gap-10 ">
          <div className="w-full md:w-6/12">
            <b>meta title {metaTitleAR.length}</b>
            <input
              value={metaTitleAR}
              onChange={(e) => setMetaTitleAR(e.target.value)}
              placeholder="حقل إدخال الوصف meta title"
              className="w-full border-b-1.5 p-2 focus:outline-none"
            />
          </div>
          <div className="w-full md:w-6/12">
            <b>URL {slugAR.length}</b>
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
          <b>meta description {metDescriptionAR.length}</b>
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
            {messageEventBlog ? "Edit Blog..." : "Edit Blog"}
          </button>
          {errorBlog && (
            <div className="text-red-500 font-semibold text-lg pt-5 text-center">
              Error adding blog: {errorBlog.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
export async function getServerSideProps(context) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/blog/singleblogs/${context.query.slug}`
  );
  const data = await res.data;
  return {
    props: { singleBlog: data },
  };
}
