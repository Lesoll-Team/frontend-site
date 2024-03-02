import Button from "@/Shared/ui/Button";
import { getActiveProp } from "@/redux-store/features/user/userPropertiesSlice";
import { propertyIsSold } from "@/utils/propertyAPI";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";

export default function ConfirmSold({ openBtn, propertyDetails }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userProfile.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const propertyOnSold = async () => {
    try {
      await propertyIsSold({ propertyId: propertyDetails?._id });
      dispatch(getActiveProp());
    } catch (error) {
      console.error("Error del prop:", error);
    }
  };

  return (
    <>
      <div onClick={onOpen} className="w-full p-0">
        {openBtn}
      </div>
      <Modal radius="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <div
                dir={language ? "rtl" : "ltr"}
                className="px-4 pt-10 pb-5 space-y-6"
              >
                <h3 className="text-xl font-bold">
                  {language
                    ? "هل انت متأكد من تغير حالة العقار الى مباع؟"
                    : "Are you sure the status of the property has changed to sold?"}
                </h3>
                <div className="flex justify-end items-center gap-3">
                  <Button
                    onClick={() => {
                      propertyOnSold();
                      onClose();
                    }}
                    type={"button"}
                    className={"w-fit px-5 py-2"}
                  >
                    {language ? "تأكيد" : "Confirm"}
                  </Button>
                  <Button
                    onClick={onClose}
                    type={"button"}
                    className={
                      "w-fit border-red-500 bg-white px-5 py-2 text-red-500"
                    }
                  >
                    {language ? "الغاء" : "Cancel"}
                  </Button>
                </div>
              </div>
              {/* <button onClick={onClose}>close</button> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
