import React from "react";
import UserRow from "./UserRow";
import NoItems from "../../user/userProperties/NoItems";
import { useSelector } from "react-redux";

const RenderUsers = ({ users }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div>
      {users && users.length > 0 ? (
        users.map((user, index) => {
          const odd = (index + 1) % 2;
          return <UserRow data={user?.userId} key={user?._id} odd={odd} />;
        })
      ) : (
        <NoItems
          title={language ? "لا يوجد عملاء إلى الان" : "There are no users yet"}
        />
      )}
    </div>
  );
};

export default RenderUsers;
