import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Head from "next/head";
import { Fragment, useEffect, useState} from "react";
import { fetchUserData } from "@/redux-store/features/globalState";
import { useDispatch } from "react-redux";
// import { updateUserData } from "@/utils/api";
export default function Layout({ children }) {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

// const [selectedImage, setSelectedImage] = useState(null);
// const [selectedFullname, setSelectedFullname] = useState("");
// const [selectedUserName, setSelectedUserName] = useState("");
// const [selectedPhone, setSelectedPhone] = useState("");
// const [selectedContactMethod, setSelectedContactMethod] = useState("");

// const handleFormSubmit = async (e) => {
//   e.preventDefault();

//   const formData = new FormData();
//   formData.append('img', selectedImage);
//   formData.append('fullname', selectedFullname);
//   formData.append('username', selectedUserName);
//   formData.append('phone', selectedPhone);
//   formData.append('contactMethod', selectedContactMethod);
//   try {
//     await updateUserData("64cb8879f1682ebf3df7407a",
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2I4ODc5ZjE2ODJlYmYzZGY3NDA3YSIsImlhdCI6MTY5MTA2MDM0NX0.C3SNcxaVZ08SU_69OjHVzHrCAlo5mpxQReYJGlfmv6E",
//     formData)

//   } catch (error) {
//     console.error(error);
//   }
//   console.log(formData);
// };

  return (
    <Fragment>
      <div  style={{
          minHeight: "100dvh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }} className="globalBody bg-gradient">
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
        <Navbar  />
        <main>
           {/* {console.log(updateUserData("64cb8879f1682ebf3df7407a",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2I4ODc5ZjE2ODJlYmYzZGY3NDA3YSIsImlhdCI6MTY5MTA2MDM0NX0.C3SNcxaVZ08SU_69OjHVzHrCAlo5mpxQReYJGlfmv6E",
          {
            fullname:"Ahmed Jimmy",
            img:"https://avatars.githubusercontent.com/u/124493176?v=4",
            username:"Jimmynano",
            phone:"01125613782",
            contactMethod:"phone"
          }
          ))}  */}
          {/* {console.log(getUserData())} */}
           {/* <form onSubmit={handleFormSubmit}>
      <input type="file" src="dsdsdsd" className="bg-red-100 m-2" name="img" onChange={(e)=>setSelectedImage(e.target.files[0])} />
      <input type="text" value={selectedFullname|| " fullname"} className="bg-red-100 m-2" placeholder="name" name="fullname" onChange={(e)=>setSelectedFullname(e.target.value)}/>
       <input type="text" value={selectedUserName|| " user name "} className="bg-red-100 m-2" name="username"  placeholder="user name" onChange={(e)=>setSelectedUserName(e.target.value)}/>
  <input type="text" value={selectedPhone|| "phone"} className="bg-red-100 m-2" name="phone" placeholder="phone" onChange={(e)=>setSelectedPhone(e.target.value)}/>
      <input type="text" value={selectedContactMethod || " contactMethod "} className="bg-red-100 m-2" name="contactMethod" placeholder="contactMethod" onChange={(e)=>setSelectedContactMethod(e.target.value)}/> 
      <button type="submit">Upload Image</button>
    </form>  */}
          {/* {console.log()} */}
          {children}</main>
        <Footer />
      </div>
    </Fragment>
  );
}
