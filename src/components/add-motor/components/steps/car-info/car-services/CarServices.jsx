import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import StepContainer from "../../../ui/StepContainer";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import ReactModal from "@/Shared/ui/ReactModal";
import styles from "../../../../styles/addMoto.module.css";
import SelectedServices from "./SelectedServices";
import FormInputContainer from "../../../ui/FormInputContainer";
const { customScrollbar } = styles;
const CarServices = () => {
  const { setValue, watch } = useAddMotorContext();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const motorServices = useSelector((state) => state.motorServices.services);

  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const toggleModal = () => {
    setServiceModalOpen((prev) => !prev);
  };
  const selectedServices = useMemo(() => watch("service"), [watch("service")]);
  const handleSelect = (service) => {
    const selected = selectedServices.includes(service);
    if (selected) {
      const filterdServices = selectedServices.filter(
        (item) => item !== service,
      );
      setValue("service", filterdServices);
    } else {
      setValue("service", [...selectedServices, service]);
    }
  };
  return (
    <StepContainer className={"min-h-fit py-8"}>
      <FormInputContainer title={language ? "مميزات السيارة" : "Car Features"}>
        {selectedServices.length > 0 ? (
          <div className=" space-y-2">
            <SelectedServices />
            <span
              type="button"
              onClick={toggleModal}
              className="underline cursor-pointer text-linkColor"
            >
              {language ? "إضافة المزيد" : "Add more"}
            </span>
          </div>
        ) : (
          <div className="flex gap-2">
            <p>
              {language
                ? "اضف المميزات الخاصة بسياراتك من قائمة المميزات"
                : "Add the features of your car from the list of features."}{" "}
              <span
                type="button"
                onClick={toggleModal}
                className="underline cursor-pointer text-linkColor"
              >
                {language ? "من هنا" : "Click here"}
              </span>
            </p>
          </div>
        )}
      </FormInputContainer>
      <ReactModal
        modalIsOpen={serviceModalOpen}
        setModalIsOpen={setServiceModalOpen}
      >
        <div className="md:min-w-[500px] max-w-[700px] py-2 space-y-3 h-fit max-h-[90dvh] ">
          <p className="font-bold">{language ? "المميزات" : "features"}</p>
          <div
            className={`flex flex-wrap gap-3 max-h-[700px] pb-3 overflow-auto ${customScrollbar}`}
          >
            {motorServices?.map((feat) => {
              const selected = selectedServices.includes(feat._id);
              return (
                <button
                  key={feat._id}
                  onClick={() => handleSelect(feat._id)}
                  className={`border py-2 rounded text-start px-4 ${selected && "bg-lightGreen border-lightGreen text-white"}`}
                >
                  {language ? feat.ar : feat?.en}
                </button>
              );
            })}
          </div>
        </div>
      </ReactModal>
    </StepContainer>
  );
};

export default CarServices;
