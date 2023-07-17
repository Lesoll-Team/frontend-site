import Link from "next/link";
import { Fragment, useState } from "react";
import {   HiOutlineArrowRightOnRectangle} from "react-icons/hi2";
import { IoLanguage } from "react-icons/io5";
import {
    MdAccountCircle,
    MdOutlineSettings,
    MdOutlineFavorite,
  } from "react-icons/md";

export default function userMenu() {
const [language,setLanguage]=useState(true)
    const userMenus=[
        {languages:{english:'Profile',arabic:'الصفحة الرئيسية'},href:'/',id:1},
        {languages:{english:'Favorite',arabic:'المفضلة'},href:'/',id:2},
        {languages:{english:'Setting',arabic:'الإعدادات'},href:'/',id:3},
        {languages:{english:'Log out',arabic:'خـروج'},href:'/signin',id:4},
        {languages:{english:'عربى',arabic:'English'},href:'/',id:5},
    ]

  return (
    <Fragment>
        {userMenus.map(
            (userMenu)=>(
                <li key={userMenu.id} className={`${userMenu.languages.arabic == "English" ? 'md:hidden':''}`} >

                <Link
                  className="border-solid my-1 border-b  border-gray-200 text-darkGreen w-full flex justify-center items-center duration-300 hover:bg-gray-100 hover:text-lightGreenHover  active:scale-95"
                  href={"/"}>
                    <ul >
              {userMenu.languages.english == "Profile" ? <MdAccountCircle /> : ""}
              {userMenu.languages.english == "Favorite" ? <MdOutlineFavorite /> : ""}
              {userMenu.languages.english == "Setting" ? <MdOutlineSettings /> : ""}
              {userMenu.languages.english == "Log out" ? <HiOutlineArrowRightOnRectangle /> : ""}
              {userMenu.languages.arabic == "English" ? <IoLanguage /> : ""}

</ul>
                  {language ? userMenu.languages.english : userMenu.languages.arabic}
                </Link>
              </li>
        )
        )}
 
    </Fragment>
  )
}


/**
 *  <li >
                          <Link
                            className=" w-full flex justify-center items-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                            href={"/"}>
                            <MdAccountCircle/>
                            {language ? "Profile" : "الصفحة الشخصية"}
                          </Link>
                        </li>
                        <li className="flex justify-center">
                          <Link
                            className=" w-full flex justify-center items-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                            href={"/"}>
                            <MdOutlineFavorite/>
                            {language ? "Favorite" : " المفضلة"}
                          </Link>
                        </li>

                        <li className="flex justify-center">
                          <Link
                            className="  w-full flex items-center justify-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                            href={"/"}>
                            <MdOutlineSettings/>
                            {language ? "setting" : " الإعدادات"}
                          </Link>
                        </li>

                       
                        <li className="flex justify-center">
                          <Link
                          onClick={()=>setAuth(!isAuth)}
                            className=" w-full flex justify-center items-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                            href={"/signup"}>
                                 <HiOutlineArrowRightOnRectangle/>
                              {isAuth?``:`${language ? `  Log out` : "خروج"}`}
                            
                            
                          </Link>
                        </li>

                        <li className="flex justify-center">
                          <button
                            onClick={() => setLanguage(!language)}
                            className=" w-full flex items-center justify-center duration-300 text-darkGray hover:bg-gray-200 hover:text-black  active:scale-95"
                            >
                              <IoLanguage/>
                            {language ? "عربى" : "English"}{" "}
                          </button>
                        </li>
 */