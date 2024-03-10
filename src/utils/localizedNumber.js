export const localizedNumber = (input) => {
  const number = Number(input);
  if (isNaN(number)) {
    return "";
  }
  const formatter = new Intl.NumberFormat({
    style: "decimal",
  });
  return formatter.format(number);
};
