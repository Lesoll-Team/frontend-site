import axios from "axios";

export async function getPropertyFromSearch(InputKeywords, page) {
  try {
  // console.log("API",InputKeywords);
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/search/get?keywords=${InputKeywords?.keywords}&sortType=${InputKeywords?.sortProp}&MortgagePrice=${InputKeywords?.propertyFinance}&minArea=${InputKeywords?.fromArea}&maxArea=${InputKeywords?.toArea}&propType=${InputKeywords?.propertyType}&offer=${InputKeywords?.saleOptions}&unitType=${InputKeywords?.unitType}&rooms=${InputKeywords?.countBedrooms}&bathRooms=${InputKeywords?.countBathrooms}&saleOption=${InputKeywords?.paymentMethod}&maxPrice=${InputKeywords?.toPrice}&minPrice=${InputKeywords?.fromPrice}&limit=30&page=${page}`
    );
    //&isFurnished=${InputKeywords.isFurnished}
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

