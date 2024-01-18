import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaq } from "@/redux-store/features/faqSlice";
import FaqCard from "./FaqCard";
import FaqSkeleton from "./FaqSkeleton";
const Faq = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const faqData = useSelector((state) => state.faq.faqData);
  const dispatch = useDispatch();
  const [selectedQuestion, setSelectedQuestion] = useState("");
  useEffect(() => {
    if (!faqData) {
      dispatch(getFaq());
    }
  }, []);

  return (
    <div className="py-10 min-h-screen">
      <div className="container mx-auto space-y-7">
        <h1 className="text-2xl font-medium">
          {language ? " الأسئلة الشائعة" : "Frequently asked questions"}
        </h1>
        <main className="space-y-8">
          <section className="space-y-3">
            <h3 className="text-xl text-darkGreen font-medium">
              {language ? "عامة" : "General"}
            </h3>
            {faqData ? (
              faqData.getQ_A.map((item) => {
                if (item.related === "General") {
                  return (
                    <FaqCard
                      faq={item}
                      selected={selectedQuestion}
                      setSelected={setSelectedQuestion}
                    />
                  );
                }
              })
            ) : (
              <div className="space-y-4">
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
              </div>
            )}
          </section>
          <section className="space-y-3">
            <h3 className="text-xl text-darkGreen font-medium">
              {language ? "مالك / سمار" : "Owner / Broker"}
            </h3>
            {faqData ? (
              faqData.getQ_A.map((item) => {
                if (item.related === "Owner/Broker") {
                  return (
                    <FaqCard
                      faq={item}
                      selected={selectedQuestion}
                      setSelected={setSelectedQuestion}
                    />
                  );
                }
              })
            ) : (
              <div className="space-y-4">
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
              </div>
            )}
          </section>
          <section className="space-y-3">
            <h3 className="text-xl text-darkGreen font-medium">
              {language ? " مشتري / مستأجر" : "Buyer / Renter"}
            </h3>
            {faqData ? (
              faqData.getQ_A.map((item) => {
                if (item.related === "Renter/Buyer") {
                  return (
                    <FaqCard
                      faq={item}
                      selected={selectedQuestion}
                      setSelected={setSelectedQuestion}
                    />
                  );
                }
              })
            ) : (
              <div className="space-y-4">
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};
export default Faq;
