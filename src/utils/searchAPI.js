import axios from "axios";

export async function foundKeyword(keyword, page) {
  try {
    // console.log("keyword:::",keyword);
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/search/get?${keyword}&limit=6&page=${page || 1}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getPropertyFromSearch(InputKeywords, page) {
  try {
    // console.log("InputKeywords", InputKeywords);
    const filteredKeywords = Object.fromEntries(
      Object.entries(InputKeywords).filter(
        ([_, value]) => value != null && value !== "" && value !== 0
      )
    );


    // Convert filteredKeywords object to query string
    const queryString = Object.keys(filteredKeywords)
      .map((key) => `${key}=${encodeURIComponent(filteredKeywords[key])}`)
      .join("&");

    // console.log("queryString", queryString);

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/search/get?${queryString}&limit=30&page=${page}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}





// export async function getPropertyFromSearch(InputKeywords, page) {
//   try {
//     console.log(InputKeywords);
//     const response = await axios.get(
//       `${process.env.NEXT_PUBLIC_API_URL}/search/get?keywords=${InputKeywords?.keywords}&sort_by=${InputKeywords?.sort_by}&MortgagePrice=${InputKeywords?.MortgagePrice}&minArea=${InputKeywords?.minArea}&maxArea=${InputKeywords?.maxArea}&propType=${InputKeywords?.propType}&offer=${InputKeywords?.offer}&unitType=${InputKeywords?.unitType}&rooms=${InputKeywords?.rooms}&bathRooms=${InputKeywords?.bathRooms}&saleOption=${InputKeywords?.saleOption}&maxPrice=${InputKeywords?.maxPrice}&minPrice=${InputKeywords?.minPrice}&limit=30&page=${page}`
//     );
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// }
