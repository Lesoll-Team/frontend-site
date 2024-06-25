const getLangBoolean = () => {
  let languageCode;
  if (typeof window !== "undefined") {
    languageCode = window.location.pathname.split("/")[1];
  }
  console.log("languageCode: " + languageCode);
  switch (languageCode) {
    case "ar":
      return true;
    case "en":
      return false;
    default:
      return true;
  }
};

export { getLangBoolean };
