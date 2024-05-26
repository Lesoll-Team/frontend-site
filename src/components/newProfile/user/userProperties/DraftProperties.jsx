import { useEffect, useState } from "react";
import ProfileCard from "../../profile-cards/ProfileCard";
import { useSelector } from "react-redux";
import NoItems from "./NoItems";
import { getDrafts } from "../../apis/profileApis";
import DraftCard from "../../profile-cards/DraftCard";

const DraftProperties = () => {
  const [drafts, setDrafts] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [apiStatus, setApiStatus] = useState("idle");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const getProperties = () => {
    getDrafts({ setApiStatus, setDrafts, setServerError });
  };
  useEffect(() => {
    getProperties();
  }, []);
  const type = language ? "مسودة" : "Draft";

  return (
    <div className="flex flex-wrap gap-6 lg:justify-start justify-center lg:gap-12">
      {apiStatus === "success" ? (
        drafts.draftRealty.length > 0 ? (
          drafts.draftRealty.map((item) => {
            return (
              <DraftCard data={item} />
              // <ProfileCard
              //   paymentDisabled={true}
              //   getProperties={getProperties}
              //   data={item}
              //   key={item?._id}
              //   type={type}
              // />
            );
          })
        ) : (
          <NoItems
            title={language ? "لا توجد اعلانات قيد الراجعة" : "No Pending Ads"}
          />
        )
      ) : (
        <>
          {" "}
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </>
      )}
    </div>
  );
};
export default DraftProperties;
