import Link from "next/link";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { SiBloglovin } from "react-icons/si";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiUsersFour } from "react-icons/pi";
import { TbHomeCheck, TbHomeDown } from "react-icons/tb";

const Sidebar = () => {
  const [toggleBlogList, setToggleBlogList] = useState(false);
  return (
    <div className="    rounded-xl relative  space-y-4 ">
      <nav className="h-screen sticky top-20 flex flex-col items-center space-y-6">
        <Link
          className="w-full flex items-center justify-start select-none py-2 rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300"
          href={"/dashboard"}
        >
          {" "}
          <LuLayoutDashboard /> Dashboard
        </Link>
        <Link
          className="w-full flex items-center justify-start select-none py-2 rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300"
          href={"/dashboard/prop-active"}
        >
          <TbHomeCheck /> Properties Active
        </Link>
        <Link
          className="w-full flex items-center justify-start select-none py-2 rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300"
          href={"/dashboard/prop-pending"}
        >
          <TbHomeDown /> Properties Pending
        </Link>
        <Link
          className="w-full flex items-center justify-start select-none py-2 rounded-lg font-bold hover:bg-white hover:text-lightGreen  active:bg-gray-300"
          href={"/dashboard/users"}
        >
          <PiUsersFour /> Users
        </Link>

        <div className="w-full flex flex-col ">
          <div className="flex justify-start  space-x-4 items-center">
            <SiBloglovin
              className="cursor-pointer"
              onClick={() => setToggleBlogList(!toggleBlogList)}
            />
            <b
              className="cursor-pointer select-none"
              onClick={() => setToggleBlogList(!toggleBlogList)}
            >
              {" "}
              Blogs
            </b>
            <button onClick={() => setToggleBlogList(!toggleBlogList)}>
              <AiFillCaretDown
                className={`text-darkGreen  duration-150 ${
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
              className="w-full text-center py-2 rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300"
              href={"/dashboard/blog"}
            >
              Blogs
            </Link>
            <Link
              className="w-full text-center  py-2 rounded-lg hover:bg-white hover:text-lightGreen font-bold active:bg-gray-300"
              href={"/dashboard/blog/add-blog"}
            >
              Add Blogs
            </Link>
          </div>
        </div>

        {/* <Link href={"/dashboard/prop-active"}> Properties Active</Link> */}
      </nav>
    </div>
  );
};

export default Sidebar;
