import { useSelector } from "react-redux";

const PrivacyPolicy = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="container mx-auto py-10 mb-10 min-h-[100vh]">
      <h2 className="text-4xl md:text-6xl font-semibold  text-lightGreen">
        {language ? "سياسة الخصوصية لموقع ليسول" : "Lesoll privacy policy "}
      </h2>
      <div className="text-lg space-y-10 mt-10 px-3">
        <div className="space-y-5">
          <p className="text-xl">
            {language
              ? "يتعهد ليسول بحماية خصوصية المستخدم والحفاظ عليها، ونشر سياسية الخصوصية وعرضها على المستخدم للعلم بها، كما يضمن ليسول حماية بيانات ومعلومات المستخدم ومشاركتها ومعالجتها واستخدامها على نحو يحافظ على سلامتها . "
              : "Lesoll website is committed to protecting users’ privacy. We share this privacy with users for their information. Lesoll ensures that users’ information is protected, shared, processed, and used in a way that preserves their safety. "}
          </p>
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-2xl text-darkGray font-bold">
              {language
                ? "البيانات والمعلومات التي نجمعها "
                : "Shared data and information"}
            </h3>
            <p className="">
              {language
                ? "قد تتضمن البيانات والمعلومات التي نجمعها عندما تقوم بالتسجيل لاستخدام خدماتنا ما يلي:"
                : "Users share some data with Lesoll while registering/signing in as follows: "}
            </p>
            <ul className="list-disc space-y-2">
              <li>
                {language
                  ? "في حالة التسجيل عبر استخدام حساب google نقوم بجمع الاسم والبريد الالكتروني الخاص بك"
                  : "When the user registers with his Google account: first name, last name, and email address are shared with Lesoll. "}
              </li>
              <li>
                {language
                  ? "وفي حالة التسجيل عبر حساب الفيس بوك نقوم بجمع المعلومات كما يظهر على حسابك الشخصي مثل الاسم والشهرة والبريد الإليكتروني المستخدم للدخول وكذلك بيانات الأخرى مثل العمر والجنس للمستخدم. "
                  : "When the user registers with his Facebook account: the user shares his personal profile such as name, nickname, registered email address on his Facebook account, and other data like age, and gender.   "}
              </li>
              <li>
                {language
                  ? "في حالة القيام بالاشتراك وانشاء حساب جديد على موقع ليسول، يمكنك اعطاء البيانات الشخصية مثل: الاسم، البريد الالكتروني، رقم التليفون الخاص بك."
                  : "When the user sign-up and create a new account on Lesoll website: the user can provide his personal data such as name, email address, and phone number.  "}
              </li>
              <li>
                {language
                  ? "في حالة استخدام خدمة الشات على الموقع نقوم بجمع البيانات والمعلومات التي تختار تقديمها. "
                  : "When the user uses Lesoll chat service: The user has the choice to share the data with us.  "}
              </li>
              <li>
                {language
                  ? "معلومات الموقع الالكتروني قد نتلقى على الموقع بعض المعلومات والبيانات في حالة زيارتك للموقع واستخدامه، وهذه المعلومات تتضمن الموقع الجغرافي وتاريخ ووقت زيارة موقع ليسول وتتضمن ايضا الفترة الزمنية التي تقضيها على الموقع والصفحات التي قمت بزيارتها. "
                  : "Website information: we may receive some information because of users’ visits and use of the website. This information may include the geographical location date and time of visiting Lesoll website, and also include the length of time you spent on the website and your browsing history.  "}
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl text-darkGray font-bold">
              {language
                ? "كيف نعالج معلوماتك وبياناتك الشخصية "
                : "Shared data and information"}
            </h3>
            <p>
              {" "}
              {language
                ? "يتعهد ليسول بحماية بياناتك ومعلوماتك كما يتعهد بمعالجتها بصورة قانونية وآمنة واستخدامها في الأغراض المحددة والشرعية فقط، وأن يمتنع عن استخدامها في أي غرض لا يتوافق مع هذه الأغراض. كذلك يتعهد ليسول بتحديث تلك البيانات والمعلومات عند الضرورة فقط. "
                : "Lesoll is committed to protecting your data and information legally and safely and to using it for legitimate and determined purposes only and abstaining from using it for any purpose not compatible with these purposes. Lesoll also is committed to updating data and information, if necessary, only. "}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl text-darkGray font-bold">
              {language
                ? "كيف نستخدم معلوماتك وبياناتك الشخصية "
                : "How do we use your personal information? "}
            </h3>
            <p className="">
              {language
                ? "قد نستخدم المعلومات والبيانات الشخصية الخاص بك للأغراض التالية: "
                : "We may use your personal information and IP address for the following purposes:  "}
            </p>
            <ul className="list-disc space-y-2">
              <li>
                {language
                  ? "لتحسين تجربتك الشخصية على الموقع. "
                  : "To improve the user experience on Lesoll website. "}
              </li>
              <li>
                {language
                  ? "لتقديم خدمة أفضل وتحسين خدماتنا عن طريق المعلومات التي نتلقاها من خلال بياناتك المقدمة او عن طريق الشكاوى المقدمة من خلال خدمة الدعم الخاصة بالموقع. "
                  : "To provide you with a better service and improve our services either through the information provided or the complaints we receive from the website's support service.  "}
              </li>
              <li>
                {language
                  ? "من الافضل تسجيل رقم هاتفك على الموقع لتسهيل التواصل بينك وبين مالك العقار من خلال خدمة الواتس اب او المكالمات الهاتفية. "
                  : "t’s better to register your phone number on Lesoll website to facilitate communication between you and the property owner either through WhatsApp service or phone calls.  "}
              </li>
              <li>
                {language
                  ? "لتقديم نتائج بحث أكثر ملائمة للمحتوى التي تبحث عنه، وايضا تقديم محتويات ذات صلة من خلال بحثك عنها في الموقع. "
                  : "To provide you with more appropriate search results and more relevant content for what you search for on the website.  "}
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl text-darkGray font-bold">
              {language
                ? "أمن معلوماتك وبياناتك"
                : "Security of your information "}
            </h3>
            <p>
              {language
                ? "يقر ويتعهد ليسول بالحفاظ على أمن بياناتك ومعلوماتك المستخدمة ومنع الوصول اليها في غير الغرض المصرح به، وكذلك يتعهد باتخاذ كافة الاحتياطات والإجراءات اللازمة لحماية تلك المعلومات والبيانات وعدم افشاءها، أو تغييرها، أو اتلافها، أو استخدامها بأي شكل غير قانوني. وفي حالة قيامك بإنشاء كلمة مرور للحساب الخاص بك على موقع ليسول يتحمل وحده مسؤولية الحفاظ على سريته. وفي جميع الأحوال يتعهد ليسول ببذل أقصى جهد وعناية في حماية وتأمين معلوماتك وبياناتك بصفة دائمة"
                : "Lesoll is committed to keeping your used personal information secure and preventing access to it other than for authorized purposes, as well as committed to taking all necessary precautions and procedures to protect your information and not to disclose, change, destroy or use them in any illegal way. And in the case of creating a password for your account on Lesoll website, it is solely responsible for keeping its confidentiality. And in all cases, Lesoll is committed to making the best effort in protecting and securing your information permanently. "}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl text-darkGray font-bold">
              {language ? "حقوق المستخدم " : "User rights "}
            </h3>
            <p>
              {language
                ? "يحق للمستخدم للوصول الى معلوماته وبياناته والحصول على نسخة منها وتحديثها. كذلك يحق للمستخدم حذف معلوماته وبياناته الشخصية الموجدة لدى موقع ليسول حال أنها غير ضرورية. كما يحق للمستخدم ابداء اعتراضه أو شكواه إلى المسؤولين في موقع ليسول ويتعهد ليسول بفحصها والعمل على حلها بشكل جاد وكامل وذلك حفاظا على رضا المستخدم."
                : "The user has the right to request access to his information and receive a copy of it and update it. Also, user can delete their personal information on Lesoll website if it is not necessary. The user also has the right to make complaints to officials on Lesoll website, and Lesoll is committed to completely solving it to keep our users' satisfaction."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
