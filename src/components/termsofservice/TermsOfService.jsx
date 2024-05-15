import { memo } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "@/Shared/axiosInterceptorInstance";

export const TermsOfService = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

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
      <h1 className="text-6xl font-semibold  ">
        {language ? "الشروط والأحكام" : "Terms Of Service"}
      </h1>
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
