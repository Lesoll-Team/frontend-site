import React, { useCallback } from "react";
import AddPropertyProvider from "./context/AddMotorProvider";
import AddMotorForm from "./components/AddMotorForm";
import { useUser } from "@/Shared/UserContext";
import PageLoading from "@/Shared/ui/PageLoading";
import SignInToPost from "@/Shared/SignInToPost";

const AddMotor = () => {
  const { data, status } = useUser();
  console.log(status);
  const renderForm = useCallback(() => {
    switch (status) {
      case "loading":
        return <PageLoading />;
      case "succeeded":
        return <AddMotorForm />;
      case "failed":
        return <SignInToPost />;
      default:
        return <PageLoading />;
    }
  }, [status, data]);
  return <AddPropertyProvider>{renderForm()}</AddPropertyProvider>;
};

export default AddMotor;
