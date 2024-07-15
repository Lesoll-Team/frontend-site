import UserGift from "./UserGift";
import UserData from "./userInfo/UserData";
import UserLog from "./userInfo/UserLog";
import UserPayment from "./UserPayment";
import UserProperties from "./UserProperties";

const UserDetails = ({
  userData,
  favNum,
  deletedNum,
  bundleVIP,
  invstNum,
  rentNum,
  saleNum,
  totalPropNum,
  visitedPages,
  makeAction,
  setMakeAction,
}) => {
  return (
    <div className="sm:max-w-[1800px]  px-2  mx-auto my-3 space-y-5">
      <UserData
        makeAction={makeAction}
        setMakeAction={setMakeAction}
        userData={userData}
        favNum={favNum}
        deletedNum={deletedNum}
        invstNum={invstNum}
        rentNum={rentNum}
        saleNum={saleNum}
        totalPropNum={totalPropNum}
        visitedPages={visitedPages}
      />
      <UserPayment userData={userData} />
      <UserGift bundleVIP={bundleVIP} userData={userData} />
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
