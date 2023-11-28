import React, {  useState } from "react";
import {
  createBlogs,
} from "@/redux-store/features/dashboard/blogDashboardSlice";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import { PlusIcon } from "../../icon/PlusIcon";
import { useDispatch, useSelector } from "react-redux";

function UserModule() {
  //{refreshProperty,setRefreshProperty,onBlogAdded}
  const dispatch=useDispatch()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const blogSending = useSelector((state) => state.BlogDashboard.blogSending);
  const errorBlog = useSelector((state) => state.BlogDashboard.errorBlog);
  const userInfo = useSelector((state) => state.GlobalState.userData);

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
  const handleBlogButton = async(e) => {
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
    formData.append("title", JSON.stringify(title) );
    formData.append("metaDescription",JSON.stringify(metaDescription));
    formData.append("description",JSON.stringify(description));
    formData.append("slug", JSON.stringify(slug));
    formData.append("metaTitle", JSON.stringify(metaTitle));
    dispatch(
      createBlogs({blogData:formData}) //, blogData: formData
    );
    

  };
  return (
    <div className="">
      <Button
        className="bg-foreground text-background"
        endContent={<PlusIcon />}
        size="sm"
        onPress={onOpen}
      >
        Add New Blog
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="2xl"
        size="full"
        className=" "
        classNames={{
          body: "",
          base: "py-24",
          header: "border-b-[1px] p-1",
          footer: " m-0 min-h-[50px] flex justify-center ",
        }}
      >
        <ModalContent className="model mt-96">
          {(onClose) => (
            <>
              <ModalHeader className="py-5 bg-default-200">
                Add Blog
              </ModalHeader>
              <form onSubmit={handleBlogButton}>
                <ModalBody className="overflow-y-auto h-[400px] px-5 bg-default-200 pb-10">
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
                      label=<b>Title English</b>
                      onChange={(e) => setTitleEN(e.target.value)}
                    />
                  </div>
                  <div className=" flex flex-col gap-5">
                    <b>Description Arabic</b>
                    <textarea
                      dir="rtl"
                      onChange={(e) => setDescriptionAR(e.target.value)}
                      placeholder="حقل إدخال الوصف "
                      className="min-h-[300px] rounded-lg indent-10 "
                    />
                    <b>Description English</b>
                    <textarea
                      onChange={(e) => setDescriptionEN(e.target.value)}
                      placeholder="Enter your description"
                      className="min-h-[300px] rounded-lg indent-10 "
                    />
                  </div>

                  <div className="flex gap-5 ">
                    <Input
                      color="primary"
                      onChange={(e) => setMetaTitleAR(e.target.value)}
                      label=<b>
                        Meta Title Arabic
                        <span className="text-lightOrange">
                          {metaTitleAR.length}
                        </span>
                      </b>
                      labelPlacement="outside"
                      placeholder="حقل إدخال الوصف "
                    />
                    <Input
                      color="primary"
                      onChange={(e) => setMetaTitleEN(e.target.value)}
                      label=<b>
                        Meta Title English
                        <span className="text-lightOrange">
                          {metaTitleEN.length}
                        </span>
                      </b>
                      labelPlacement="outside"
                      placeholder="حقل إدخال الوصف "
                    />
                  </div>
                  <div className=" flex gap-5">
                    <Textarea
                      color="primary"
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
                      onChange={(e) => setMetDescriptionEN(e.target.value)}
                      label=<b>
                        Meta Description English{" "}
                        <span className="text-lightOrange">
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
                      label=<b>
                        Slug Arabic{" "}
                        <span className="text-lightOrange">
                          {slugAR.length}
                        </span>
                      </b>
                      labelPlacement="outside"
                      placeholder="حقل إدخال الوصف "
                    />
                    <Input
                      color="primary"
                      onChange={(e) => setSlugEN(e.target.value)}
                      label=<b>
                        Slug English{" "}
                        <span className="text-lightOrange">
                          {slugEN.length}
                        </span>
                      </b>
                      labelPlacement="outside"
                      placeholder="Enter your description"
                    />
                  </div>
                </ModalBody>
                <ModalFooter className="bg-default-300">
                  <Button color="foreground" variant="light" onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    className="bg-[#6f4ef2] "
                    type="submit"
                    onPress={onClose}
                  >
                    Done
                  </Button>
                  {errorBlog && <div>{errorBlog.message}</div>}
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default UserModule;
