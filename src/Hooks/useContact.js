const useContact = ({ phoneNumber, message = "" }) => {
  const callLink = `tel:${phoneNumber}`;
  const whatsAppLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  return { callLink, whatsAppLink };
};
export default useContact;
