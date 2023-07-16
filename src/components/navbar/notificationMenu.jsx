import React, { Fragment, useState } from 'react'
import Link from 'next/link';
import {  IoCheckmarkDoneSharp ,IoRadioButtonOnOutline} from "react-icons/io5";


export default function NotificationMenu() {



    const notifications =[
        {href:'/',title:"محل بسنتر النخيل ٣٠ متر موقع مميز ",location:"الجيزه",address:"فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110",id:1,visidet:false},
        {href:'/',title:"محل بسنتر النخيل ٣٠ متر موقع مميز ",location:"الجيزه",address:"فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110",id:2,visidet:false},
        {href:'/',title:"محل بسنتر النخيل ٣٠ متر موقع مميز ",location:"الجيزه",address:"فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110",id:3,visidet:true},
        {href:'/',title:"محل بسنتر النخيل ٣٠ متر موقع مميز ",location:"الجيزه",address:"فيلا Z6-2B نيوم، قسم ثان 6 أكتوبر، الجيزة 3227110",id:4,visidet:true},
    ]


    

  return (
   <Fragment>
{notifications.map(
    (notification)=>(
        <Link key={notification.id} href={notification.href}>
        <ul  className="  flex-col p-3 rounded-3xl my-3 drop-shadow-xl bg-white w-full ">
            <li className="text-lightGreen text-lg "><h2 className="truncate"> <b>{notification.title}</b></h2></li>

            <ul className="flex ">
                <li className="w-9/12 text-lightGreen text-md">{notification.location}</li>
                <li className="flex w-3/12 justify-end"> {notification.visidet? ( <IoCheckmarkDoneSharp className="text-lightGreen"/> ) : (<IoRadioButtonOnOutline className="text-darkOrange"/>)} </li>
            </ul>

            <li className="text-sm text-gray-500"><h5 className="truncate ">  {notification.address}</h5></li>

        </ul>
        </Link>
    )
)

}
   </Fragment>
  )
}
