import TablePackageUser from "@/Shared/Table/TablePackageUser";
const cols = [
  { name: "Name", uid: "PaymentEn" },
  { name: "Price", uid: "price" },
  { name: "Repost", uid: "repostNumber" },
  { name: "Pin", uid: "pinNumber" },
  { name: "Expire Date ", uid: "expireDate" },
  { name: "Invoice ", uid: "invoice" },
  { name: "Order ID", uid: "order_id" },
];
const UserPackageExpire = ({ packageExpire }) => {
  return (
    <div>
      <h2>Package expire</h2>
      <TablePackageUser data={packageExpire} cols={cols} />
    </div>
  );
};
export default UserPackageExpire;