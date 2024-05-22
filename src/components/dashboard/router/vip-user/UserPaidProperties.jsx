import TablePropertiesUser from "@/Shared/Table/TablePropertiesUser";
const cols = [
  { name: "Title", uid: "title" },
  { name: "Price", uid: "price" },
  { name: "Traffic", uid: "seen" },
  { name: "Location", uid: "location" },
  { name: "Status", uid: "status" },
  { name: "Package", uid: "package" },
];
const UserPaidProperties = ({ paidProperties }) => {
  return (
    <div>
      <h2>Properties Paid</h2>
      <TablePropertiesUser data={paidProperties} cols={cols} />
    </div>
  );
};
export default UserPaidProperties;
