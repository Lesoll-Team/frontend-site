import {
  getNotifications,
  visitAllNotifications,
  visitNotification,
} from "@/redux-store/features/user/notifiicationSlice";
import { formatDate } from "@/utils/FormateData";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import ReactTimeAgo from "react-time-ago";

const Notifications = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const userData = useSelector((state) => state.userProfile.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userNotifications = useSelector(
    (state) => state.notifications.notifications.data
  );
  // const date = useMemo(()=>new Date())
  const toggleNotification = () => {
    setShowMenu((prev) => !prev);
  };
  useEffect(() => {
    if (!userNotifications) {
      dispatch(getNotifications());
    }
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleNotificationClick = async (id) => {
    setShowMenu(false);
    await dispatch(visitNotification(id));
    dispatch(getNotifications());
  };
  const handleSeeAll = async () => {
    setShowMenu(false);
    await dispatch(visitAllNotifications());
    dispatch(getNotifications());
  };

  return (
    <div className="flex items-center relative" ref={menuRef}>
      <button
        onClick={toggleNotification}
        className="text-darkGray text-2xl 2xl:text-3xl relative"
      >
        <IoIosNotificationsOutline />
        {userNotifications && userNotifications.length > 0 && (
          <span className="absolute w-5 h-5 text-xs rounded-full flex justify-center items-center -top-1 -left-1 bg-lightGreen text-white">
            {userNotifications.length}
          </span>
        )}
      </button>

      {showMenu && (
        <div
          className={`absolute py-4 space-y-4 px-3 w-[240px] top-8 min-h-[227px] max-h-[363px] -left-5 bg-white rounded-md drop-shadow fade-in md:w-[470px] md:h-[500px] overflow-auto`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm md:text-base text-darkGray font-bold">
              <IoIosNotificationsOutline className="text-lg md:text-xl" />
              <p>{language ? "الإشعارات" : "Nofifications"}</p>
            </div>
            <button
              onClick={handleSeeAll}
              className="text-xs md:text-base text-outLine"
            >
              {language ? "قراءة الكل" : "Read All"}
            </button>
          </div>
          <div className="space-y-6">
            {userNotifications && userNotifications.length > 0 ? (
              userNotifications.map((item) => {
                const date = new Date(item.createdAt);
                // const { formattedDate } = formatDate(item.createdAt);
                return (
                  <Link
                    href={item?.link || ""}
                    key={item._id}
                    onClick={() => handleNotificationClick(item._id)}
                    className={`flex items-center justify-between gap-1 flex-wrap `}
                  >
                    <span className="text-xs md:text-lg">
                      {language ? item.title.ar : item.title.en}
                    </span>
                    <span className="text-xs md:text-sm text-lightGreen">
                      {/* {formattedDate} */}
                      <ReactTimeAgo
                        date={date}
                        locale={language ? "" : "en-US"}
                      />
                    </span>
                  </Link>
                );
              })
            ) : (
              <div className="w-full grid place-content-center h-[250px]">
                {language ? "لا توجد إشعارات" : "No Notifications"}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Notifications;
