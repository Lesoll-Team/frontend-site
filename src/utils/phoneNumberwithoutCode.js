export const phoneNumberwithoutCode = (phone, code) => {
  return phone.startsWith(code) ? phone.substring(code.length) : phone;
};
