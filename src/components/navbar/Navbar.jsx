import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import navbarImg from '../../../public/header.png'
import logoNavbar from '../../../public/icons/logoNavbar.png'
import aboutNavbar from '../../../public/icons/about.svg'
import buyNavbar from '../../../public/icons/buy.svg'
import rentNavbar from '../../../public/icons/rent.svg'
import homeNavbar from '../../../public/icons/home.svg'
import contactNavbar from '../../../public/icons/contact.svg'
import needNavbar from '../../../public/icons/need.svg'
import sellNavbar from '../../../public/icons/sell.svg'
import notificationsNavbar from '../../../public/icons/notifications.svg'


const navigationRoutes = ["home", "rent", "buy", "about","contact"];
// const navigationIcone = [homeNavbar,rentNavbar,buyNavbar ,aboutNavbar ,contactNavbar];

export default function Navbar  ()  {
  const router = useRouter();
  return (
    
    <nav  className=" fixed top-0 left-0 right-0 z-50  flex items-center" >
      <div className=" mx-auto z-10  items-center  flex xl:space-x-32  ">
        {/* logo */}
        <div className="w-36">
        <Image src={logoNavbar} alt="logo"/>
        </div>

        {/* links */}
        <div className="lg:inline-block xl:space-x-2 hidden">
        {navigationRoutes.map((singleRoute) => {
        return (
          <NavigationLink
            key={singleRoute}
            href={`/${singleRoute}`}
            text={singleRoute}
            router={router}
            // icone={}
          />
        );
      })}
        </div>
        <div  className="inline-block xl:space-x-2">{/*container mx-auto py-0 items-center */}
        <Link href="/" className="inline-block px-3 py-2 bg-white rounded-3xl hover:bg-darkGray hover:text-white  active:scale-95 ">
            <Image src={notificationsNavbar} alt="" className="inline-block"/> 
          </Link>
          <Link href="/" className="inline-block px-3 py-2 bg-white rounded-3xl  hover:bg-darkGray hover:text-white  active:scale-95">
            <Image src={needNavbar} alt="" className="inline-block "/> Need
          </Link>
          <Link href="/" className="inline-block px-3 py-2 bg-white rounded-3xl  hover:bg-darkGray hover:text-white  active:scale-95">
            <Image src={sellNavbar} alt="" className="inline-block" /> Sell
          </Link>
       </div>
        {/* buttons */}
        <div className="inline-block px-7 py-2 bg-white rounded-3xl duration-300 text-lightOrangeHover hover:bg-lightOrangeHover hover:text-white active:scale-95">
        <button className="">   
            <Link href="/signin" >
         <b> Sign In</b> 
          </Link></button>
        </div>

      </div >
      <div className="absolute inset-0 bg-cover bg-center  z-0" style={{ backgroundImage: "url('/header.png')" }}></div>
    </nav>
  );
};

function NavigationLink({ href, text, router }) {
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
    <Link className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95"
     href={href === "/home" ? "/" : href} passHref>
     {text}
    </Link>
  );
}


         /* <Link href="/" className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95">
            <Image src={homeNavbar} alt="" className="inline-block   "/> Home
          </Link>
          <Link href="/rent" className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95">
            <Image src={rentNavbar} alt="" className="inline-block"/> Rent
          </Link>
          <Link href="/buy" className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95">
            <Image src={buyNavbar} alt="" className="inline-block"/> Buy
          </Link>
          <Link href="/about" className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95">
            <Image src={aboutNavbar} alt="" className="inline-block"/> About us
          </Link>
          <Link href="/" className="inline-block px-3 py-2  rounded-3xl  duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95">
            <Image src={contactNavbar} alt="" className="inline-block"/> Contact
          </Link> */