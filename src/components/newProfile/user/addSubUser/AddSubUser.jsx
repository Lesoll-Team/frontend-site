import ProfileLayout from "@/pages/profile/ProfileLayout";
import AddUserForm from "./AddUserForm";
import UsersTable from "./UsersTable";

const AddSubUser = () => {
  return (
    <ProfileLayout hideHeader={true}>
      <div className="space-y-16 ">
        <AddUserForm />
        <UsersTable />
      </div>
    </ProfileLayout>
  );
};
export default AddSubUser;
