export const formatDate = (date) => {
  if (!date) return ""; // Handle empty input gracefully

  // Create a new Date object
  const newDate = new Date(date);

  // Format the date as YYYY/MM/DD
  const formattedDate = `${newDate.getFullYear()}/${
    newDate.getMonth() + 1
  }/${newDate.getDate()}`;

  // Format the time as HH:MM:SS
  const formattedTime = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;

  // Extract the year
  const year = newDate.getFullYear();

  // Calculate the number of days passed
  const currentDate = new Date();
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysPassed = Math.floor((currentDate - newDate) / millisecondsPerDay);

  return {
    formattedDate,
    formattedTime,
    year,
    daysPassed,
  };
};

// Example usage:
// const date = "2016-03-23T12:34:56"; // Added a specific time for demonstration
// const formattedData = formatDate(date);
