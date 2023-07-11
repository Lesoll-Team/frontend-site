import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/router";
import logoNavbar from '../../../public/icons/logoNavbar.png'
import { useState } from "react";

import { MdNotificationsNone,MdOutlineRealEstateAgent,MdSearch,MdAddHome } from "react-icons/md";
import { GiHamburgerMenu} from "react-icons/gi";


export default function Navbar  ()  {
const [open,setOpen]=useState(true)
  return (
    <nav  className="w-full flex-row relative z-50  " >
      
      <section className="flex bg-white drop-shadow-lg lg:justify-between justify-between px-2  lg:px-0 items-center ">
      {/*Logo */}
      <ul className="w-2/12 flex justify-center ">
       <li className=""> <Link className="" href={'/'}> <Image src={logoNavbar} width={150} height={150}/></Link></li>
      </ul>



 {/*nav link web page */}
 <ul className="lg:flex  w-5/12 justify-center h-auto  xl:space-x-8 lg:space-x-4 hidden">
   
       <li>
        <Link className=" flex p-2  px-5 border-b-[3px] hover:border-b-transparent md:text-3xl text-3xl rounded-3xl   duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95 items-center "
         href={"/rent"}> <MdSearch /> 
         <p>rent</p>
           </Link>
       </li>
       <li>
        <Link className=" flex p-2  px-5 border-b-[3px] hover:border-b-transparent md:text-3xl text-3xl rounded-3xl   duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95 items-center  "
         href={'/'}><MdOutlineRealEstateAgent /> 
         <p>Buy</p>
          </Link>
       </li>
       <li>
        <Link className="flex p-2  px-5 border-b-[3px] hover:border-b-transparent md:text-3xl text-3xl rounded-3xl   duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95 items-center "
         href={'/'}><MdAddHome />
          <p>sell</p>
          </Link>
       </li>
      </ul>




      {/*nav link */}
      <ul className="flex w-2/12 justify-center   space-x-7">
       <li className="  ">
        <Link href={'/'}> <MdNotificationsNone className="md:text-4xl  border-b-[3px] rounded-full w-12 h-12 text-darkGray bg-white text-3xl hover:bg-darkGray hover:text-white  active:scale-95 "/> </Link>
       </li>
      </ul>


      {/*button SignUp*/}
      <ul className="flex max-w-3/12 justify-center ">
        <li>
          <button>
            <Link className="p-2 font-medium xl:px-5  border-lightOrange border-[2px] md:text-2xl text-2xl bg-white rounded-3xl duration-300 text-lightOrangeHover hover:bg-lightOrangeHover hover:text-white active:scale-95" href="/signin">
              Sign In
            </Link>
          </button>
        </li>
      </ul>



                 {/*nav link web mobile */}
      <ul className="flex w-1/12 justify-center lg:hidden">

       <li>
           <button onClick={() => setOpen(!open)}>
           {open? <GiHamburgerMenu className=" text-darkGreen font-medium"/>: <h1>X</h1> }
           </button>
       </li>
      </ul>
      
      </section>
      
<div className="grid justify-items-stretch">
<section className={`w-6/12 absolute justify-self-end bg-gray-300 lg:hidden ${open? 'hidden': ''} `}>
<ul>
  <li>
  <Link className=" flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center  duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
         href={'/'}> About us </Link>
  </li>
  <li>
  <Link className=" flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center  duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
         href={'/'}> Contact </Link>
  </li>
  <li>
  <Link className=" flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center  duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
         href={'/'}> Need </Link>
  </li>
  <li>
  <Link className=" flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center  duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
         href={'/'}> Log out </Link>
  </li>
  <li>
  <Link className=" flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center  duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
         href={'/'}> About us </Link>
  </li>
  <li>
  <Link className=" flex xl:p-2 p-1 xl:px-5 px-2  md:text-4xl text-3xl items-center  duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
         href={'/'}> About us </Link>
  </li>
</ul>
</section>
</div>
    </nav>
  );
};


























// function NavigationLink({ href, text, router }) {
//   const isActive = router.asPath === (href === "/home" ? "/" : href);
//   return (
//     <Link className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95  focus:bg-lightGreen "
//      href={href === "/home" ? "/" : href} passHref>
//      {text}
//     </Link>
//   );
// }

// function NavigationLinkMobile({ href, text, router }) {
//   const isActive = router.asPath === (href === "/home" ? "/" : href);
//   return (
//     <Link className="inline-block p-6 bg-gray-300 w-full   duration-300 text-black hover:bg-gray-100 hover:text-black active:scale-95 "
//      href={href === "/home" ? "/" : href} passHref>
//      {text}
//     </Link>
//   );
// }