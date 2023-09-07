import Image from "next/image";
import mainImg from "../../../public/about/element-1.svg";
import aboutImg from "../../../public/about/element-2.svg";
import missionImg from "../../../public/about/mission.svg";
import visionImg from "../../../public/about/vision.svg";
import goalsImg from "../../../public/about/goals.svg";
const About = () => {
  return (
    <div className="relative min-h-screen py-10 container mx-auto  space-y-20 mb-10">
      <div className="space-y-5 ">
        <h1 className="text-8xl md:text-9xl font-bold text-darkGray ">
          About
          <span className="text-lightGreen"> Us</span>
        </h1>
        <p className="text-xl leading-loose md:text-justify">
          Lesoll is a leading online real estate marketplace in Egypt that
          provides a seamless digital experience for buying, selling, and
          renting properties. Our platform offers comprehensive end-to-end
          services, allowing owners, buyers, and renters to find their perfect
          real estate deal. With our innovative features, including
          recommendations and map overlays, we provide detailed information on
          commutes, schools, and nearby facilities to ensure a convenient and
          informed decision-making process. At Lesoll, we understand that
          finding the perfect property can be a challenging and time-consuming
          process. That's why we have created a user- friendly platform that
          empowers you to explore a wide range of properties from the comfort of
          your own home. Whether you're searching for your dream home, a
          lucrative investment opportunity, or a rental property, Lesoll is here
          to simplify your journey.
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
              alt=" "
            />
          </div>
          <div className="md:w-3/4 space-y-3 md:space-y-5 pt-5 md:order-1">
            <h2 className="text-5xl text-center md:text-start md:text-7xl text-lightGreen font-bold">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl  text-center md:text-start md:leading-loose">
              Our vision is to become the ultimate destination for real estate
              transactions in Egypt. We envision Lesoll as the go-to online
              marketplace where individuals can effortlessly navigate the real
              estate market, discover their dream properties, and achieve their
              investment goals. We aim to revolutionize the way people buy,
              sell, and rent properties, offering a seamless digital experience
              that exceeds expectations.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="md:w-1/2 mx-auto md:order-1">
            <Image
              src={visionImg}
              width={"auto"}
              height={"auto"}
              className="w-full md:h-[480px]"
              alt=" "
            />
          </div>
          <div className="md:w-3/4 space-y-3 md:space-y-5 pt-5 md:order-2">
            <h2 className="text-5xl text-center md:text-start md:text-7xl text-lightGreen font-bold">
              OUR VISION
            </h2>
            <p className="text-xl md:text-2xl  text-center md:text-start md:leading-loose">
              Our mission at Lesoll is to simplify and transform the real estate
              experience in Egypt. We aim to empower individuals by providing
              them with a user-friendly platform and a wide range of property
              options. Through our comprehensive services, we strive to connect
              owners, buyers, and renters, fostering transparency, convenience,
              and trust in the real estate market.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="md:w-1/2 mx-auto md:order-2">
            <Image
              src={goalsImg}
              width={"auto"}
              height={"auto"}
              className=" w-full md:h-[480px]"
              alt=" "
            />
          </div>
          <div className="md:w-3/4 space-y-3 md:space-y-5 pt-5 md:order-1">
            <h2 className="text-5xl text-center md:text-start md:text-7xl text-lightGreen font-bold">
              OUR GOALS
            </h2>
            <p className="text-xl md:text-2xl  text-center md:text-start ">
              1 .Simplify the real estate journey: We aim to streamline the
              process of buying, selling, and renting properties by providing a
              user-friendly interface, advanced search features, and
              comprehensive property information.
              <br />
              <br />
              2.Foster transparency and trust: Our goal is to create a
              transparent and trustworthy marketplace where owners, buyers, and
              renters can engage with confidence. We prioritize providing
              accurate information, facilitating smooth transactions, and
              ensuring customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
