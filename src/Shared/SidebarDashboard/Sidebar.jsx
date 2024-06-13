import Link from "next/link";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiUsersFour } from "react-icons/pi";
import { TbHomeCheck, TbHomeDown, TbUserStar } from "react-icons/tb";
import Image from "next/image";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineAddHomeWork, MdOutlinePriceChange } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";

const Sidebar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const asideWrapper = toggleNav
    ? " h-screen  rounded-r-xl z-20  space-y-1"
    : " w-[50px]  h-screen  rounded-r-xl z-20  space-y-1";

  const [toggleBlogList, setToggleBlogList] = useState(false);
  return (
    <div className={asideWrapper}>
      <div className="justify-center flex ">
        <Image
          className="justify-center flex w-[50px] h-[50px]"
          src={"/favicon.png"}
          alt="sidebar logo"
          width={50}
          height={50}
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
      <nav className="h-screen  top-10 p-3 flex flex-col items-center space-y-4">
        <Link
          className={` flex items-center justify-start ${
            toggleNav ? "lg:w-full lg:py-1 lg:space-x-3 " : "justify-center "
          } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
          href={"/dashboard"}
        >
          <LuLayoutDashboard className="text-[20px]" />
          <span
            className={
              toggleNav ? "lg:block hidden sm-text" : " hidden sm-text"
            }
          >
            Dashboard
          </span>
        </Link>
        <Link
          className={`flex items-center justify-start ${
            toggleNav ? "lg:w-full lg:py-1 lg:space-x-3 " : "justify-center "
          } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
          href={"/dashboard/prop-active"}
        >
          <TbHomeCheck className="text-[20px]" />{" "}
          <span
            className={
              toggleNav ? "lg:block hidden sm-text" : " hidden sm-text"
            }
          >
            Active
          </span>
        </Link>
        <Link
          className={` flex items-center justify-start ${
            toggleNav ? "lg:w-full lg:py-1 lg:space-x-3 " : "justify-center "
          } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
          href={"/dashboard/prop-pending"}
        >
          <TbHomeDown className="text-[20px]" />{" "}
          <span
            className={
              toggleNav ? "lg:block hidden sm-text" : " hidden sm-text"
            }
          >
            Pending
          </span>
        </Link>
        <Link
          className={` flex items-center justify-start ${
            toggleNav ? "lg:w-full lg:py-1 lg:space-x-3 " : "justify-center "
          } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
          href={"/dashboard/users"}
        >
          <PiUsersFour className="text-[20px]" />{" "}
          <span
            className={
              toggleNav ? "lg:block hidden sm-text" : " hidden sm-text"
            }
          >
            Users
          </span>
        </Link>
        <Link
          className={` flex items-center justify-start ${
            toggleNav ? "lg:w-full lg:py-1 lg:space-x-3 " : "justify-center "
          } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
          href={"/dashboard/pricing"}
        >
          <MdOutlinePriceChange className=" text-[20px]" />
          <span
            className={
              toggleNav ? "lg:block hidden sm-text" : " hidden sm-text"
            }
          >
            Pricing
          </span>
        </Link>
        {/* <TbUserDollar />
        <TbUserStar />
<PiUserCircleGearBold />

         */}
        <Link
          className={` flex items-center justify-start ${
            toggleNav ? "lg:w-full lg:py-1 lg:space-x-3 " : "justify-center "
          } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
          href={"/dashboard/vip-users"}
        >
          <TbUserStar className=" text-[20px]" />
          <span
            className={
              toggleNav ? "lg:block hidden sm-text" : " hidden sm-text"
            }
          >
            VIP Users
          </span>
        </Link>
        {/**"flex justify-start  space-x-4 items-center" */}
        <div className="w-full flex flex-col items-center ">
          <div
            className={`flex items-center justify-start ${
              toggleNav ? "lg:w-full lg:py-1 lg:space-x-3 " : "justify-center "
            } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
          >
            <FaRegNewspaper
              className="cursor-pointer text-[20px]"
              onClick={() => setToggleBlogList(!toggleBlogList)}
            />
            <button
              className="cursor-pointer select-none"
              onClick={() => setToggleBlogList(!toggleBlogList)}
            >
              <span
                className={
                  toggleNav ? "lg:block hidden sm-text" : " hidden sm-text"
                }
              >
                Blogs
              </span>
            </button>
            <button
              className={
                toggleNav ? "lg:block hidden sm-text" : " hidden sm-text"
              }
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
              toggleBlogList
                ? "sm-text flex flex-col items-center  w-full"
                : "hidden first-line:"
            }
          >
            <Link
              className="w-full text-center    text-black hover:text-gray-700 font-bold "
              href={"/dashboard/blog"}
            >
              Blogs
            </Link>
            <Link
              className="w-full text-center whitespace-nowrap  text-black hover:text-gray-700 font-bold "
              href={"/dashboard/blog/add-blog"}
            >
              Add Blogs
            </Link>
          </div>
        </div>
        <Link
          href={"/dashboard/projects"}
          className={` flex items-center justify-start ${
            toggleNav ? "lg:w-full lg:py-1 lg:space-x-3 " : "justify-center "
          } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
        >
          <MdOutlineAddHomeWork className="text-[20px]" />{" "}
          {toggleNav && (
            <span className="sm-text font-bold hidden md:block">Projects</span>
          )}
        </Link>
        <Link
          href={"/dashboard/needs"}
          className={` flex items-center justify-start ${
            toggleNav ? "lg:w-full lg:py-1 lg:space-x-3 " : "justify-center "
          } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
        >
          <IoIosPaper className="text-[20px]" />
          {toggleNav && (
            <span className="sm-text font-bold hidden md:block">Needs</span>
          )}
        </Link>
        <Link
          href={"/dashboard/compoundes"}
          className={` flex items-center justify-start ${
            toggleNav ? "lg:w-full lg:py-1 lg:space-x-3 " : "justify-center "
          } select-none   rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300`}
        >
          <span className="text-[20px]">C</span>
          {toggleNav && (
            <span className="sm-text font-bold hidden md:block">
              Components
            </span>
          )}
        </Link>
      </nav>
    </div>
  );
};

export default React.memo(Sidebar);

