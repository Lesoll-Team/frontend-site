import { logout ,clearLocalStorage} from "../../redux-store/features/authSlice";
// import {
  
// } from "../../redux-store/features/authSlice";
import Link from "next/link";
import { Fragment } from "react";
import {   HiOutlineArrowRightOnRectangle} from "react-icons/hi2";
// import { IoLanguage } from "react-icons/io5";
import {
    MdAccountCircle,
    MdOutlineSettings,
    MdOutlineFavorite,
  } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";

export default function UserMenu() {
const dispatch=useDispatch()

  const languageIs=useSelector(state=> state.GlobalState.languageIs)

    const userMenus=[
        {languages:{english:'Profile',arabic:'الصفحةالشخصية'},href:'/',id:1},
        {languages:{english:'Favorite',arabic:'المفضلة'},href:'/',id:2},
        {languages:{english:'Setting',arabic:'الإعدادات'},href:'/',id:3},
        // {languages:{english:'عربى',arabic:'English'},href:'/',id:5},
    ]
    const handleLogout = () => {
      dispatch(logout()); // Dispatch the logout action
      clearLocalStorage(); // Clear user data and userAuth from local storage
    };

  return (
    <Fragment>
        {userMenus.map(
            (userMenu)=>(
                <li key={userMenu.id} className={` w-48`} >{/*${userMenu.languages.arabic == "English" ? 'md:hidden':''} */}

                <Link
                  className="border-solid my-1 py-3 border-b text-[16px]  border-gray-200 text-darkGreen w-full flex  items-center duration-300 hover:bg-gray-100 hover:text-lightGreenHover  active:scale-95"
                  href={userMenu.href}>
                    <ul className="">
              {userMenu.languages.english == "Profile" ? <MdAccountCircle /> : ""}
              {userMenu.languages.english == "Favorite" ? <MdOutlineFavorite /> : ""}
              {userMenu.languages.english == "Setting" ? <MdOutlineSettings /> : ""}
              {/* {userMenu.languages.english == "Log out" ? <HiOutlineArrowRightOnRectangle /> : ""} */}
              {/* {userMenu.languages.arabic == "English" ? <IoLanguage /> : ""} */}

</ul>
<ul className="mx-3">
                  {languageIs ? userMenu.languages.english : userMenu.languages.arabic}</ul>
                </Link>
              </li>
        )
        )}

<li  className={`w-48`} >
  <button 
  onClick={handleLogout}
  className="border-solid my-1 py-3 border-b text-[16px]  border-gray-200 text-darkGreen w-full  duration-300 hover:bg-gray-100 hover:text-lightGreenHover  active:scale-95">
<Link
  className="flex  items-center"
  href='/signin'>
<ul className="">
<HiOutlineArrowRightOnRectangle /> 
</ul>
<ul className="mx-3">
  {languageIs ? 'Log Out' : 'خروج'}</ul>
</Link>
</button>
</li>
 
    </Fragment>
  )
}
