import axios from "axios";

export async function getPropertyFromSearch(InputKeywords, page) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/search/get?keywords=${InputKeywords?.keywords}&propType=${InputKeywords?.propertyType}&offer=${InputKeywords?.saleOptions}&unitType=${InputKeywords?.unitType}&rooms=${InputKeywords?.countBedrooms}&bathRooms=${InputKeywords?.countBathrooms}&saleOption=${InputKeywords?.paymentMethod}&maxPrice=${InputKeywords?.toPrice}&minPrice=${InputKeywords?.fromPrice}&limit=6&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
