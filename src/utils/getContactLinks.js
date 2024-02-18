export const getContactLinks = ({ phoneNumber, message = "" }) => {
  console.log(phoneNumber);
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
  let phoneNumberWithePlus = "+" + phoneNumberWithoutPlus;
  console.log(phoneNumberWithoutPlus);
  const callLink = `tel:${phoneNumberWithePlus}`;
  const whatsAppLink = `https://api.whatsapp.com/send?phone=${phoneNumberWithoutPlus}&text=${encodeURIComponent(
    message
  )}`;
  return { callLink, whatsAppLink };
};
