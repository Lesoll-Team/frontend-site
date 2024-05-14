import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import { useUser } from "@/Shared/UserContext";
import AddProject from "@/components/dashboard/router/add-project/AddProject";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const router = useRouter();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data } = useUser();

  useEffect(() => {
    if (data && data.isAdmin === false && data.supAdmin === false) {
      router.push("/404");
    }
  }, [data]);
  return data && (data.isAdmin || data.supAdmin) ? (
    <div className="min-h-[90dvh]  flex" dir="ltr">
      <Head>
        <title>Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className=" sticky top-0">
        <Sidebar />
      </div>
      <div
        dir={language ? "rtl" : "ltr"}
        className="overflow-x-auto w-full overflow-y-hidden"
      >
        <AddProject />
      </div>
    </div>
  ) : (
    <div className="w-full items-center min-h-[90dvh]  flex justify-center text-center">
      Loading...
    </div>
  );
};
export default Index;
