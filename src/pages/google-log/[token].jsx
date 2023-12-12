
import SelectBtn from '@/components/addproperty/userTypeForm/SelectBtn'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegUser } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { Button } from '@nextui-org/react';
import { fetchUserData, updateUserData } from '@/redux-store/features/globalState';
import { signInWithGoogle } from '@/redux-store/features/authSlice';
function index() {
  const dispatch = useDispatch()
  const [isChose, setChose] = useState(false);
  // const userInfo = useSelector((state) => state.GlobalState.userData);

  const language = useSelector((state) => state.GlobalState.languageIs);
  const [useType, setUserType] = useState("");
  const selectUserType = (userType) => {
    setUserType(userType);
    setChose(true);
    console.log("jsonToken");
    console.log(isChose);
  };
  const router = useRouter()
  const token = router.query.token;

  const decryptionToken = (token) => {
    try {
      const base46Url = token.split('.')[1];
      const base64 = decodeURIComponent(atob(base46Url).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''))
      return JSON.parse(base64)
    } catch (error) {
      return {}
    }

  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (token && useType) {
      const response = decryptionToken(token)
      console.log(response);
      const formData = new FormData();
      formData.append("typeOfUser", useType);
      if (response.newUser?._id) {
        dispatch(signInWithGoogle(router.query.token))
        dispatch(fetchUserData())
        dispatch(updateUserData({
          userID: response?.newUser?._id,
          userUpdate: formData,
        })
        );
        console.log("after checked from decryptionToken");
      } else console.log("after checked Error");

      console.log("after call api decryptionToken");
    }
  };

  return (
    <div className='w-full h-screen text-center justify-center flex items-center '>
      {decryptionToken(token).userType}
      <form
        onSubmit={onSubmit}
        className=" space-y-10 md:space-y-16 flex-col items-center flex  "
      >
        <h1 className="text-3xl md:text-5xl text-center font-semibold">
          {language ? "حدد من انت ؟" : "You Are?"}
        </h1>
        <div className="flex md:flex-row flex-col gap-3 items-stretch">
          <SelectBtn
            btnUserType={"individual"}
            title={language ? "فرد" : "individual"}
            description={"أنت مالك عقار وتتطلع إلى إدراجه للإيجار أو البيع."}
            onSelect={selectUserType}
            icon={<FaRegUser className="text-4xl md:text-7xl text-darkGreen" />}
            useType={useType}
          />
          <SelectBtn
            btnUserType={"broker"}
            title={language ? "سمسار" : "Broker"}
            description={
              " أنت سمسار يربط أصحاب العقارات بالمشترين والمستأجرين المحتملين"
            }
            onSelect={selectUserType}
            icon={
              <FaRegHandshake className="text-4xl md:text-7xl text-darkGreen" />
            }
            useType={useType}
          />
          <SelectBtn
            btnUserType={"company"}
            title={language ? "مطور" : "Developer"}
            description={"أنت تمثل شركة وساطة عقارية أو منظمة تطوير."}
            onSelect={selectUserType}
            icon={
              <BsBuildings className="text-4xl md:text-7xl text-darkGreen" />
            }
            useType={useType}
          />
        </div>
        <Button
          isDisabled={!isChose}
          className=" w-full md:w-80 bg-lightGreen p-3 py-8 text-xl font-semibold text-white mx-auto hover:bg-lightGreenHover"
          type="submit"
        >
          {language ? "التالى" : "Next"}
        </Button>
      </form>
    </div>
  )
}
export default index