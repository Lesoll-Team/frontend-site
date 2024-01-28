import Image from "next/image";
import missionImg from "../../../public/about/mission.svg";
import visionImg from "../../../public/about/vision.svg";
import goalsImg from "../../../public/about/goals.svg";
import { useSelector } from "react-redux";
const About = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="relative min-h-screen py-10 container mx-auto  space-y-20 mb-10">
      <div className="space-y-5 ">
        <h1 className="text-7xl md:text-8xl font-bold text-darkGray ">
          {language ? (
            <>
              من
              <span className="text-lightGreen"> نحن</span>
            </>
          ) : (
            <>
              About
              <span className="text-lightGreen"> Us</span>
            </>
          )}
        </h1>
        <p className="text-xl leading-loose md:text-justify">
          {language ? (
            <span>
              ليسول هو سوق مفتوح لعرض العقارات على الإنترنت، نقدم من خلاله خدمة
              رقمية تسهل عملية البحث عن أفضل الصفقات العقارية في أي مكان في مصر،
              سواء كنت مالكاً، مشترياً أو مستأجراً. نقدم خدمة شاملة تساعدك على
              تحقيق أهدافك في مجال العقارات. في ليسول، ندرك أن العثور على العقار
              المثالي يمكن أن يكون عملية شاقة وتستغرق وقتاً طويلاً. لهذا السبب،
              قمنا بإنشاء منصة سهلة الاستخدام تمكنك من استكشاف مجموعة واسعة من
              العقارات من مكانك ودون عناء. سواءً كنت تبحث عن منزل أحلامك، فرصة
              استثمارية مربحة أو عقار للإيجار، فإن ليسول هنا لتبسيط رحلتك.
            </span>
          ) : (
            <span>
              Lesoll is a leading online real estate marketplace in Egypt that
              provides a seamless digital experience for buying, selling, and
              renting properties. Our platform offers comprehensive end-to-end
              services, allowing owners, buyers, and renters to find their
              perfect real estate deal. With our innovative features, including
              recommendations and map overlays, we provide detailed information
              on commutes, schools, and nearby facilities to ensure a convenient
              and informed decision-making process. At Lesoll, we understand
              that finding the perfect property can be a challenging and
              time-consuming process. That's why we have created a user-
              friendly platform that empowers you to explore a wide range of
              properties from the comfort of your own home. Whether you're
              searching for your dream home, a lucrative investment opportunity,
              or a rental property, Lesoll is here to simplify your journey.
            </span>
          )}
        </p>
      </div>

      <div className="space-y-28 my-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 ">
          <div className="md:w-1/2 md:order-2">
            <Image
              src={missionImg}
              width={"auto"}
              height={"auto"}
              className="w-full md:h-[480px] mx-auto"
              alt=" mission Image"
            />
          </div>
          <div className="md:w-3/4 space-y-3 md:space-y-5  md:order-1">
            <p className="text-5xl text-center md:text-start md:text-7xl text-lightGreen font-bold">
              {language ? "مهمتنا" : "Our Mission"}
            </p>
            <p className="text-xl md:text-2xl  text-center md:text-start md:leading-loose">
              {language
                ? " توفير بيئة سهلة ومريحة للأفراد والشركات والمستثمرين للبحث عن العقار المناسب سواءً للشراء أو البيع أو التأجير في مصر. نحن نسعى لتوفير تجربة رقمية مميزة ومريحة تجمع بين الشفافية والملاءمة والأمان، حيث يمكن للجميع الاعتماد على منصتنا لتلبية احتياجاتهم العقارية."
                : " Our mission at Lesoll is to simplify and transform the real estate experience in Egypt. We aim to empower individuals by providing them with a user-friendly platform and a wide range of property options. Through our comprehensive services, we strive to connect owners, buyers, and renters, fostering transparency, convenience, and trust in the real estate market."}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="md:w-3/4 space-y-3 md:space-y-5  md:order-2">
            <h2 className="text-5xl text-center md:text-start md:text-7xl text-lightGreen font-bold">
              {language ? "رؤيتنا" : "OUR VISION"}
            </h2>
            <p className="text-xl md:text-2xl  text-center md:text-start md:leading-loose">
              {language
                ? "أن نكون الخيار الأول والموقع الرئيسي في مصر للبحث عن العقارات، ونسعى لأن نصبح الشركة الرائدة في مجال التسويق العقاري على الإنترنت، حيث نقدم خدمات متميزة -غير تقليدية- للبحث عن العقارات المناسبة، كما نتطلع إلى مستقبل يتيح للأفراد الوصول إلى بيت الأحلام عبر حلول مبتكرة."
                : "Our vision is to become the ultimate destination for real estate transactions in Egypt. We envision Lesoll as the go-to online marketplace where individuals can effortlessly navigate the real estate market, discover their dream properties, and achieve their investment goals. We aim to revolutionize the way people buy, sell, and rent properties, offering a seamless digital experience that exceeds expectations."}
            </p>
          </div>
          <div className="md:w-1/2 mx-auto md:order-1">
            <Image
              src={visionImg}
              width={"auto"}
              height={"auto"}
              className="w-full md:h-[480px]"
              alt=" vision Iamge"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="md:w-1/2 mx-auto md:order-2">
            <Image
              src={goalsImg}
              width={"auto"}
              height={"auto"}
              className=" w-full md:h-[480px]"
              alt="goals image "
            />
          </div>
          <div className="md:w-3/4 space-y-3 md:space-y-5  md:order-1">
            <h2 className="text-5xl text-center md:text-start md:text-7xl text-lightGreen font-bold">
              {language ? "أهدافنا" : "OUR GOALS"}
            </h2>
            <p className="text-xl md:text-2xl  text-center md:text-start ">
              {language
                ? "1. توفير تجربة متميزة تلبي احتياجات العملاء وتوفر لهم المرونة والسهولة لإتمام صفقاتهم العقارية. "
                : " 1 .Simplify the real estate journey: We aim to streamline the process of buying, selling, and renting properties by providing a user-friendly interface, advanced search features, and comprehensive property information."}
              <br />
              <br />
              {language
                ? "2. نسعى لبناء بيئة شفافة وموثوقة يمكن للعملاء الاعتماد عليها من حيث دقة المعلومات و وضوح التفاصيل"
                : "2.Foster transparency and trust: Our goal is to create a  transparent and trustworthy marketplace where owners, buyers, and renters can engage with confidence. We prioritize providing accurate information, facilitating smooth transactions, and ensuring customer satisfaction."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
