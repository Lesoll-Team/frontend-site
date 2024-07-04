import { useEffect, useState, memo } from "react";
import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { useTranslation } from "next-i18next";
import { getLangBoolean } from "@/utils/getLangBoolean";

export const TermsOfService = () => {
  const language = getLangBoolean();
  const { t } = useTranslation("common");

  const [terms, setTerms] = useState([]);
  const getTerms = () => {
    try {
      axiosInstance.get(`/admin/term/get`).then((res) => {
        setTerms(res.data.terms);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(getTerms, []);
  return (
    <div className="container mx-auto py-10 mb-10 min-h-screen">
      <h1 className="text-6xl font-semibold  ">{t("Terms_Page.TOS")}</h1>
      <div className="text-lg space-y-10 mt-10">
        {terms.map((term, i) => {
          return (
            <p key={i} className="flex gap-2">
              <span className="text-lightGreen font-bold ">{i + 1 + "."} </span>
              {language ? term.title.ar : term.title.en}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default memo(TermsOfService);
