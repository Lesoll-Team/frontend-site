export const initialFormData = {
  title: "", //"string"
  brand: "", //"string"
  model: "", //"string"
  usedSince: "", //"string"
  vehicleType: "", //"string" => enum: ['Hatchback', "Sedan", "SUV", "MUV", "Coupe", "Van", "Station wagon", "Caporale", "Pick Up"]
  carColor: null, //{ar: "string", en: "string"}
  transferCase: "Rear Wheel Drive", //"string" => enum: ['Front wheel drive', "Rear wheel drive", "Four by four"]
  kiloMeter: "", // "number"
  carType: "new", // "string" => enum: ['used', "new"]
  CC: "", //number
  bodyType: "",
  fuel: "", //"string" => enum: ['Gasoline', "Diesel", "Petrol", "Natural gas", "Liquid", "electric"]
  transmissionType: "Manual", //"string" => enum: ['Automatic', "Manual"]
  price: "", //"number"
  currencies: {
    Country: "Egypt",
    Currency_symbol: "£E",
    ISO_code: "EGP",
    title: {
      ar: "الجنيه المصري",
      en: "Egyptian pound",
    },
  }, // "string"

  description: "", // "string"
  service: [],
  address: null, // {governrate: "string",region:"string"}
  mainImage: null, // file
  multiImage: null, // array of files
  album: "",
  thumbnail: "",
  adType: "", // "string" => enum: ['free', "paid"]
  toPin: "", //"string" => enum: ['pinPaid', "pinHome", "pinSearch"]
  packId: "", // "string"
};
