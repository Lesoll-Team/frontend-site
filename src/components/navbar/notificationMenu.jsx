import React, { Fragment, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { IoCheckmarkDoneSharp, IoRadioButtonOnOutline } from "react-icons/io5";
import { getAllNotifications, visitNotifications } from "@/utils/notifications";
import { useSelector } from "react-redux";


export default function NotificationMenu({sendCount}) {

  
  const languageIs = useSelector((state) => state.GlobalState.languageIs);

  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = useCallback(async () => {
    try {
      const getNotification = await getAllNotifications();
      setNotifications(getNotification);
      sendCount(getNotification.length)
      // console.log(getNotification);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  }, []); // Empty dependency array, indicating that this callback doesn't depend on any props or state

  const handleUserVisit = useCallback(
    async (_id) => {
      try {
        await visitNotifications(_id);
        // After visiting, fetch updated notifications
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

  return (
    <>
      {notifications.map((notification) => (
        <Link key={notification._id} onClick={() => handleUserVisit(notification._id)} href={`${notification.link}`}>
          {/**{notification.link} */}
          <ul className="  flex-col p-3 rounded-3xl my-3 drop-shadow-xl bg-white w-full ">
            <li className=" flex text-lightGreen text-lg ">
              <h2 className="">
                <b>
                  {languageIs ? notification.title.ar : notification.title.en}
                </b>
              </h2>
              <div>
                {notification.isVisited ? (
                  <IoCheckmarkDoneSharp className="text-lightGreen" />
                ) : (
                  <IoRadioButtonOnOutline className="text-darkOrange" />
                )}
              </div>
            </li>

            <li className="text-sm text-gray-500">
              <h5 className="truncate "> {notification.createdAt}</h5>
            </li>
          </ul>
        </Link>
      ))}

    </>
  );
}
