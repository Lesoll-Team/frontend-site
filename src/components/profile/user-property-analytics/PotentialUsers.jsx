import { useSelector } from "react-redux";
import NoItems from "../user/userProperties/NoItems";
import Image from "next/image";

const PotentialUsers = ({ users }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2>{language ? "العملاء المحتملين" : "Potential users"}</h2>
        <p>
          {language ? "بيانات العملاء المحتملين" : "Potential customer data"}
        </p>
      </div>
      <div>
        {users && users.length > 0 ? (
          users.map((user, index) => {
            const odd = (index + 1) % 2;
            return <UserRow data={user?.userId} key={user?._id} odd={odd} />;
          })
        ) : (
          <NoItems
            title={
              language
                ? "لا يوجد متفاعلين مع عقارك الى الان"
                : "There are no users interacting with your property yet"
            }
          />
        )}
      </div>
    </div>
  );
};

export default PotentialUsers;

const UserRow = ({ odd, data }) => {
  return (
    <div
      className={`py-4 px-3 flex justify-between md:flex-row flex-col  items-center ${odd ? "bg-[#F8F8F8]" : "bg-white"} `}
    >
      <div className="w-full flex gap-2 items-center">
        <Image
          width={40}
          height={40}
          src={data?.avatarUrl || "/user-avatar-placeholder.png"}
          alt={data?.fullname}
          className="rounded-full object-cover"
        />
        <p>{data?.fullname}</p>
      </div>
      <div className="w-full flex flex-wrap gap-3 md:justify-between items-center md:px-0 px-11">
        <p>{data?.email}</p>
        <p>{data?.code + data?.phone}</p>
      </div>
    </div>
  );
};
