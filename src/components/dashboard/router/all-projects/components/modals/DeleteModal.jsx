import Button from "@/Shared/ui/Button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, getAllProjects } from "../../redux/allProjectsSlice";

export default function DeleteProject({ id }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const deleteProjectFun = async () => {
    console.log("adada");
    await dispatch(deleteProject(id));
    dispatch(getAllProjects());
  };
  return (
    <>
      <Button
        onClick={onOpen}
        className={"w-full bg-red-500 border-red-500 h-8"}
      >
        {language ? "حذف" : "Delete"}
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div
                  className="pb-2 pt-5 flex-col w-full flex gap-4"
                  dir={language ? "rtl" : "ltr"}
                >
                  <p className="font-bold">
                    {language
                      ? "هل انت متاكد من مسح المشروع؟"
                      : "Are you sure you want to delete project?"}
                  </p>
                  <div className="flex justify-end items-center max-w-[300px] gap-2 w-full">
                    <Button
                      onClick={onClose}
                      className={"bg-gray-300 border-gray-300 h-10"}
                    >
                      {" "}
                      {language ? "الغاء" : "Cancel"}
                    </Button>
                    <Button
                      onClick={deleteProjectFun}
                      className={"bg-red-500 border-red-500 h-10"}
                    >
                      {" "}
                      {language ? "حذف" : "Delete"}
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
