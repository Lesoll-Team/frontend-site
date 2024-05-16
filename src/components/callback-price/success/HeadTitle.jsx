const HeadTitle = ({ language }) => {
  return (
    <>
      <h2 className="mb-3 text-center">
        {language
          ? "تم الاشتراك في الباقة بنجاح! "
          : " You have successfully subscribed to the package!"}
      </h2>
      <p className="text-gray-600 my-2 lg-text">
        {language
          ? "مبروك! 🎉 أنت الآن جزء من مجتمعنا الحصري للمشتركين. استعد لفتح عالم من المحتوى الرائع، والعروض الخاصة، والتجارب المخصصة لك فقط!"
          : "Congrats! 🎉 You are now part of our exclusive community of subscribers. Get ready to unlock a world of amazing content, special offers, and experiences just for you!"}
      </p>
    </>
  );
};
export default HeadTitle;
