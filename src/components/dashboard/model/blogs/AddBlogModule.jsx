import React, { useEffect, useState } from "react";
import {
  createBlogs,
  // deleteBlog,
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
  const dispatch=useDispatch()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const blogSending = useSelector((state) => state.BlogDashboard.blogSending);
  const errorBlog = useSelector((state) => state.BlogDashboard.errorBlog);
  const userInfo = useSelector((state) => state.GlobalState.userData);

  const [titleAR, setTitleAR] = useState("");
  const [titleEN, setTitleEN] = useState("");
  const [userDataInfo, setUserDataInfo] = useState({});
  const [descriptionAR, setDescriptionAR] = useState("");
  const [descriptionEN, setDescriptionEN] = useState("");

  const [selectedImage, setImage] = useState(null);
  const [selectedImagePrev, setImagePrev] = useState(null);
    useEffect(() => {
    setUserDataInfo(userInfo);
  }, [dispatch, userInfo]);

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
  const handleBlogButton = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const metaDescription = {
      ar: descriptionAR,
      en: descriptionEN,
    };
    const description = {
      ar: descriptionAR,
      en: descriptionEN,
    };
    const title = {
      ar: titleAR,
      en: titleEN,
    };

    formData.append("img", selectedImage);
    formData.append("title", title );
    formData.append("metaDescription",metaDescription);
    formData.append("description",description);
    dispatch(
      createBlogs({ userToken: userDataInfo?.token, blogData: formData }) //, blogData: formData
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
        size="5xl"
        className=" bg-lightGreenHover  "
        classNames={{
          body: " ",
          base: "m-auto",
          header: "border-b-[1px] p-1",
        }}
      >
        <ModalContent className="model">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 w-[1000px]">
                Add Blog
              </ModalHeader>
              <form onSubmit={handleBlogButton}>

              <ModalBody>
                  <div className="">
                    <Input
                      type="file"
                      placeholder="set Image here"
                      labelPlacement="outside"
                      label="Image"
                      className="my-5"
                      onChange={handleImgChange}
                    />
                  </div>
                  <div>
                    <img style={{maxWidth:100,maxHeight:100}} src={selectedImagePrev} />
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
                      color="success"
                      type="text"
                      placeholder="set Title Arabic here"
                      labelPlacement="outside"
                      label=<b>Title Arabic</b>
                      onChange={(e) => setTitleAR(e.target.value)}
                    />
                    <Input
                      color="success"
                      type="text"
                      placeholder="set Title English here"
                      labelPlacement="outside"
                      label=<b>Title English</b>
                      onChange={(e) => setTitleEN(e.target.value)}
                    />
                  </div>
                  <div className=" flex gap-5">
                    <Textarea
                      color="success"
                      onChange={(e) => setDescriptionAR(e.target.value)}
                      label=<b>Description Arabic</b>
                      labelPlacement="outside"
                      placeholder="حقل إدخال الوصف "
                    />
                    <Textarea
                      color="success"
                      onChange={(e) => setDescriptionEN(e.target.value)}
                      label=<b>Description English</b>
                      labelPlacement="outside"
                      placeholder="Enter your description"
                    />
                  </div>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button className="bg-[#6f4ef2] " type="submit" onPress={onClose}>
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
