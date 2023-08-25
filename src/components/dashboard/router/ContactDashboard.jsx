import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
// import EditModule from '../model/EditModule'
import DeleteModule from '../model/DeleteModule'
export default function App() {
  return (
    <Card className="max-w-[100%] my-5">
     
      {/* <Divider/> */}
      <CardHeader className="flex gap-3">
      <div>
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        </div>
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
        <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <div>
        <DeleteModule/>
      </div>
      </CardHeader>

    </Card>
  );
}
