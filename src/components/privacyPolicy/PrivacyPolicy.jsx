const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-10 mb-10 min-h-[100vh]">
      <h2 className="text-4xl md:text-6xl font-semibold  text-lightGreen">
        Privacy Policy
      </h2>
      <div className="text-lg space-y-10 mt-10 px-3">
        <div className="space-y-5">
          <h3 className="text-2xl text-darkGray font-bold">
            Lesoll privacy Policy
          </h3>
          <p className="font-thin text-gray-500">
            Lesoll website is committed to protecting users' privacy. We share
            this privacy with users for their information. Lesoll ensures that
            users' information is protected, shared, processed, and used in a
            way that preserves their safety.
          </p>
        </div>
        <div className="space-y-5">
          <h3 className="text-2xl text-darkGray font-bold">
            Shared data and information
          </h3>
          <div className="space-y-4">
            <p>
              Users share some data with Lesoll while registering/signing in as
              follows:
            </p>
            <p>
              -When the user registers with his Google account: first name, last
              name, and email address are shared with Lesoll.
            </p>
            <p>
              -When the user registers with his Facebook account: the user
              shares his personal profile such as name, nickname, registered
              email address on his Facebook account, and Other data like age,
              and gender
            </p>
            <p>
              -When the user sign-up and create a new account on Lesoll website:
              the user can provide his personal data such as name, email
              address, and phone number.
            </p>
            <p>
              -When the user uses Lesoll chat service: The user has the choice
              to share the data with us.
            </p>
            <p>
              -Website information: we may receive some information because of
              users' visits and use of the website. This information may include
              the geographical location date and time of visiting Lesoll
              website, and also
            </p>
            include the length of time you spent on the website and your
            browsing history.
          </div>
          <p className="font-thin text-gray-500"></p>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
