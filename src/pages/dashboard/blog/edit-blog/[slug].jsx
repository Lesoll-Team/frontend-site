import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import { editBlog } from "@/redux-store/features/dashboard/blogDashboardSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";
// editBlog
const EditBlog = ({ singleBlog }) => {
  const router = useRouter();

  const errorBlog = useSelector((state) => state.BlogDashboard.errorBlog);
  const messageEventBlog = useSelector(
    (state) => state.BlogDashboard.messageEventBlog
  );
  const dispatch = useDispatch();
  // const [messageAddBlog, setMessageAddBlog] = useState("");
  const [titleAR, setTitleAR] = useState(singleBlog?.getBlogs.title.ar || "");
  const [titleEN, setTitleEN] = useState(singleBlog?.getBlogs.title.en||"");

  const [metaTitleAR, setMetaTitleAR] = useState(singleBlog?.getBlogs.metaTitle.ar||"");
  const [metaTitleEN, setMetaTitleEN] = useState(singleBlog?.getBlogs.metaTitle.en||"");

  const [slugAR, setSlugAR] = useState(singleBlog?.getBlogs.slug.ar||"");
  const [slugEN, setSlugEN] = useState(singleBlog?.getBlogs.slug.en||"");

  const [descriptionAR, setDescriptionAR] = useState(singleBlog?.getBlogs.description.ar||"");
  const [descriptionEN, setDescriptionEN] = useState(singleBlog?.getBlogs.description.en||"");

  const [metDescriptionAR, setMetDescriptionAR] = useState(singleBlog?.getBlogs.metaDescription.ar||"");
  const [metDescriptionEN, setMetDescriptionEN] = useState(singleBlog?.getBlogs.metaDescription.en||"");

  const [selectedImage, setImage] = useState(singleBlog?.getBlogs.BlogImage||null);
  const [selectedImagePrev, setImagePrev] = useState(singleBlog?.getBlogs.BlogImage||null);

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
    // const data =
     dispatch(
      editBlog({ blogData: formData, blogID: singleBlog.getBlogs._id }) //, blogData: formData
    );
    router.push(`/blog/${slug.ar}`);

    //  setMessageAddBlog(data);
  };
    //  console.log(singleBlog.getBlogs._id);

  return (
    <div className="min-h-[90dvh] flex" dir="ltr">
      <div className=" bg-lightGreenHover sticky top-0 ">
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
            type="text"
            value={titleAR}
            placeholder="إدخال عنوان المقال باللغة العربية هنا ..."
            labelPlacement="outside"
            dir="rtl"
            label=<b>Title Arabic</b>
            onChange={(e) => setTitleAR(e.target.value)}
          />
          <Input
            color="default"
            type="text"
            name="title-en"
            placeholder="set Title English here"
            labelPlacement="outside"
            value={titleEN}
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
            value={slugAR}
            onChange={(e) => setSlugAR(e.target.value)}
            label=<b>
              Slug Arabic{" "}
              <span className="text-lightOrange">{slugAR.length}</span>
            </b>
            labelPlacement="outside"
            placeholder="حقل إدخال الوصف "
          />
          <Input
            color="primary"
            value={slugEN}
            onChange={(e) => setSlugEN(e.target.value)}
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
            Edit Blog
          </button>
          <p className="text-2xl text-center mt-5">
            {messageEventBlog ? (
              <span className="text-red-600  font-semibold ">
                لم يتم تعديل المقال
              </span>
            ) : null}
          </p>
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
    // revalidate:1,
  };
}