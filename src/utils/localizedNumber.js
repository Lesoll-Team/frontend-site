export const localizedNumber = (input) => {
  return parseInt(input).toLocaleString("en-US");
  // const number = Number(input);
  // if (isNaN(number)) {
  //   return "";
  // }
  // const formatter = new Intl.NumberFormat({
  //   style: "decimal",
  // });
  // return formatter.format(number);
};
