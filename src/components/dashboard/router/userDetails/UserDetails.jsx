import UserData from "./userInfo/UserData";
import UserProperties from "./UserProperties";

const UserDetails = ({
  userData,
  favNum,
  deletedNum,
  invstNum,
  rentNum,
  saleNum,
  totalPropNum,
  visitedPages,
}) => {
  return (
    <div className="sm:max-w-[1800px] px-3 sm:px-2 mx-auto my-3 space-y-5">
      <UserData
        userData={userData}
        favNum={favNum}
        deletedNum={deletedNum}
        invstNum={invstNum}
        rentNum={rentNum}
        saleNum={saleNum}
        totalPropNum={totalPropNum}
        visitedPages={visitedPages}
      />
      <UserProperties />
    </div>
  );
};
export default UserDetails;
