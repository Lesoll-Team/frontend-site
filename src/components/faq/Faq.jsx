import { useState } from "react";
import { useSelector } from "react-redux";

import FaqCard from "./FaqCard";
import FaqSkeleton from "./FaqSkeleton";
const Faq = ({ faqData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [selectedQuestion, setSelectedQuestion] = useState("");
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
                      key={item._id}
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
                      key={item._id}
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
                      key={item._id}
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
