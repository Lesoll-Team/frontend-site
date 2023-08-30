import React from 'react'
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";

function BlogSinglePage({BlogData}) {
  // console.log(BlogData);
  return (
    <div>

                <Card className=' shadow-none p-5'>
                
                <CardBody className=' '>
                
                <Image
                  radius="lg"
                  width="100%"
                  alt={"item.title"}
                  className="w-full h-[450px] object-cover"
                  src={BlogData.getBlogs.BlogImage}
      
                />
                </CardBody>
                <CardHeader className=''>
                  <b className=' text-3xl text-lightGreen w-full  text-center rounded-2xl'>{BlogData.getBlogs.title.ar}</b>
                </CardHeader>
                
            
              <CardFooter className=''>      
                 <p dir={true?"rtl":"ltr"} className=' text-lg text-darkGray text-justify px-10 rounded-2xl'>
                 {
                  BlogData.getBlogs.description.ar
                 }
              </p>
              </CardFooter>
              </Card>
            
    </div>

  )
}

export default React.memo(BlogSinglePage)