import SelectFeatures from "./SelectFeatures";
import DefaultDetails from "./DefaultDetails";
import LandDetails from "./LandDetails";
import BuildingDetails from "./BuildingDetails";
import useContact from "@/Hooks/useContact";
const AddPropDetails = ({ errors, register, setValue, watch, clearErrors }) => {
  const renderDetails = () => {
    if (watch("propType.value") === "Land") {
      return (
        <LandDetails
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
          clearErrors={clearErrors}
        />
      );
    } else if (watch("unitType.value") === "642449f07502ee416a864e95") {
      return (
        <BuildingDetails
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
          clearErrors={clearErrors}
        />
      );
    } else {
      return (
        <DefaultDetails
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
          clearErrors={clearErrors}
        />
      );
    }
  };
  return (
    <section className="space-y-4">
      {renderDetails()}
      {watch("propType.value") !== "Land" && (
        <SelectFeatures setValue={setValue} watch={watch} />
      )}{" "}
    </section>
  );
};
export default AddPropDetails;
