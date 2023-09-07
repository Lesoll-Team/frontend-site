// import React, { useEffect, useState } from "react";
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   Avatar,
//   Button,
//   //   User,
// } from "@nextui-org/react";
// import { useDispatch, useSelector } from "react-redux";
// import { MdNotificationsNone } from "react-icons/md";

// import { IoCheckmarkDoneSharp, IoRadioButtonOnOutline } from "react-icons/io5";

// // import { logoutUserToken } from "../../redux-store/features/authSlice";
// // import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
// // import { useRouter } from "next/router";
// function NotificationDropdown() {
//   //   const router = useRouter();
//   //   const dispatch = useDispatch();
//   //   const languageIs = useSelector((state) => state.GlobalState.languageIs);
// //   const userInfo = useSelector((state) => state.GlobalState.userData);
//   //   const [userDataInfo, setUserDataInfo] = useState({});
//   //   useEffect(() => {
//   //     setUserDataInfo(userInfo);
//   //   });
//   //   const handleLogout = () => {
//   //     dispatch(logoutUserToken()); // Dispatch the logout action
//   //     localStorage.clear();
//   //   };
//   return (
//     <div className={``}>
//       {/**${classNamed} */}
//       <Dropdown placement="bottom-end" className="bg-red-200 p-5 max-h-60 overflow-hidden">
//         <DropdownTrigger>
//           <Button isIconOnly className="bg-inherit" aria-label="Like">
//             <MdNotificationsNone className="text-3xl" />
//           </Button>
//         </DropdownTrigger>
//         <DropdownMenu
//           itemClasses={{
//             base: "bg-blue-200",
//             wrapper: "bg-red-200",
//           }}
//           // className=""
//           aria-label="Profile Actions"
//           //  variant="flat"
//         >
//           <DropdownItem textValue="email" key="email" className="">
//           1
//             <h1> محل بسنتر النخيل ٣٠ متر موقع مميز</h1>

//             <h1> الجيزه</h1>

//             <h1>
//               <IoCheckmarkDoneSharp className="text-lightGreen" />
//             </h1>

//             <h5>فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110</h5>
//           </DropdownItem>

//           <DropdownItem textValue="email" key="email" className="">
//           2
//             <h1> محل بسنتر النخيل ٣٠ متر موقع مميز</h1>

//             <h1> الجيزه</h1>

//             <h1>
//               <IoCheckmarkDoneSharp className="text-lightGreen" />
//             </h1>

//             <h5>فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110</h5>
//           </DropdownItem>

//           <DropdownItem textValue="email" key="email" className="">
//           3
//             <h1> محل بسنتر النخيل ٣٠ متر موقع مميز</h1>

//             <h1> الجيزه</h1>

//             <h1>
//               <IoCheckmarkDoneSharp className="text-lightGreen" />
//             </h1>

//             <h5>فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110</h5>
//           </DropdownItem>

//           <DropdownItem textValue="email" key="email" className="">
//           4
//             <h1> محل بسنتر النخيل ٣٠ متر موقع مميز</h1>

//             <h1> الجيزه</h1>

//             <h1>
//               <IoCheckmarkDoneSharp className="text-lightGreen" />
//             </h1>

//             <h5>فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110</h5>
//           </DropdownItem>
          
//           <DropdownItem textValue="email" key="email" className="">
//           5
//             <h1> محل بسنتر النخيل ٣٠ متر موقع مميز</h1>

//             <h1> الجيزه</h1>

//             <h1>
//               <IoCheckmarkDoneSharp className="text-lightGreen" />
//             </h1>

//             <h5>فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110</h5>
//           </DropdownItem>

//           <DropdownItem textValue="email" key="email" className="">
//           6
//             <h1> محل بسنتر النخيل ٣٠ متر موقع مميز</h1>

//             <h1> الجيزه</h1>

//             <h1>
//               <IoCheckmarkDoneSharp className="text-lightGreen" />
//             </h1>

//             <h5>فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110</h5>
//           </DropdownItem>

//           <DropdownItem textValue="email" key="email" className="">
//           7
//             <h1> محل بسنتر النخيل ٣٠ متر موقع مميز</h1>

//             <h1> الجيزه</h1>

//             <h1>
//               <IoCheckmarkDoneSharp className="text-lightGreen" />
//             </h1>

//             <h5>فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110</h5>
//           </DropdownItem>

//           <DropdownItem textValue="email" key="email" className="">
//           8
//             <h1> محل بسنتر النخيل ٣٠ متر موقع مميز</h1>

//             <h1> الجيزه</h1>

//             <h1>
//               <IoCheckmarkDoneSharp className="text-lightGreen" />
//             </h1>

//             <h5>فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110</h5>
//           </DropdownItem>

//           <DropdownItem textValue="email" key="email" className="">
//           9
//             <h1> محل بسنتر النخيل ٣٠ متر موقع مميز</h1>

//             <h1> الجيزه</h1>

//             <h1>
//               <IoCheckmarkDoneSharp className="text-lightGreen" />
//             </h1>

//             <h5>فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110</h5>
//           </DropdownItem>

//           <DropdownItem textValue="email" key="email" className="">
//           10
//             <h1> محل بسنتر النخيل ٣٠ متر موقع مميز</h1>

//             <h1> الجيزه</h1>

//             <h1>
//               <IoCheckmarkDoneSharp className="text-lightGreen" />
//             </h1>

//             <h5>فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110</h5>
//           </DropdownItem>

//           <DropdownItem textValue="email" key="email" className="">
//           11
//             <h1> محل بسنتر النخيل ٣٠ متر موقع مميز</h1>

//             <h1> الجيزه</h1>

//             <h1>
//               <IoCheckmarkDoneSharp className="text-lightGreen" />
//             </h1>

//             <h5>فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110</h5>
//           </DropdownItem>

//           <DropdownItem textValue="email" key="email" className="">
//           12
//             <h1> محل بسنتر النخيل ٣٠ متر موقع مميز</h1>

//             <h1> الجيزه</h1>

//             <h1>
//               <IoCheckmarkDoneSharp className="text-lightGreen" />
//             </h1>

//             <h5>فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110</h5>
//           </DropdownItem>

//           <DropdownItem textValue="email" key="email" className="">
//           13
//             <h1> محل بسنتر النخيل ٣٠ متر موقع مميز</h1>

//             <h1> الجيزه</h1>

//             <h1>
//               <IoCheckmarkDoneSharp className="text-lightGreen" />
//             </h1>

//             <h5>فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110</h5>
//           </DropdownItem>

//         </DropdownMenu>
//       </Dropdown>
//     </div>
//   );
// }

// export default NotificationDropdown;
