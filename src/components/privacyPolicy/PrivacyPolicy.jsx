import { useSelector } from "react-redux";

const PrivacyPolicy = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="md:container md:mx-auto mx-[20px] py-10 mb-10 min-h-[100vh] space-y-6">
      <h1 className="    ">
        {language ? "سياسة الخصوصية لموقع ليسول" : "Lesoll privacy policy "}
      </h1>
      <div className="space-y-4  ">
        <div className="space-y-5">
          <p className="">
            بيانات التسجيل وغيرها من المعلومات ذات الصلة بك تخضع لسياسة الخصوصية
            التي يتبعها ليسول ، كما يتعهد ليسول بحماية خصوصية المستخدم والحفاظ
            عليها، ونشر سياسية الخصوصية وعرضها على المستخدم للعلم بها، كما يضمن
            ليسول حماية بيانات ومعلومات المستخدم ومشاركتها ومعالجتها واستخدامها
            على نحو يحافظ على سلامتها .
          </p>
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <h2 className="  ">
              {language
                ? "البيانات والمعلومات التي نجمعها "
                : "Shared data and information"}
            </h2>
            <h3 className="">
              {language
                ? "قد تتضمن البيانات والمعلومات التي نجمعها عندما تقوم بالتسجيل لاستخدام خدماتنا ما يلي:"
                : "Users share some data with Lesoll while registering/signing in as follows: "}
            </h3>
            <ul className="list-disc  mx-5 space-y-2">
              <li>
                {language
                  ? "في حالة التسجيل عبر استخدام حساب google نقوم بجمع الاسم والبريد الالكتروني الخاص بك"
                  : "When the user registers with his Google account: first name, last name, and email address are shared with Lesoll. "}
              </li>
              {/* <li>
                {language
                  ? "وفي حالة التسجيل عبر حساب الفيس بوك نقوم بجمع المعلومات كما يظهر على حسابك الشخصي مثل الاسم والشهرة والبريد الإليكتروني المستخدم للدخول وكذلك بيانات الأخرى مثل العمر والجنس للمستخدم. "
                  : "When the user registers with his Facebook account: the user shares his personal profile such as name, nickname, registered email address on his Facebook account, and other data like age, and gender.   "}
              </li> */}
              <li>
                {language
                  ? "في حالة القيام بالاشتراك وانشاء حساب جديد على موقع ليسول، يمكنك اعطاء البيانات الشخصية مثل: الاسم، البريد الالكتروني، رقم التليفون الخاص بك."
                  : "When the user sign-up and create a new account on Lesoll website: the user can provide his personal data such as name, email address, and phone number.  "}
              </li>
              {/* <li>
                {language
                  ? "في حالة استخدام خدمة الشات على الموقع نقوم بجمع البيانات والمعلومات التي تختار تقديمها. "
                  : "When the user uses Lesoll chat service: The user has the choice to share the data with us.  "}
              </li> */}
              <li>
                {language
                  ? "معلومات الموقع الالكتروني قد نتلقى على الموقع بعض المعلومات والبيانات في حالة زيارتك للموقع واستخدامه، وهذه المعلومات تتضمن الموقع الجغرافي وتاريخ ووقت زيارة موقع ليسول وتتضمن ايضا الفترة الزمنية التي تقضيها على الموقع والصفحات التي قمت بزيارتها. "
                  : "Website information: we may receive some information because of users’ visits and use of the website. This information may include the geographical location date and time of visiting Lesoll website, and also include the length of time you spent on the website and your browsing history.  "}
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="  ">
              {language
                ? "كيف نعالج معلوماتك وبياناتك الشخصية "
                : "Shared data and information"}
            </h2>
            <p>
              {" "}
              {language
                ? "يتعهد ليسول بحماية بياناتك ومعلوماتك كما يتعهد بمعالجتها بصورة قانونية وآمنة واستخدامها في الأغراض المحددة والشرعية فقط، وأن يمتنع عن استخدامها في أي غرض لا يتوافق مع هذه الأغراض. كذلك يتعهد ليسول بتحديث تلك البيانات والمعلومات عند الضرورة فقط. "
                : "Lesoll is committed to protecting your data and information legally and safely and to using it for legitimate and determined purposes only and abstaining from using it for any purpose not compatible with these purposes. Lesoll also is committed to updating data and information, if necessary, only. "}
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="  ">
              {language
                ? "كيف نستخدم معلوماتك وبياناتك الشخصية "
                : "How do we use your personal information? "}
            </h2>
            <p className="">
              {language
                ? "قد نستخدم المعلومات و البيانات الشخصية الخاصة بك وعنوان بروتكول الانترنت (IP) للأغراض التاليه:"
                : "We may use your personal information and IP address for the following purposes:   "}
            </p>
            <ul className="list-disc  mx-5 space-y-2">
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
            <h2>{language ? "سلوك العضوية" : "Membership behavior"}</h2>
            <h3>
              {language
                ? "بالنسبة لاستخدامك لموقع ليسول، فإنك تلتزم وتضمن عدم القيام بأي أفعال تتسبب في إلحاق ضرر بموقع ليسول أو عملائه. ويشمل ذلك، على سبيل المثال لا الحصر: "
                : "In connection with your use of the Lesoll Site, you undertake and warrant that you will not undertake any actions that cause harm to the Lesoll Site or its customers. This includes, but is not limited to:"}
            </h3>
            <ul className="list-disc  mx-5">
              <li>
                {language
                  ? " تقييد أو منع مستخدم آخر من استخدام الموقع والاستفادة من محتوياته. "
                  : "Restrict or prevent another user from using the website and benefiting from its contents."}
              </li>
              <li>
                {language
                  ? "مخالفة القانون أو ارتكاب سلوك تهديد، عدوان، إساءة، غير أخلاقي، مسيء للسمعة، أو مسيء، أو أي سلوك ينتهك القانون."
                  : "Violate the law or engage in threatening, aggressive, abusive, immoral, defamatory, or abusive behavior, or any behavior that violates the law."}
              </li>
              <li>
                {language
                  ? "ارتكاب سلوك إجرامي أو تشجيعه، مما يؤدي إلى المسؤولية المدنية أو أي نوع من أنواع انتهاكات القانون."
                  : "Committing or encouraging criminal conduct, giving rise to civil liability or any type of violation of law."}
              </li>
              <li>
                {language
                  ? " انتهاك حقوق أطراف ثالثة، أو السرقة، أو انتهاك حقوق الملكية الفكرية، بما في ذلك حقوق النشر، والعلامات التجارية، وبراءات الاختراع، والحقوق الخاصة أو العامة."
                  : "Violation of the rights of third parties, theft, or infringement of intellectual property rights, including copyrights, trademarks, patents, private or public rights."}
              </li>
              <li>
                {language
                  ? "رسال مواد تحتوي على برمجيات ضارة أو أي عناصر ضارة أخرى إلى الموقع. "
                  : "Submitting material that contains malware or any other harmful elements to the Site."}
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="  ">
              {language
                ? "البيانات المالية وبيانات الدفع والائتمان: "
                : "Financial Data and Payment Information:"}
            </h2>
            <p>
              {language
                ? "قد نجمع بيانات الدفع التي يقوم المستخدم بإدخالها عند الاشتراك في الخدمات مدفوعة الاجر. وقد يحتوي ذلك على رقم وسيلة الدفع الخاصة بالمستخدم (على سبيل المثال: بطاقة الائتمان وبطاقة الخصم) واسمه وعنوان إرسال الفواتير ورمز الأمان لأداة الدفع الخاصة به (على سبيل المثال: رمز التحقق من البطاقة)، وقد نقوم بجمع المعلومات والبيانات المتعلقة بالدفع وسجل المعاملات ومعلومات وبيانات الفواتير."
                : "We may gather payment data provided by users when subscribing to our paid services. This information may include the user's payment method, such as (credit card or debit card details), their name, billing address, and the security code associated with their payment method. Additionally, we may collect transaction history and invoice details. "}
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="  ">{language ? "التعويضات" : "Compensation"}</h2>
            <p>
              {language
                ? "بموجب هذه الاتفاقية يحق لموقع ليسول اتخاذ كافة الاجراءات القانونية والقضائية للحصول على التعويض اللازم نتيجة اي اضرار قد تلحق به او بالمسئولين عنه او مستخدميه . "
                : "According to this agreement, the Lesoll website has the right to take all legal and judicial measures to obtain the necessary compensation as a result of any damages that may befall it, its officials, or its users."}
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="  ">
              {language
                ? "أمن معلوماتك وبياناتك"
                : "Security of your information "}
            </h2>
            <p>
              {language
                ? "يقر ويتعهد ليسول بالحفاظ على أمن بياناتك ومعلوماتك المستخدمة ومنع الوصول اليها في غير الغرض المصرح به، وكذلك يتعهد باتخاذ كافة الاحتياطات والإجراءات اللازمة لحماية تلك المعلومات والبيانات وعدم افشاءها، أو تغييرها، أو اتلافها، أو استخدامها بأي شكل غير قانوني. وفي حالة قيامك بإنشاء كلمة مرور للحساب الخاص بك على موقع ليسول يتحمل وحده مسؤولية الحفاظ على سريته. وفي جميع الأحوال يتعهد ليسول ببذل أقصى جهد وعناية في حماية وتأمين معلوماتك وبياناتك بصفة دائمة."
                : "Lesoll is committed to keeping your used personal information secure and preventing access to it other than for authorized purposes, as well as committed to taking all necessary precautions and procedures to protect your information and not to disclose, change, destroy or use them in any illegal way. And in the case of creating a password for your account on Lesoll website, it is solely responsible for keeping its confidentiality. And in all cases, Lesoll is committed to making the best effort in protecting and securing your information permanently."}
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="  ">
              {language ? "إخلاء المسؤولية" : "Evacuation responsibilaty "}
            </h2>
            <p>
              {language
                ? "يخلي موقع ليسول مسئوليته عن العقارات التي يقوم المستخدم بنشرها وعرضها على الموقع. "
                : "Lesoll website disclaims any responsibility for the properties that the user publishes and displays on the website."}
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="  ">
              {language ? "بيانات العقارات    " : "Properties Data"}
            </h2>
            <p>
              {language
                ? "جميع البيانات المعروضة بشأن العقارات على الموقع مخصصة للاستخدام الشخصي وغير التجاري من قبل المستخدم ولا يمكن إعادة نشرها أو بثها أو نسخها. يُحظر على المستخدمين بيع البيانات أو العقارات أو الإعلانات المعروضة على ليسول دون الحصول على موافقة مكتوبة من إدارة ليسول.  "
                : "All data displayed regarding real estate on the Site is intended for personal, non-commercial use by the User and may not be republished, broadcast or copied. Users are prohibited from selling data, real estate or advertising displayed on Lesoll without written approval from Lesoll management."}
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="  ">{language ? "الإلغاء  " : "Cancellation"}</h2>
            <p>
              {language
                ? "يحتفظ ليسول بالحق في منع أو إنهاء دخول أي مستخدم إلى الموقع أو وقف التعامل مع أي شخص لأي سبب، بما في ذلك على سبيل المثال لا الحصر: استخدام لغة بذيئة، تهديد، تحريض، تحرش، تشهير، إساءة معاملة لأي موظف في ليسول، سواء عبر الموقع أو البريد الإلكتروني أو المكالمات الهاتفية أو الرسائل، بالكتابة، أو شخصيًا. "
                : "Lesoll reserves the right to block or terminate any user's access to the Site or to cease dealing with any person for any reason, including but not limited to: use of obscene language, threats, incitement, harassment, defamation, or abuse of any Lesoll employee, whether Via the Site, email, phone calls, letters, in writing, or in person."}
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="  ">
              {language ? "استخدام محتوى الموقع" : "Use of website content"}
            </h2>
            <p>
              {language
                ? "يمكنك تحميل وعرض وطباعة نسخة من أي محتوى آخر لأغراضك الشخصية وغير التجارية فقط، وذلك وفقًا للقوانين والقيود المنصوص عليها في هذه الاتفاقية ، ويبقى الاسم والشعار وجميع المحتويات المعروضة على موقع ليسول ملكًا خاصًا لموقع ليسول ومرخصيه ، ولا يُسمح لك باستخدام أو تعديل أو إعداد أعمال مشتقة منه او توزيع أو بيع أو نقل أو عرض أو استخدام أي محتوى موجود على موقع ليسول .  "
                : "You may download, display and print a copy of any other content for your personal, non-commercial purposes only, subject to the laws and restrictions set forth in this Agreement. The name, logo and all content displayed on the Lesoll website remain the exclusive property of Lesoll and its licensors, and you are not permitted to use, modify or prepare derivative works. From, distribute, sell, transfer, display or use any content on the Lesoll website."}
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="  ">
              {language
                ? "البيانات المالية وبيانات الدفع والائتمان "
                : "Financial data, payment and credit data"}
            </h2>
            <p>
              {language
                ? "قد يجمع ليسول بيانات الدفع التي يقوم المستخدم بإدخالها عند الاشتراك في الخدمات مدفوعة الاجر. وقد يحتوي ذلك على رقم وسيلة الدفع الخاصة بالمستخدم (على سبيل المثال: بطاقة الائتمان وبطاقة الخصم) واسمه وعنوان إرسال الفواتير ورمز الأمان لأداة الدفع الخاصة به (على سبيل المثال: رمز التحقق من البطاقة)، وقد نقوم بجمع المعلومات والبيانات المتعلقة بالدفع وسجل المعاملات ومعلومات وبيانات الفواتير. "
                : "Lesoll may collect payment data that the User enters when subscribing to paid services. This may contain the user's payment instrument number (for example: credit card, debit card), name, billing address and security code for his payment instrument (for example: card verification code), and we may collect payment information and data, transaction history and and billing information."}
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="  ">
              {language ? "الخدمات المدفوعة " : "Paid services"}
            </h2>
            <ol className="list-decimal mx-4 space-y-2">
              <li>
                {language
                  ? "يجب على العميل الامتثال لجميع شروط الاستخدام والخصوصية ، وفي حالة مخالفته لهذه الشروط، يحق لإدارة الموقع حذف الإعلانات المخالفة دون تعويض. "
                  : "The customer must comply with all terms of use and privacy, and in the event that he violates these terms, the site administration has the right to delete the violating advertisements without compensation."}
              </li>
              <li>
                {language
                  ? "يحق لإدارة موقع ليسول تغيير شروط الإعلان على الموقع في أي وقت دون سابق إنذار، وتصبح هذه الشروط فعالة وملزمة لجميع العملاء مباشرة ، ويقر العميل بالتزامه بشروط الإعلان الحالية والمستقبلية. "
                  : "Lesoll website management has the right to change the terms of advertising on the site at any time without notice, and these conditions become effective and binding on all customers directly, and the customer acknowledges his commitment to the current and future advertising conditions."}
              </li>
              <li>
                {language
                  ? "يلتزم العميل بعدم نشر محتوى يخالف الأداب أو القانون، وهو المسؤول القانوني عن أي محتوى يتم نشره على الموقع، وفي حالة مخالفة العميل للقوانين أو حقوق الملكية، يحق لإدارة الموقع حذف المحتوى المخالف دون تعويض العميل. "
                  : "The customer is obligated not to publish content that violates morals or the law, and he is legally responsible for any content published on the site. In the event that the customer violates laws or property rights, the site administration has the right to delete the violating content without compensating the customer."}
              </li>
              <li>
                {language
                  ? "في حالة حدوث أخطاء في نشر أو حذف أجزاء من الإعلان الخاص بالعميل، يتم تقدير حجم الضرر بقيمة تقديرية تعادل قيمة الإعلان الإجمالية، ولا تتحمل إدارة ليسول أية أضرار أخرى تنتج عن ذلك. "
                  : "In the event of errors in publishing or deleting parts of the customer's advertisement, the amount of damage will be estimated at an estimated value equivalent to the total value of the advertisement, and Lesoll management will not be liable for any further damages resulting from this."}
              </li>
              <li>
                {language
                  ? "إدارة الموقع غير مسؤولة عن أي أخطاء من العميل اثناء استخدامه للخدمات المدفوعة الاجر على سبيل المثال لا الحصر الغاء الباقة قبل  انتهاء ميعادها او حذف اعلان ممول او خلافه . ، ولا يمكن استرداد قيمة الباقة او الاعلان بعد استخدامهم . "
                  : "The site administration is not responsible for any errors made by the customer while using paid services, including, but not limited to, canceling the package before its expiration date, deleting a sponsored advertisement, or otherwise. The value of the package or advertisement cannot be refunded after using it."}
              </li>
              <li>
                {language
                  ? "قد تتوقف خدمات موقع ليسول لفترات محددة بسبب الصيانة أو أخطاء تقنية، وفي هذه الحالة، لا يحق للعميل المطالبة بتعويض إلا إذا استمر التوقف لأكثر من ٧ أيام متصلة في شهر واحد، حيث يتم تعويض العميل بمدة تساوي فترة التوقف. "
                  : "Lesoll website services may be interrupted for specific periods due to maintenance or technical errors. In this case, the customer is not entitled to claim compensation unless the interruption continues for more than 7 consecutive days in one month, where the client will be compensated for a period equal to the period of interruption."}
              </li>
              <li>
                {language
                  ? "منع على العميل نشر إعلانات عقارية وهمية أو غير متوفرة، أو استخدام أسعار غير صحيحة، أو عدم توفر الصور، وفي حالة مخالفة العميل لهذه الشروط، يحق للإدارة حذف الإعلان دون تعويض."
                  : "The client is prohibited from publishing fake or unavailable real estate advertisements, using incorrect prices, or not providing images. In the event that the client violates these conditions, the administration has the right to delete the advertisement without compensation."}
              </li>
              <li>
                {language
                  ? "بمجرد بيع العقار الذي تم الإعلان عنه، يجب على العميل حذف الإعلان خلال ٣ أيام من تاريخ البيع، دون حق المطالبة بتعويض. "
                  : "Once the advertised property is sold, the customer must delete the advertisement within 3 days from the date of sale, without the right to claim compensation."}
              </li>
              <li>
                {language
                  ? "يُمنع على العميل مشاركة الباقة الخاصة به مع أي شخص آخر، وفي حالة حدوث ذلك، يحق لإدارة الموقع إغلاق حساب العميل وخصم ٢٠٪ من قيمة الحساب كغرامة."
                  : "The customer is prohibited from sharing his package with any other person, and if this happens, the site administration has the right to close the customer’s account and deduct 20% of the account value as a fine."}
              </li>
              <li>
                {language
                  ? "يُمنع بيع الباقة لأي فرد أو جهة أخرى، وفي حالة ثبوت ذلك، يحق لإدارة الموقع إلغاء الباقة وإغلاق حساب العميل. "
                  : "It is prohibited to sell the package to any other individual or entity, and if this is proven, the site administration has the right to cancel the package and close the customer’s account."}
              </li>
              <li>
                {language
                  ? "يحق للشركة رفض التعامل مع عميل معين، وفي حالة إغلاق حساب عميل بسبب رغبة الشركة في إيقاف التعامل معه بدون مبرر ، يتم رد قيمة المتبقى من الباقة . "
                  : "The company has the right to refuse to deal with a specific customer, and in the event that a customer’s account is closed due to the company’s desire to stop dealing with him without justification, the value of the remainder of the package will be refunded."}
              </li>
            </ol>
          </div>
          <div className="space-y-2">
            <h2 className="  ">
              {language
                ? "أمن معلوماتك وبياناتك "
                : "Security of your information and data"}
            </h2>
            <p>
              {language
                ? "يقر ويتعهد ليسول بالحفاظ على أمن بياناتك ومعلوماتك المستخدمة ومنع الوصول اليها في غير الغرض المصرح به، وكذلك يتعهد باتخاذ كافة الاحتياطات والإجراءات اللازمة لحماية تلك المعلومات والبيانات وعدم افشاءها، أو تغييرها، أو اتلافها، أو استخدامها بأي شكل غير قانوني. وفي حالة قيامك بإنشاء كلمة مرور للحساب الخاص بك على موقع ليسول يتحمل وحده مسؤولية الحفاظ على سريته. وفي جميع الأحوال يتعهد ليسول ببذل أقصى جهد وعناية في حماية وتأمين معلوماتك وبياناتك بصفة دائمة. "
                : "Lesoll acknowledges and undertakes to maintain the security of your used data and information and prevent access to them for other than the authorized purpose. It also pledges to take all necessary precautions and measures to protect that information and data and not disclose, alter, destroy, or use them in any illegal way. If you create a password for your account on the Lesoll website, you are solely responsible for maintaining its confidentiality. In all cases, Lesoll undertakes to make every effort and care to protect and secure your information and data at all times."}
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="  ">
              {language ? "حقوق المستخدم " : "User rights "}
            </h2>
            <p>
              {language
                ? "يحق للمستخدم للوصول الى معلوماته وبياناته والحصول على نسخة منها وتحديثها. كذلك يحق للمستخدم حذف معلوماته وبياناته الشخصية الموجدة لدى موقع ليسول حال أنها غير ضرورية. كما يحق للمستخدم ابداء اعتراضه أو شكواه إلى المسؤولين في موقع ليسول ويتعهد ليسول بفحصها والعمل على حلها بشكل جاد وكامل وذلك حفاظا على رضا المستخدم.  "
                : "TThe user has the right to access his information and data, obtain a copy of it, and update it. The user also has the right to delete his personal information and data on the Lesoll website if it is not necessary. The user also has the right to express his objection or complaint to the officials on the Lesoll website, and Lesoll undertakes to examine it and work to resolve it seriously and completely in order to preserve the user’s satisfaction."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
