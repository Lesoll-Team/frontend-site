import TablePropertiesUser from "@/Shared/Table/TablePropertiesUser";

const cols = [
  { name: "Title", uid: "title" },
  { name: "Price", uid: "price" },
  { name: "Traffic", uid: "seen" },
  { name: "Location", uid: "location" },
  { name: "Status", uid: "status" },
  // { name: "Package", uid: "package" },
];
const UserFreeProperties = ({ freeProperties }) => {
  return (
    <div>
      <h2>Free Properties available</h2>
      <TablePropertiesUser data={freeProperties} cols={cols} />
    </div>
  );
};
export default UserFreeProperties;
