import { sendResetNewPassword } from '@/utils/userAPI';
import { Button, Input } from '@nextui-org/react'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BiShow } from 'react-icons/bi'
import { GoEyeClosed } from 'react-icons/go'

function ResetPassword() {
  const router=useRouter()
// console.log(router.query.token);
    const [isVisible, setIsVisible] = React.useState(false);
const [password,setPassword]=useState("")
const [confirmPassword,setConfirmPassword]=useState("")
    const toggleVisibility = () => setIsVisible(!isVisible);
    //sendResetNewPassword
    const handleChangePassword=async(e)=>{
      e.preventDefault()

      if (password===confirmPassword) {
const token=router.query.token

    const userNewPassword = { token, password };

     const data =await sendResetNewPassword(userNewPassword)
      if (data.code==200) {
      router.push("/signin")
      }else{
      // console.log("error after");
    }
      }else{
      // console.log("error");
    }
      // console.log("done");

    }
  return (
    <div
    className='md:w-5/12 sm:10/12 w-full  bg-gray-200 rounded-xl  p-5'
    >
        <div className='md:text-4xl text-3xl text-center mb-5 text-lightGreen font-black'>Change Password</div>
        <form onSubmit={handleChangePassword} className=''>
        <div>
            <Input 
            onChange={(e)=>setPassword(e.target.value)}
                        className={`block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2`}
            placeholder='New Password'
            name='new-password'
            type={isVisible ? "text" : "password"}
              endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <BiShow className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <GoEyeClosed className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      } />
        </div>
        <div>
            <Input 
            onChange={(e)=>setConfirmPassword(e.target.value)}
name='confirm-password'
             className={`block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2`}
            placeholder='Confirm Password'
            type={isVisible ? "text" : "password"}
              endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <BiShow className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <GoEyeClosed className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      } />
        </div>
        <div className=' w-full flex items-center justify-center'>
          <Button type='submit' className='w-4/12 bg-lightOrange text-white'> Confirm </Button>
        </div>
        </form> 
    </div>
  )
}

export default ResetPassword