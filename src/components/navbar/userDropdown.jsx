import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserToken } from "../../redux-store/features/authSlice";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useRouter } from "next/router";
import io from "socket.io-client";

function UserDropdown({ classNamed }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const languageIs = useSelector((state) => state.GlobalState.languageIs);
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const [userDataInfo, setUserDataInfo] = useState({});
  useEffect(() => {
    setUserDataInfo(userInfo);
  });
  const handleLogout = () => {
    dispatch(logoutUserToken());
    localStorage.clear();
    router.push("/signin");
  };

  useEffect(() => {
    const socket = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`);
    if (userDataInfo?._id) {
      socket.emit("online", { userId: userDataInfo._id });
    }
    return () => {
      socket.disconnect();
    };
  }, [userDataInfo?._id]);

  return (
    <div className={`${classNamed}`}>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            showFallback
            isBordered
            as="button"
            className="transition-transform"
            src={userDataInfo?.avatarUrl}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem
            variant={"light"}
            isReadOnly={true}
            shouldFocusWrap={true}
            textValue="email"
            key="email"
            className="h-14 gap-2 cursor-text hover:bg-white"
          >
            <p className="font-semibold select-none	">Signed in as</p>
            <p className="font-semibold">{userDataInfo?.email}</p>
          </DropdownItem>
          <DropdownItem
            textValue="profile"
            onPress={() => router.push("/profile")}
            key="profile"
          >
            {languageIs ? "الصفحة الشخصية" : "Profile"}
          </DropdownItem>
          <DropdownItem
            textValue="profile_setting"
            onPress={() => router.push("/profile/settings")}
            key="settings"
          >
            {languageIs ? "إعداداتى" : "My Settings"}
          </DropdownItem>
          <DropdownItem
            textValue="dashboard"
            onPress={() => router.push("/dashboard")}
            className={`${
              userDataInfo &&
              userDataInfo.isAdmin === false &&
              userDataInfo.supAdmin === false
                ? "hidden"
                : ""
            }`}
            key="dashboard_for_admin"
          >
            {languageIs ? "لوحة القيادة" : "Dashboard"}
          </DropdownItem>
          <DropdownItem
            textValue="logout"
            key="logout"
            color="danger"
            onPress={handleLogout}
          >
            <div className="flex">
              <div>
                <HiOutlineArrowRightOnRectangle />
              </div>
              <div className="ml-3">{languageIs ? "خروج" : "Log Out"}</div>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default UserDropdown;
