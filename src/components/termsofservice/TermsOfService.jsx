import { memo } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const TermsOfService = () => {
  const [terms, setTerms] = useState([]);
  const getTerms = () => {
    try {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/admin/term/get`)
        .then((res) => {
          setTerms(res.data.terms);
          // console.log(res.data.terms);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(getTerms, []);
  return (
    <div className="container mx-auto py-10 mb-10 min-h-screen">
      <h2 className="text-6xl font-semibold  text-lightGreen">
        Terms Of Service
      </h2>
      <div className="text-lg space-y-10 mt-10">
        {terms.map((term, i) => {
          return (
            <p key={i} className="flex gap-2">
              <span className="text-lightGreen font-bold ">{i + 1 + "."} </span>
              {term.title.en}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default memo(TermsOfService);
