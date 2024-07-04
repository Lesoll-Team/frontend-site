import {
  getNotifications,
  visitAllNotifications,
  visitNotification,
} from "@/redux-store/features/user/notifiicationSlice";
import { getLangBoolean } from "@/utils/getLangBoolean";
// import { formatDate } from "@/utils/FormateData";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import ReactTimeAgo from "react-time-ago";

const Notifications = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const language = getLangBoolean();
  const { t } = useTranslation("common");
  const userNotifications = useSelector(
    (state) => state.notifications.notifications.data,
  );
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
          className={`absolute py-4 space-y-4 px-3 w-[240px] top-8 min-h-[227px] max-h-[363px]  bg-white rounded-md drop-shadow fade-in md:w-[470px] md:h-[500px] overflow-auto ${language ? "-left-5" : "-right-5"}`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm md:text-base text-darkGray font-bold">
              <IoIosNotificationsOutline className="text-lg md:text-xl" />
              <h3>{t("Notifications")}</h3>
            </div>
            {userNotifications.length > 0 && (
              <button
                onClick={handleSeeAll}
                className="text-xs md:text-base text-outLine"
              >
                {t("Read_All")}
              </button>
            )}
          </div>
          <div className="space-y-2">
            {userNotifications && userNotifications.length > 0 ? (
              userNotifications.map((item, i) => {
                const notificationDate = new Date(item.createdAt);
                return (
                  <div key={item._id}>
                    <Link
                      href={item?.link || ""}
                      key={item._id}
                      onClick={() => handleNotificationClick(item._id)}
                      className={`flex items-start justify-between gap-1 rounded-md flex-col  py-2 font-noto px-2 flex-wrap `}
                    >
                      <span className="text-xs md:text-lg">
                        {language ? item.title.ar : item.title.en}
                      </span>
                      <span className="text-xs md:text-sm text-lightGreen">
                        <ReactTimeAgo date={notificationDate} />
                      </span>
                    </Link>
                    {userNotifications.length != i + 1 && <hr />}
                  </div>
                );
              })
            ) : (
              <div className="w-full grid place-content-center h-[250px]">
                {t("No_Notifications")}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Notifications;
