import Link from "next/link";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiUsersFour } from "react-icons/pi";
import { TbHomeCheck, TbHomeDown } from "react-icons/tb";
import Image from "next/image";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa";

const Sidebar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const asideWrapper = toggleNav
    ? " h-screen  rounded-r-xl z-20  space-y-4"
    : " w-[65px]  h-screen  rounded-r-xl z-20  space-y-4";

  const [toggleBlogList, setToggleBlogList] = useState(false);
  return (
    <div className={asideWrapper}>
      <div className="justify-center flex p-5 mb-5">
        <Image
          className="justify-center flex"
          src={toggleNav ? "/logo-x.png" : "/favicon.png"}
          alt="sidebar logo"
          width="150"
          height="100"
          priority
        />
      </div>
      <div
        className={` flex ${
          !toggleNav ? "justify-center" : "  justify-end"
        }    w-full`}
      >
        <button onClick={() => setToggleNav(!toggleNav)} className="text-2xl">
          {toggleNav ? <GoSidebarExpand /> : <GoSidebarCollapse />}
        </button>
      </div>
      <nav className="h-screen  top-20 p-5 flex flex-col items-center space-y-6">
        <Link
          className={` flex items-center justify-start ${
            toggleNav ? "lg:w-full lg:py-2 lg:space-x-3 " : "justify-center "
          } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
          href={"/dashboard"}
        >
          <LuLayoutDashboard
            className={
              toggleNav ? "lg:text-3xl text-[30px] " : " text-[30px]  "
            }
          />
          <span className={toggleNav ? "lg:block hidden " : "hidden"}>
            {" "}
            Dashboard
          </span>
        </Link>
        <Link
          className={`flex items-center justify-start ${
            toggleNav ? "lg:w-full lg:py-2 lg:space-x-3 " : "justify-center "
          } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
          href={"/dashboard/prop-active"}
        >
          <TbHomeCheck
            className={
              toggleNav ? "lg:text-3xl text-[30px] " : " text-[30px]  "
            }
          />{" "}
          <span className={toggleNav ? "lg:block hidden " : "hidden"}>
            Active
          </span>
        </Link>
        <Link
          className={` flex items-center justify-start ${
            toggleNav ? "lg:w-full lg:py-2 lg:space-x-3 " : "justify-center "
          } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
          href={"/dashboard/prop-pending"}
        >
          <TbHomeDown
            className={
              toggleNav ? "lg:text-3xl text-[30px] " : " text-[30px]  "
            }
          />{" "}
          <span className={toggleNav ? "lg:block hidden " : "hidden"}>
            Pending
          </span>
        </Link>
        <Link
          className={` flex items-center justify-start ${
            toggleNav ? "lg:w-full lg:py-2 lg:space-x-3 " : "justify-center "
          } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
          href={"/dashboard/users"}
        >
          <PiUsersFour
            className={
              toggleNav ? "lg:text-3xl text-[30px] " : " text-[30px]  "
            }
          />{" "}
          <span className={toggleNav ? "lg:block hidden " : "hidden"}>
            Users
          </span>
        </Link>
        {/**"flex justify-start  space-x-4 items-center" */}
        <div className="w-full flex flex-col items-center ">
          <div
            className={`flex items-center justify-start ${
              toggleNav ? "lg:w-full lg:py-2 lg:space-x-3 " : "justify-center "
            } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
          >
            <FaRegNewspaper
              className="cursor-pointer text-3xl"
              onClick={() => setToggleBlogList(!toggleBlogList)}
            />
            <button
              className="cursor-pointer select-none"
              onClick={() => setToggleBlogList(!toggleBlogList)}
            >
              {" "}
              <span className={toggleNav ? "lg:block hidden " : "hidden"}>
                {" "}
                Blogs
              </span>
            </button>
            <button
              className={toggleNav ? "lg:block hidden " : "hidden"}
              onClick={() => setToggleBlogList(!toggleBlogList)}
            >
              <AiFillCaretDown
                className={`text-black  duration-150 ${
                  toggleBlogList && "rotate-180"
                }`}
              />
            </button>
          </div>
          <div
            className={
              toggleBlogList ? " flex flex-col items-center  w-full" : "hidden"
            }
          >
            <Link
              className="w-full text-center py-2 rounded-lg  text-black hover:text-gray-700 font-bold "
              href={"/dashboard/blog"}
            >
              Blogs
            </Link>
            <Link
              className="w-full text-center  py-2 rounded-lg  text-black hover:text-gray-700 font-bold "
              href={"/dashboard/blog/add-blog"}
            >
              Add Blogs
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Sidebar);
