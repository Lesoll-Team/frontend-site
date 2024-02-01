import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useSelector } from "react-redux";
import axios from "axios";
const Faq = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [qType, setQType] = useState("general");

  const setGeneral = () => {
    setQType("general");
  };
  const setOwner = () => {
    setQType("owner");
  };
  const setBuyer = () => {
    setQType("buyer");
  };

  const [faq, setFaq] = useState([]);
  const [generalFaq, setGeneralFaq] = useState([]);
  const [ownerFaq, setOwnerFaq] = useState([]);
  const [buyerFaq, setBuyerFaq] = useState([]);
  const getFaq = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/admin/QandA/getall`)
        .then((res) => {
          setFaq(res.data.getQ_A);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFaq();
  }, []);
  useEffect(() => {
    setGeneralFaq(faq.filter((faq) => faq.related === "General"));
    setOwnerFaq(faq.filter((faq) => faq.related === "Owner/Broker"));
    setBuyerFaq(faq.filter((faq) => faq.related === "Renter/Buyer"));
  }, [faq]);
  // const fun = async () => {
  //   const fromDate = "2023-01-01"; // Replace with your actual from date
  //   const toDate = "2023-02-01"; // Replace with your actual to date

  //   try {
  //     // Make a GET request to your Node.js backend
  //     const response = await axios.get(
  //       ` http://ec2-3-87-159-22.compute-1.amazonaws.com:9000/api/admin/generated/generated-user-excel?from=${fromDate}&to=${toDate}`,
  //       { responseType: "arraybuffer" } // Set responseType to 'arraybuffer' to handle binary data
  //     );

  //     // Create a blob from the binary data
  //     const blob = new Blob([response.data], {
  //       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //     });

  //     // Create a download link and trigger the download
  //     const link = document.createElement("a");
  //     link.href = window.URL.createObjectURL(blob);
  //     link.download = "userData.xlsx";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.error("Error downloading Excel file:", error);
  //     // Handle the error as needed
  //   }
  // };

  return (
    <div className="py-10 min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center space-y-3">
          <img
            width={"auto"}
            height={"auto"}
            className="md:w-[40%]  "
            src={"/faq.svg"}
            alt="FAQ"
          />
          <h1 className="text-darkGreen font-semibold text-5xl md:text-8xl md:w-1/2 text-center">
            {language ? "الأسئلة الشائعة" : "FAQ"}
          </h1>
        </div>
        <div className="w-[%] md:w-[80%] mx-auto flex justify-center bg-white drop-shadow-xl border-lightGreen rounded-full overflow-hidden border  ">
          <button
            onClick={setGeneral}
            className={`text-center cursor-pointer px-5  border-r-0 border-lightGreen text-xs sm:text-xl w-[33.3%] py-2 md:hover:bg-lightGreen md:hover:text-white font-semibold text-darkGreen duration-200 ${
              qType === "general" && "bg-lightGreen text-white"
            }`}
          >
            {language ? "عامة" : "General"}
          </button>
          <button
            onClick={setOwner}
            className={`text-center cursor-pointer px-5 border-x border-lightGreen text-xs sm:text-xl w-[33.3%] py-2 md:hover:bg-lightGreen md:hover:text-white font-semibold text-darkGreen duration-200 ${
              qType === "owner" && "bg-lightGreen text-white"
            }`}
          >
            {language ? "مالك / سمسار" : "Owner / Broker"}
          </button>
          <button
            onClick={setBuyer}
            className={`text-center cursor-pointer px-5   text-xs sm:text-xl w-[33.3%] py-2 md:hover:bg-lightGreen md:hover:text-white font-semibold text-darkGreen duration-200 ${
              qType === "buyer" && "bg-lightGreen text-white"
            }`}
          >
            {language ? "مشترى/مستأجر" : "Buyer / Renter"}
          </button>
        </div>
        <div dir="rtl" className="my-7 ">
          <Accordion variant="splitted">
            {qType === "general" &&
              generalFaq.map((item) => {
                return (
                  <AccordionItem
                    className="py-3"
                    key={item._id}
                    aria-label={item._id}
                    title={
                      language ? `${item?.question.ar}` : `${item?.question.en}`
                    }
                  >
                    {item.answers.map((answer, index) => {
                      return (
                        <p key={index} className="my-1">
                          {language ? answer.ar : answer.en}
                        </p>
                      );
                    })}
                  </AccordionItem>
                );
              })}
            {qType === "owner" &&
              ownerFaq.map((item) => {
                return (
                  <AccordionItem
                    className="py-3"
                    key={item._id}
                    aria-label={item._id}
                    title={
                      language ? `${item?.question.ar}` : `${item?.question.en}`
                    }
                  >
                    {item.answers.map((answer, index) => {
                      return (
                        <p key={index} className="my-1">
                          {language ? answer.ar : answer.en}
                        </p>
                      );
                    })}
                  </AccordionItem>
                );
              })}
            {qType === "buyer" &&
              buyerFaq.map((item) => {
                return (
                  <AccordionItem
                    className="py-3"
                    key={item._id}
                    aria-label={item._id}
                    title={
                      language ? `${item?.question.ar}` : `${item?.question.en}`
                    }
                  >
                    {item.answers.map((answer, index) => {
                      return (
                        <p key={index} className="my-1">
                          {language ? answer.ar : answer.en}
                        </p>
                      );
                    })}
                  </AccordionItem>
                );
              })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Faq);
