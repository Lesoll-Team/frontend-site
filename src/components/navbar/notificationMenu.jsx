import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoCheckmarkDoneSharp, IoRadioButtonOnOutline } from "react-icons/io5";
import { getAllNotifications, seeAllNotifications, visitNotifications } from "@/utils/notifications";
import { useSelector } from "react-redux";
// seeAllNotifications;

export default function NotificationMenu({
  setCountNotifications,sendCount,
  notificationsMenuRef,
  setNotificationsOpen,
}) {
  // const [open,setopen]=useState(false)
  const languageIs = useSelector((state) => state.GlobalState.languageIs);

  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = useCallback(async () => {
    try {
      const getNotification = await getAllNotifications();
      setNotifications(getNotification);
      sendCount(getNotification.length);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  }, []);

  const handleUserVisit = useCallback(
    async (_id) => {
      setNotificationsOpen(false);

      try {
        await visitNotifications(_id);
        fetchNotifications();
      } catch (error) {
        console.error("Error visiting notification:", error);
      }
    },
    [fetchNotifications]
  );

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const seeAll = async () => {
   seeAllNotifications();
    setNotifications([]);
  setCountNotifications(0)
  };

  return (
    <div ref={notificationsMenuRef} className={`mb-40 `}>
      <div
        onClick={seeAll}
        className=" cursor-pointer underline  font-semibold"
      >
        {languageIs ? "قراءة الكل" : "see all"}
      </div>
      {notifications.length === 0 ? (
        <div className=" p-2 h-full flex items-center justify-center">
          <p className="text-default-500">No notifications available</p>
        </div>
      ) : (
        notifications.map((notification) => (
          <Link
            key={notification._id}
            onClick={() => handleUserVisit(notification._id)}
            href={`${notification.link}`}
          >
            <ul className="  flex-col p-3 rounded-3xl my-3 drop-shadow-xl bg-white w-full ">
              <li className=" flex text-lightGreen text-lg ">
                <h6 className="">
                  <b>
                    {languageIs ? notification.title.ar : notification.title.en}
                  </b>
                </h6>
                <div>
                  {notification.isVisited ? (
                    <IoCheckmarkDoneSharp className="text-lightGreen" />
                  ) : (
                    <IoRadioButtonOnOutline className="text-darkOrange" />
                  )}
                </div>
              </li>

              <li className="text-sm text-gray-500">
                <p className="truncate "> {notification.createdAt}</p>
              </li>
            </ul>
          </Link>
        ))
      )}
    </div>
  );
}


// export default function NotificationMenu({sendCount}) {

  
//   const languageIs = useSelector((state) => state.GlobalState.languageIs);

//   const [notifications, setNotifications] = useState([]);

//   const fetchNotifications = useCallback(async () => {
//     try {
//       const getNotification = await getAllNotifications();
//       setNotifications(getNotification);
//       sendCount(getNotification.length)
//       // console.log(getNotification);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   }, []); // Empty dependency array, indicating that this callback doesn't depend on any props or state

//   const handleUserVisit = useCallback(
//     async (_id) => {
//       try {
//         await visitNotifications(_id);
//         // After visiting, fetch updated notifications
//         fetchNotifications();
//       } catch (error) {
//         console.error("Error visiting notification:", error);
//       }
//     },
//     [fetchNotifications]
//   );

//   useEffect(() => {
//     fetchNotifications();
//   }, [fetchNotifications]);

//   return (
//     <div className=" ">
//       {notifications.length === 0 ? (
//         <div className=" p-2 h-full flex items-center justify-center">
//         <p className="text-default-500">No notifications available</p>

//         </div>
//       ) : (
//         notifications.map((notification) => (
//           <Link
//             key={notification._id}
//             onClick={() => handleUserVisit(notification._id)}
//             href={`${notification.link}`}
//           >
//             <ul className="flex-col p-3 rounded-3xl my-3 drop-shadow-xl bg-white w-full">
//               {/* ... Your existing code for rendering notifications ... */}
//             </ul>
//           </Link>
//         ))
//       )}
//     </div>
//   );
// }
