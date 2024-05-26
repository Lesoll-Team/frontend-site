import TablePackageUser from "@/Shared/Table/TablePackageUser";

const cols = [
  { name: "Name", uid: "PaymentEn" },
  { name: "Price", uid: "price" },
  { name: "Repost", uid: "repostNumber" },
  { name: "Pin", uid: "pinNumber" },
  { name: "Expire Date ", uid: "expireDate" },
  { name: "Invoice ", uid: "invoice" },
];

const UsersPackageAvailable = ({ packageAvailable }) => {
  console.log("packageAvailable::>>", packageAvailable);

  return (
    <div>
      <h2>Package available</h2>
      <TablePackageUser data={packageAvailable} cols={cols} />
    </div>
  );
};
export default UsersPackageAvailable;
