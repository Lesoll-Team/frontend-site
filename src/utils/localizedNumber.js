export const localizedNumber = (input) => {
  const price = parseInt(input).toLocaleString("en-US");
  return price;
  // const number = Number(input);
  // if (isNaN(number)) {
  //   return "";
  // }
  // const formatter = new Intl.NumberFormat({
  //   style: "decimal",
  // });
  // return formatter.format(number);
};
