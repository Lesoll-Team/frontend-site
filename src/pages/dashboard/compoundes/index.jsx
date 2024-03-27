import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import AddCompounds from "@/components/dashboard/router/compoundes/AddCompounds";
import EditProject from "@/components/dashboard/router/edit-project/components/EditProject";
import { getProject } from "@/components/dashboard/router/edit-project/redux/editProjectSlice";
import { getCompounds } from "@/redux-store/features/property/compoundSlice";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const project = useSelector((state) => state.editProject.project.data);
  const userInfo = useSelector((state) => state.userProfile.userData);
  const router = useRouter();
  useEffect(() => {
    if (userInfo && userInfo.isAdmin === false && userInfo.supAdmin === false) {
      router.push("/404");
    }
  }, [userInfo]);
  const compounds = useSelector((state) => state.compounds.data);

  const dispatch = useDispatch();
  useEffect(() => {
    const slug = router.query.slug;

    !compounds && dispatch(getCompounds(slug));
  }, [router]);

  return userInfo && (userInfo.isAdmin || userInfo.supAdmin) ? (
    <div className="min-h-[90dvh]  flex" dir="ltr">
      <Head>
        <title>Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="sticky top-0">
        <Sidebar />
      </div>
      <div
        dir={language ? "rtl" : "ltr"}
        className="overflow-x-auto w-full overflow-y-hidden"
      >
        <AddCompounds />
      </div>
    </div>
  ) : (
    <div className="w-full items-center min-h-[90dvh]  flex justify-center text-center">
      Loading...
    </div>
  );
};
export default index;
