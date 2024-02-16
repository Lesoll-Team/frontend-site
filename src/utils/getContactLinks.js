export const getContactLinks = ({ phoneNumber, message = "" }) => {
  const removePlus = (phoneNumber) => {
    // Check if the phone number starts with "+"
    if (phoneNumber.startsWith("+")) {
      // Return the phone number without the "+"
      return phoneNumber.substring(1);
    } else {
      // If the phone number doesn't start with "+", return as is
      return phoneNumber;
    }
  };

  // Example usage:
  // let phoneNumber = "+201147085506";
  let phoneNumberWithoutPlus = removePlus(phoneNumber);
  console.log(phoneNumberWithoutPlus);
  const callLink = `tel:${removePlus(phoneNumberWithoutPlus)}`;
  const whatsAppLink = `https://api.whatsapp.com/send?phone=${phoneNumberWithoutPlus}&text=${encodeURIComponent(
    message
  )}`;
  return { callLink, whatsAppLink };
};
