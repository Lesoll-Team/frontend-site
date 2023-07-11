import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/footer/Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <div className="globalBody bg-gradient">
        <Head>
          <meta
            name="Lesoll"
            content="Lesoll is a real estate firm specializing in the buying, selling, and renting of commercial and residential properties. With years of experience in the real estate industry, Lesoll Company has built a reputation for providing exceptional service to its clients.

            Whether you're looking to buy, sell, or rent a property, Lesoll Company has the expertise to guide you through the process. Their team of experienced agents is knowledgeable about the local real estate market and can help you make informed decisions about your investment.
            
            If you're a seller, Lesoll Company can help you showcase your property in the best possible light to attract potential buyers. They use a variety of marketing strategies to reach a wide audience and ensure that your property gets the exposure it deserves.
            
            If you're a buyer, Lesoll Company can help you find the perfect property that meets your budget and preferences. Their agents will work closely with you to understand your needs and guide you through the buying process from start to finish.
            
            For those looking to rent a property, Lesoll Company has a wide selection of rental properties available. Their agents can help you find a property that meets your needs and budget, and will assist you with the rental application and lease agreement process.
            
            In addition to buying, selling, and renting properties, Lesoll Company offers property management services. They can help you manage your rental property by handling tenant screening, rent collection, maintenance requests, and more.
            
            Overall, Lesoll Company is a reliable and trustworthy real estate firm that can help you with all your real estate needs. Contact them today to learn more about their services and how they can help you achieve your real estate goals.
            "
          />
        </Head>


        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
