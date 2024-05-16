const HeadTitleFailed = ({ language }) => {
  return (
    <h2 className="mb-3 text-center">
      {language
        ? "حدث خطأ في عملية الدفع. يُرجى المحاولة مرة أخرى بعد التحقق من التالي: "
        : "An error occurred in the payment process. Please try again after checking the following:"}
    </h2>
  );
};
export default HeadTitleFailed;
