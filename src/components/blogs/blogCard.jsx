import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from 'next/link';

function BlogCard({blogData}) {    
      return (
        <div className="gap-10 grid grid-cols-1  md:grid-cols-3 ">
          {blogData.map((item) => (
            <Link href={`/blogs/${item._id}`}>
            <Card className='' shadow="sm" key={item._id} isPressable 
            // onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  height="100%"
                  alt={item.title.ar}
                  className=" object-cover "
                  src={item.BlogImage}
                />
              </CardBody>
              <CardFooter className="text-small justify-center">
              <div>         <b className='text-lightGreen text-xl'>{item.title.ar}</b>
              </div>
              </CardFooter>
            </Card>
            </Link>  ))}
        </div>
      );
}

export default React.memo(BlogCard)