export const formatDate = (date) => {
  // Create a new Date object
  const newDate = new Date(date);

  // Format the date as YYYY/MM/DD
  const formattedDate = `${newDate.getFullYear()}/${
    newDate.getMonth() + 1
  }/${newDate.getDate()}`;

  // Extract the year
  const year = newDate.getFullYear();

  // Calculate the number of days passed
  const currentDate = new Date();
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysPassed = Math.floor((currentDate - newDate) / millisecondsPerDay);
  if (date) {
    return {
      formattedDate,
      year,
      daysPassed,
    };
  } else {
    return "";
  }
};

// // Example usage:
// const date = "2016-03-23";
// const formattedData = formatDate(date);
