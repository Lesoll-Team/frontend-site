// handle the cahnge of an input to pu commas like that 1,000,000 for more readability
const formatNumber = (value) => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const handleMonyInputChange = (e, name, setValue) => {
  // console.log(n);
  const value = e.target.value.replace(/,/g, "");
  if (!isNaN(value)) {
    setValue(name, formatNumber(value));
  } else {
    setValue(name, value);
  }
};

const convertToNumber = (value) => {
  if (typeof value === "string") {
    return value.replace(/,/g, "");
  }
  return +value;
};

const validateIsNumber = (value, language) => {
  const number = convertToNumber(value);

  return !isNaN(number) || (language ? " يجب ان يكون رقم" : "must be a number");
};
const mustBeGreaterValidation = (value, language) => {
  const number = convertToNumber(value);
  return (
    parseInt(number) >= 100 ||
    (language ? "لا يجب ان يقل عن 100 جنية" : " must be at least 100 egp")
  );
};

const spretedRegister = (name, register, setValue) => {
  const { onChange, ...rest } = register("name");
  const handleOnChange = (e) => {
    onChange(e);
    handleMonyInputChange(e, name, setValue);
  };
  return {
    handleOnChange,
    ...rest,
  };
};

export {
  handleMonyInputChange,
  convertToNumber,
  validateIsNumber,
  mustBeGreaterValidation,
  spretedRegister,
};
