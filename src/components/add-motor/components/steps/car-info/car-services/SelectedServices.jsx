import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import { useMemo } from "react";
import { FaXmark } from "react-icons/fa6";
import { useSelector } from "react-redux";

const SelectedServices = () => {
  const { setValue, watch } = useAddMotorContext();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const motorServices = useSelector((state) => state.motorServices.services);

  const selectedServices = useMemo(() => watch("service"), [watch("service")]);
  const handleDelete = (service) => {
    const filterdServices = selectedServices.filter((item) => item !== service);
    setValue("service", filterdServices);
  };
  const servicesToRender = motorServices.filter((item) =>
    selectedServices.includes(item._id),
  );
  return (
    <div className="flex flex-wrap gap-2">
      {servicesToRender.map((item) => {
        return (
          <div
            key={item._id}
            className={`border py-2 rounded flex text-start px-3 gap-2 bg-lightGreen border-lightGreen text-white`}
          >
            {language ? item.ar : item?.en}

            <button type="button" onClick={() => handleDelete(item._id)}>
              <FaXmark className="hover:text-red-500" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedServices;
