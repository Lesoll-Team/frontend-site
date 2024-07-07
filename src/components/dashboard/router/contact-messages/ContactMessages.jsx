import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import {
  getContactMessages,
  getSingleContactMessages,
} from "@/utils/dashboardApi/contactMessageApi";
import { useEffect, useState } from "react";
import MessagesCard from "./MessagesCard";
import BodyMessage from "./BodyMessage";

const ContactMessages = () => {
  const [contact, setContact] = useState([]);
  const [messageSelected, setMessageSelected] = useState({});
  const [messageId, setMessageId] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactMessages = await getContactMessages();
        setContact(contactMessages.contact);
        setMessageId(contactMessages.contact[0]._id);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const message = await getSingleContactMessages({ messageId });
        setMessageSelected(message.Contacts);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [messageId]);
  return (
    <div dir="ltr" className="w-full flex">
      <div className="bg-white sticky top-0">
        <Sidebar />
      </div>
      <div
        dir="rtl"
        className="bg-gray-100 w-full md:container md:mx-[20px] mx-[20px] grid md:grid-cols-5 grid-cols-1 gap-x-7"
      >
        <div className=" md:col-span-2 col-span-1 px-4 ">
          <p className="p-4 ">عدد الرسائل {contact.length}</p>
          {contact?.map((message) => (
            <button
              className={`flex items-start space-x-4 p-4 w-full ${messageId == message._id && "border-lightGreenHover border-b-[6px] "} bg-white rounded-lg shadow-md mb-4 duration-150`}
              key={message._id}
              onClick={() => setMessageId(message._id)}
            >
              <MessagesCard messageId={messageId} message={message} />
            </button>
          ))}
        </div>

        <div className="md:block hidden col-span-3 w-full mx-auto sticky top-28  bg-white h-screen  shadow-lg rounded-lg overflow-hidden  mt-14 p-6">
          <BodyMessage messageSelected={messageSelected} />
        </div>
      </div>
    </div>
  );
};

export default ContactMessages;
