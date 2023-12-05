import { Avatar } from "@nextui-org/react";

const UserData = () => {
  return (
    <section className="p-5 bg-gray-100 rounded-md w-full">
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <Avatar src={null} className="w-28 h-28 text-large" />
        <div>
          <p className="text-xl font-semibold">Abdelrahman Mostafa</p>
          <p>@Abdelrahmanmostafa123</p>
        </div>
      </div>
    </section>
  );
};

export default UserData;
