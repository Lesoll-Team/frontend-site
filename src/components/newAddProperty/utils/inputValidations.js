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

const requiredInput = (language) => {
  return {
    value: true,
    message: language ? "مطلوب" : "required",
  };
};
export { validateIsNumber, mustBeGreaterValidation, requiredInput };
