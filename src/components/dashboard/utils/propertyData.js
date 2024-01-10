import axios from "axios";

export async function fetchAllProperty(userToken) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/property/getpending`,
      {
        headers: {
          token: userToken,
        },
      }
    );
    return response.data.result;
  } catch (error) {
    throw error.response.massage;
  }
}




























export async function fetchActiveProperty(
  rowsPerPage,
  page,
  filterUser,
  formattedStartDate,
  formattedEndDate
) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/search/searchprop?keywords=${filterUser}&start=${formattedStartDate}&end=${formattedEndDate}&limit=${rowsPerPage}&page=${page}`,
      {
        headers: {
          token: userToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.massage;
  }
}



// export async function fetchActiveProperty(rowsPerPage,page,userToken) {
//   try {
//     const response = await axios.get(
//       `${process.env.NEXT_PUBLIC_API_URL}/admin/search/searchprop?limit=${rowsPerPage}&page=${page}&token=${userToken}`);

//     return response.data;
//   } catch (error) {
//     throw error.response.massage;
//   }
// }

export async function deleteProperties(propertyID) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/property/delete/property/${propertyID}`,
      {
        headers: {
          token: userToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.massage;
  }
}



export async function deleteActiveProperty(propertyID) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/property/deleteforever/${propertyID}`,
      {
        headers: {
          token: userToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.massage;
  }
}

export async function acceptProperties(propertyID) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/property/accept/${propertyID}?token=${userToken}`
    );
    return response.data;
  } catch (error) {
    throw error.response.massage;
  }
}

// /api/admin/property/accept/:id

/* 
const columns = [

  {name: "ID", uid: "id", sortable: true},
  {name: "Title", uid: "title"},
  {name: "Created", uid: "createAt", sortable: true},
  {name: "Type", uid: "type"},
  // {name: "EMAIL", uid: "email"},
  {name: "ACTIONS", uid: "actions"},
];


const properties = [ 
  {
    id: 1,
    title: "الهرم جيزة",
    user: "Ahmed Gamal",
    type: "Company",
    createAt: "2022/8/5",
    email: "ahmed@lesoll.com",
    property: "https://www.propertyfinder.eg/property/97814202e37d9dcfcd88190be6d70c8d/856/550/MODE/153aaf/4081460-163c3o.webp?ctr=eg",
    userName: "@ahmed123",
  },
  {
    id: 2,
    title: "العبور",
    user: "samir abo nady",
    type: "Broker",
    createAt: "2023/8/11",
    email: "samirabonady@gmail.com",
    property: "https://www.propertyfinder.eg/property/491c7ff3beee22d151eddaa7970d2bd8/856/550/MODE/cdb9f3/4262837-49c8fo.webp?ctr=eg",
    userName: "@samirabonady1258",
  },
  {
    id: 3,
    title: "المهندسين",
    user: "Ahmed El-Nagare",
    type: "Developer",
    createAt: "2022/12/5",
    email: "AhmedEl-Nagare@yahoo.com",
    property: "https://www.propertyfinder.eg/property/580bf0feb0e72e6ebd5485348b6f9a4d/856/550/MODE/79f9a1/4196673-92f17o.webp?ctr=eg",
    userName: "@AhmedEl-Nagare157",
  },
  {
    id: 4,
    title: "المقطم",
    user: "Mohamed side",
    type: "Broker",
    createAt: "2023/4/28",
    email: "Mohamedside@gmail.com",
    property: "https://www.propertyfinder.eg/property/85d1cee8c7a7162475f1a6f6a21e341f/500/356/MODE/39ed8f/4222285-0c6a7o.webp?ctr=eg",
    userName: "@MohamedSide147",
  },
  {
    id: 5,
    title: "مادينتى",
    user: "Hassan Ahmed",
    type: "Broker",
    createAt: "2023/8/20",
    email: "Hassan@gmail.com",
    property: "https://www.propertyfinder.eg/property/6a3fb141bbde7b46d363876291b3612e/260/185/MODE/a2422a/3552028-1bc07o.webp?ctr=eg",
    userName: "@Hassan8972",
  },
 
];

export {columns, properties};
 */
