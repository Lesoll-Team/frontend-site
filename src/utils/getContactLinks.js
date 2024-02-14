export const getContactLinks = ({ phoneNumber, message = "" }) => {
  const callLink = `tel:${phoneNumber}`;
  const whatsAppLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  return { callLink, whatsAppLink };
};
