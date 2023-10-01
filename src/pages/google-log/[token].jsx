import { signInWithGoogle } from '@/redux-store/features/authSlice'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function index() { 
     const dispatch=useDispatch()

  const router=useRouter()
  useEffect(() => {
    dispatch(signInWithGoogle(router.query.token))
    router.push("/")
  }, [router])
  
  // console.log(router.query.token);
  // if (router.query.token) {
  //   localStorage.setItem("userToken",JSON.stringify(router.query.token))
  //   localStorage.setItem("userIsLogin",true)
  //   router.push("/")
  // }
  return (
    <div className='w-full h-screen text-center justify-center flex items-center bg-gray-200'>
       waiting... 
    </div>
  )
}

export default index