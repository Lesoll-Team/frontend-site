import { signInWithGoogle } from '@/redux-store/features/authSlice'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function index() { 
     const dispatch=useDispatch()
     const language = useSelector((state) => state.GlobalState.languageIs);

  const router=useRouter()
  useEffect(() => {
    dispatch(signInWithGoogle(router.query.token))
    router.push("/")
  }, [router])
  return (
    <div className='w-full h-screen text-center justify-center flex items-center '>
       <span className='text-default-500'>{language?"في انتظار المصادقة ...":"Waiting for authentication..."}</span>
    </div>
  )
}
export default index