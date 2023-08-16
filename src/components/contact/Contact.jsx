import Image from 'next/image'
import React, { Fragment } from 'react'
export default function Contact() {
  return (
    <Fragment>

             <div className='md:container mt-14 mb-14 mx-auto md:flex '>
              
                <div className='md:w-7/12 '>
                <h1 className='text-6xl mb-5 text-lightGreen'><b>Contact</b></h1>
                <h6 className='text-lightGreen mb-5 ml-4'><b> Contact information </b></h6>
                    <form onSubmit='' className=''>
                    <center className="m-2">
                            <div className='m-2'  >
                                <input type='text' placeholder='Full name'
                                className='mr-1 placeholder:text-gray-500 focus:outline-none  w-[48%] focus:border-lightGreen border-2 rounded-full px-4 py-2'/>
                                                         <input type='email' placeholder='Email' 
                                    className='placeholder:text-gray-500 focus:outline-none  ml-1 w-[48%] focus:border-lightGreen border-2 rounded-full px-4 py-2'
                                />
                            </div>
                            <div className='m-2'>
                            <input type='number' placeholder='Phone'
                                    className='placeholder:text-gray-500 focus:outline-none  mr-1 w-[48%] focus:border-lightGreen  border-2 rounded-full px-4 py-2'
                                />
                              <input type='text' placeholder='Subject '
                                className='placeholder:text-gray-500 focus:outline-none ml-1 
                                 focus:border-lightGreen  border-2 rounded-full px-4 py-2 w-[48%]'
                            />

                            </div>
                            </center>
                            {/* <input type='' placeholder='Massage'/> */}
                            <center className=''>
                            <textarea placeholder='Massage'
                            className='placeholder:text-gray-500 focus:outline-none max-h-56 h-36  focus:border-lightGreen w-11/12 border-2 rounded-2xl px-4 py-2'></textarea>
                            <button onClick=''
                            className='rounded-3xl w-10/12  bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95'>
                            Submit</button>
                            </center>
                    </form>
                </div>
                <div className='w-5/12  p-2 md:flex hidden'>
                    <Image src="icons/contactImg.svg" width="500" height="500" alt='contact image' loading="lazy"/>
                </div>
             </div>

    </Fragment>
  )
}
