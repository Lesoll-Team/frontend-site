import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function PropertyImgSlider() {
  return (
    <div className='  p-1 '>
    <Carousel showArrows={true} className='w-11/12 '>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/035-1170x785.jpg" className='rounded-lg' />
    </div>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/036-592x444.jpg"  className='rounded-lg'/>
    </div>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/045-592x444.jpg" className='rounded-lg'/>
    </div>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/030-592x444.jpg" className='rounded-lg'/>
    </div>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/012-592x444.jpg" className='rounded-lg'/>
    </div>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/008-592x444.jpg" className='rounded-lg'/>
    </div>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/012-592x444.jpg" className='rounded-lg'/>
    </div>
      <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/018-592x444.jpg" className='rounded-lg'/>
    </div> 
     <div>
        <img src="https://demo01.houzez.co/wp-content/uploads/2016/03/045-592x444.jpg" className='rounded-lg' loading='lazy'/>
    </div>
</Carousel>
</div>

  )
}



