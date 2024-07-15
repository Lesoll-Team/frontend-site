import PropertyImages from "../imgs/PropertyImages";

const ImagesStep = ({ errors, register, setValue, watch, clearErrors }) => {
  return (
    <div>
      <PropertyImages
        clearErrors={clearErrors}
        watch={watch}
        setValue={setValue}
        errors={errors}
        register={register}
      />
    </div>
  );
};

export default ImagesStep;
