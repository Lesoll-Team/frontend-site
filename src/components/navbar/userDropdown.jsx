import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { logoutUserToken } from "../../redux-store/features/authSlice";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useRouter } from "next/router";

function UserDropdown({classNamed}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const languageIs = useSelector((state) => state.GlobalState.languageIs);
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const [userDataInfo, setUserDataInfo] = useState({});
  useEffect(() => {
    setUserDataInfo(userInfo);
  });
  const handleLogout = () => {
    dispatch(logoutUserToken()); // Dispatch the logout action
    localStorage.clear();
    router.push("/signin")
  };
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
          <DropdownItem isReadOnly={true} shouldFocusWrap={true} textValue="email" key="email" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{userDataInfo?.email}</p>
          </DropdownItem>
          <DropdownItem 
          textValue="profile"
          
          onPress={() => router.push("/profile")} key="profile">
            
            {languageIs ? "الصفحة الشخصية" : "Profile"}

          </DropdownItem>
          <DropdownItem
          textValue="profile_setting"
            onPress={() => router.push("/profile/settings")}
            key="settings"
          >
            
            {languageIs ? "إعداداتى" : "My Settings"}

          </DropdownItem>

          <DropdownItem textValue="Favorite" key="Favorite" onPress={() => router.push("/profile")}>
            
            {languageIs ? "المفضل" : "Favorite"}
          </DropdownItem>
          <DropdownItem
          textValue="dashboard"
            onPress={() => router.push("/dashboard")}
            className={`${
              userDataInfo && userDataInfo.isAdmin === false ? "hidden" : ""
            }`}
            key="dashboard_for_admin"
          >
            {languageIs ? "لوحة القيادة" : "Dashboard"}
          </DropdownItem>
          <DropdownItem textValue="logout" key="logout" color="danger" onPress={handleLogout}>
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