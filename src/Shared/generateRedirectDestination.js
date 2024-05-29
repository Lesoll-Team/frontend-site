export function generateRedirectDestination() {
  const offer = ["sale", "rent"];
  const type = ["residential", "commercial"];
  const residentialOptions = [
    "apartment",
    "duplex,apartment_with_garden",
    "duplex",
    "hotel_apartment",
    "villa",
  ];
  const commercialOptions = [
    "clinic",
    "shop",
    "office",
    "warehouse",
    "restaurant",
  ];

  const offerIndex = Math.floor(Math.random() * offer.length);
  const typeIndex = Math.floor(Math.random() * type.length);

  let destination;

  switch (type[typeIndex]) {
    case "residential":
      const residentialIndex = Math.floor(
        Math.random() * residentialOptions.length,
      );
      destination = `/properties/${offer[offerIndex]}/residential/${residentialOptions[residentialIndex]}/search?page=1`;
      break;
    case "commercial":
      const commercialIndex = Math.floor(
        Math.random() * commercialOptions.length,
      );
      destination = `/properties/${offer[offerIndex]}/commercial/${commercialOptions[commercialIndex]}/search?page=1`;
      break;
    default:
      destination = `/properties/${offer[offerIndex]}/${type[typeIndex]}/search?page=1`;
  }

  return destination;
}
export const filterSlugURL = (url) => {
  const new_url = url
    .split(" ")
    .join("")
    .split("%")
    .join("")
    .split("#")
    .join("")
    .split("/")
    .join("");
  return new_url;
};
