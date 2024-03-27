import UserData from "./userInfo/UserData";
import UserLog from "./userInfo/UserLog";
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
    <div className="sm:max-w-[1800px]  px-2  mx-auto my-3 space-y-5">
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
      <UserProperties
        invstNum={invstNum}
        totalPropNum={totalPropNum}
        rentNum={rentNum}
        saleNum={saleNum}
        deletedNum={deletedNum}
      />
      {visitedPages && (
        <UserLog userData={userData} visitedPages={visitedPages} />
      )}
    </div>
  );
};
export default UserDetails;
