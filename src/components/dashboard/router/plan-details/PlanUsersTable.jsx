import TableUserPackage from "@/Shared/Table/TableUserPackage";

const PlanUsersTable = ({ planDetails }) => {
  const cols = [
    { name: "Name", uid: "userFullname" },
    { name: "Phone", uid: "userPhoneNumber" },
    { name: "Email", uid: "userEmail" },
    { name: "Created", uid: "createdAt" },
    { name: "Expire", uid: "expireDate" },
  ];
  return (
    <div className="md:container md:mx-auto grid gap-10">
      <div className="bg-white p-5 rounded-md grid gap-5">
        <h1>Available Bundle</h1>
        <TableUserPackage data={planDetails?.usersContinuous} cols={cols} />
      </div>
      <div className="bg-white p-5 rounded-md grid gap-5">
        <h1>Expire Bundle</h1>
        <TableUserPackage data={planDetails?.usersEnd} cols={cols} />
      </div>
    </div>
  );
};
export default PlanUsersTable;
