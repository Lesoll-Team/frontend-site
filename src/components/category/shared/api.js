import axios from "axios";

export async function saveSearchFilter({
  confirmSendMessage,
  messageConfirmed,
  slug,
}) {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/search/save-search?token=${userToken}`,
      {
        title: messageConfirmed,
        slug,
        sendEmail: confirmSendMessage,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function foundKeyword(keyword) {
  try {
    // const filteredKeywords = Object.fromEntries(
    //   Object.entries(keyword).filter(
    //     ([_, value]) => value != null && value !== "" && value !== 0
    //   )
    // );
    const queryString = Object.keys(keyword)
      .map((key) => `${key}=${encodeURIComponent(keyword[key])}`).join("&");

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/category/get-data?${queryString}&limit=30`
    );
    return response;
  } catch (error) {
    console.log("error", error.code);
  }
}

// const filteredKeywords = Object.fromEntries(
//   Object.entries(keyword).filter(
//     ([_, value]) =>
//       value != null && value !== "" && value !== " " && value !== 0
//   )
// );
// const queryString = Object.keys(filteredKeywords)
//   .map((key) => `${key}=${encodeURIComponent(filteredKeywords[key])}`)
//   .join("&");
// export const sendFilterSearch = ({ queryInput, filterInput }) => {
//   const filteredKeywords = Object.fromEntries(
//     Object.entries(queryInput).filter(
//       ([_, value]) => value != null && value !== "" && value !== 0
//     )
//   );

//   const filterInputAfter = Object.fromEntries(
//     Object.entries(filterInput).filter(
//       ([_, value]) => value != null && value !== "" && value !== 0
//     )
//   );

//   const pagesInput3 = Object.keys(filterInputAfter)
//     .map((key) => `${filterInputAfter[key]}`)
//     .join("/")
//     .toLowerCase();

//   const queryString = Object.keys(filteredKeywords)
//     .map((key) => `${key}=${encodeURIComponent(filteredKeywords[key])}`)
//     .join("&");

//   // console.log("filteredKeywords", filteredKeywords);
//   // console.log("filterInputAfter", filterInputAfter);
//   // console.log("pagesInput3", pagesInput3);
//   // console.log("queryString", queryString);

//   const newUrl = `/properties/${
//     pagesInput3 ? pagesInput3 + "/" : ""
//   }search?${queryString}`;
//   console.log("newUrl", newUrl);

//   history.pushState(null, null, newUrl);
// };
