import Link from "next/link";
import { Fragment, useState } from "react";
import {   HiOutlineArrowRightOnRectangle} from "react-icons/hi2";
import { IoLanguage } from "react-icons/io5";
import {
    MdAccountCircle,
    MdOutlineSettings,
    MdOutlineFavorite,
  } from "react-icons/md";
import { useSelector } from "react-redux";

export default function userMenu() {


  const languageIs=useSelector(state=> state.Languages.languageIs)

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
                  href={userMenu.href}>
                    <ul >
              {userMenu.languages.english == "Profile" ? <MdAccountCircle /> : ""}
              {userMenu.languages.english == "Favorite" ? <MdOutlineFavorite /> : ""}
              {userMenu.languages.english == "Setting" ? <MdOutlineSettings /> : ""}
              {userMenu.languages.english == "Log out" ? <HiOutlineArrowRightOnRectangle /> : ""}
              {userMenu.languages.arabic == "English" ? <IoLanguage /> : ""}

</ul>
                  {languageIs ? userMenu.languages.english : userMenu.languages.arabic}
                </Link>
              </li>
        )
        )}
 
    </Fragment>
  )
}
