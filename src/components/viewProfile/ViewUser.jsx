import useContactLinks from "@/Hooks/useContactLinks";
import Image from "next/image";
import { useSelector } from "react-redux";
import UserProperties from "./UserProperties";
import {
  FaEdit,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useEffect, useState } from "react";
import { editUserInfoProfile } from "@/utils/dashboardApi/userDashbordAPI";
import { useRouter } from "next/router";
import { LuLoader2 } from "react-icons/lu";
import { useUser } from "@/Shared/UserContext";
const ViewUser = ({ user, properties, params, loading }) => {
  const { data } = useUser();

  const router = useRouter();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [loadingBio, setLoadingBio] = useState(false);
  const [loadingWorkingHours, setLoadingWorkingHours] = useState(false);
  const [loadingCompanyAddress, setLoadingCompanyAddress] = useState(false);
  const [addBio, setAddBio] = useState(user.getUser.Bio || "");
  const [addWorkingHours, setAddWorkingHours] = useState(
    user.getUser.workingHours || "",
  );
  const [addCompanyAddress, setAddCompanyAddress] = useState(
    user.getUser.companyAddress || "",
  );
  const [socialLinks, setSocialLinks] = useState({
    instagramLink: user.getUser.instagramLink || "",
    faceLink: user.getUser.faceLink || "",
    tiktokLink: user.getUser.tiktokLink || "",
    xLink: user.getUser.xLink || "",
    linkedInLink: user.getUser.linkedInLink || "",
  });
  const [editSocialLinks, setEditSocialLinks] = useState(false);
  const [loadingSocialLinks, setLoadingSocialLinks] = useState(false);

  const [editBio, setEditBio] = useState(false);
  const [editWorkingHours, setEditWorkingHours] = useState(false);
  const [editCompanyAddress, setEditCompanyAddress] = useState(false);

  const isAdmin = !!(data?.superAdmin || data?.isAdmin);
  const isPassBio = !!(user.getUser.Bio || isAdmin);
  const isPassWorkingHours = !!(user?.getUser?.workingHours || isAdmin);
  const isPassCompanyAddress = !!(user.getUser.companyAddress || isAdmin);
  const socialMedia = !!(
    user.getUser?.instagramLink ||
    user.getUser?.faceLink ||
    user.getUser?.tiktokLink ||
    user.getUser?.xLink ||
    user.getUser?.linkedInLink
  );

  const phoneNumber = user.getUser.code + user.getUser.phone;
  const { CallLinkBtn, WhatappLinkBtn } = useContactLinks({
    phoneNumber: phoneNumber,
  });
  const contactSocialMedia = [
    {
      icon: <FaFacebookF className="bg-blue-500 text-white sm:p-2 p-1" />,
      link: user.getUser?.faceLink,
      title: "Facebook",
      id: 1,
    },
    {
      icon: (
        <FaInstagram className=" sm:p-2 p-1 bg-gradient-to-tr from-amber-500 from-20%  via-pink-600 via-60% to-blue-800 to-1% text-white  " />
      ),
      link: user.getUser?.instagramLink,
      title: "Instagram",
      id: 2,
    },

    {
      icon: <BsTwitterX className="sm:p-2 p-1 bg-black text-white " />,
      link: user.getUser?.xLink,
      title: "twitter",
      id: 5,
    },
    {
      icon: <FaLinkedinIn className="sm:p-2 p-1 bg-[#007AB9] text-white  " />,
      link: user.getUser?.linkedInLink,
      title: "linkedin",
      id: 4,
    },
    {
      icon: <FaTiktok className="sm:p-2 p-1 bg-black text-white  " />,
      title: "Tiktok",
      link: user.getUser?.tiktokLink,
      id: 6,
    },
  ].filter((social) => social.link);
  const handleChangeUserBio = (e) => {
    e.preventDefault();
    editUserInfoProfile({
      changesData: { Bio: addBio },
      userId: user.getUser._id,
    }).then(() => {
      setEditBio(false);

      setLoadingBio(true);
      router.push(router.asPath);
    });
  };
  const handleChangeUserWorkingHours = (e) => {
    e.preventDefault();
    editUserInfoProfile({
      changesData: { workingHours: addWorkingHours },
      userId: user.getUser._id,
    }).then(() => {
      setEditWorkingHours(false);
      setLoadingWorkingHours(true);
      router.push(router.asPath);
    });
  };
  const handleChangeUserCompanyAddress = (e) => {
    e.preventDefault();
    editUserInfoProfile({
      changesData: { companyAddress: addCompanyAddress },
      userId: user.getUser._id,
    }).then(() => {
      setEditCompanyAddress(false);

      setLoadingCompanyAddress(true);
      router.push(router.asPath);
    });
  };

  const handleChangeSocialLinks = (e) => {
    e.preventDefault();
    editUserInfoProfile({
      changesData: socialLinks,
      userId: user.getUser._id,
    }).then(() => {
      setEditSocialLinks(false);
      setLoadingSocialLinks(true);
      router.push(router.asPath);
    });
  };

  useEffect(() => {
    setLoadingBio(false);
    setLoadingWorkingHours(false);
    setLoadingCompanyAddress(false);
    setLoadingSocialLinks(false);
  }, [router]);
  console.table([
    { isAdmin: isAdmin },
    { editBio: editBio },
    { isPassBio: isPassBio },
    { isPassWorkingHours: isPassWorkingHours },
    { socialMedia: socialMedia },
    { isPassCompanyAddress: isPassCompanyAddress },
    { loadingBio: loadingBio },
  ]);
  return (
    <div className="container mx-auto py-5 md:py-20 space-y-6 md:space-y-20">
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div className="flex gap-4 md:gap-8 items-center">
          <Image
            width={140}
            height={140}
            alt={user.getUser?.fullname}
            src={user.getUser?.avatarUrl || "/user-avatar-placeholder.png"}
            blurDataURL="data:image/webp;base64,UklGRk4CAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggYAAAAJAHAJ0BKoIAggA/mczgarkyLSigaAMgMwlpbt0AAd0OqpNkzFd98tVUTEPEwk5mhh7Do418cDIHKkdhHffmT6r0ZeseAAD+5YKZPucJxphPwy/sQxCV9xMpm0g/qAAAAA=="
            placeholder="blur"
            quality={80}
            loading="lazy"
            className="rounded-full object-cover w-[50px] h-[50px] md:w-[140px] md:h-[140px]"
          />
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="text-sm md:text-2xl font-bold">
              {user.getUser?.fullname}
            </h1>
            <p className="text-xs md:text-xl text-lightGreen font-bold">
              {user.resultConfirmed}{" "}
              {language ? "عدد العقارات" : "Properties numbers"}
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 ">
          <CallLinkBtn
            className={
              "flex items-center md:px-14 text-xl  max-w-[250px] gap-5  py-2 rounded bg-lightNeutral text-[#5F98D1]"
            }
          />
          <WhatappLinkBtn
            className={
              "flex items-center md:px-14 text-xl  max-w-[250px]  gap-5 py-2 rounded bg-[#39AE41] text-white"
            }
          />
        </div>
      </div>
      <div className="space-y-6  md:space-y-8">
        {isPassBio && (
          <div className="space-y-3">
            <div className="flex items-center">
              <h3 className="text-base md:text-2xl font-bold text-darkGray">
                {language ? "عن" : "About"}
              </h3>
              {isAdmin && (
                <>
                  {editBio && (
                    <div className="flex gap-4 mx-4">
                      <button
                        className="bg-red-600 px-3 text-white font-bold p-1 rounded-md"
                        onClick={() => {
                          setEditBio(false);

                          setAddBio("");
                        }}
                      >
                        Close
                      </button>
                      <button
                        className="bg-green-600 p-1 text-white font-bold px-3 rounded-md"
                        onClick={handleChangeUserBio}
                      >
                        Edit
                      </button>
                    </div>
                  )}

                  <button onClick={() => setEditBio(true)} className="w-fit ">
                    {loadingBio ? (
                      <LuLoader2 className="animate-spin text-xl" />
                    ) : (
                      <FaEdit className="mx-4 text-base md:text-2xl" />
                    )}
                  </button>
                </>
              )}
            </div>
            {editBio && isAdmin ? (
              <textarea
                value={addBio}
                className="w-full border-1.5 min-h-[150px] max-h-[300px] rounded-md p-3"
                onChange={(e) => setAddBio(e.target.value)}
              />
            ) : (
              <p className="text-sm md:text-xl text-baseGray">
                {user.getUser.Bio}
              </p>
            )}
          </div>
        )}
        {isPassWorkingHours && (
          <div className="space-y-3">
            <div className="flex items-center">
              <h4 className="text-base md:text-2xl font-bold text-darkGray">
                {language ? "مواعيد العمل" : "Working Hours"}
              </h4>
              {isAdmin && (
                <>
                  {editWorkingHours && (
                    <div className="flex gap-4 mx-4">
                      <button
                        className="bg-red-600 px-3 text-white font-bold p-1 rounded-md"
                        onClick={() => {
                          setEditWorkingHours(false);
                          setAddWorkingHours("");
                        }}
                      >
                        Close
                      </button>
                      <button
                        className="bg-green-600 p-1 text-white font-bold px-3 rounded-md"
                        onClick={handleChangeUserWorkingHours}
                      >
                        Edit
                      </button>
                    </div>
                  )}
                  <button
                    onClick={() => setEditWorkingHours(true)}
                    className="w-fit "
                  >
                    {loadingWorkingHours ? (
                      <LuLoader2 className="animate-spin text-xl" />
                    ) : (
                      <FaEdit className="mx-4 text-base md:text-2xl" />
                    )}
                  </button>
                </>
              )}
            </div>
            {editWorkingHours ? (
              <input
                value={addWorkingHours}
                className="w-full border-1.5 rounded-md p-3"
                onChange={(e) => setAddWorkingHours(e.target.value)}
              />
            ) : (
              <p className="text-sm md:text-xl text-baseGray">
                {user.getUser?.workingHours}
              </p>
            )}
          </div>
        )}
        {isPassCompanyAddress && (
          <div className="space-y-3">
            <div className="flex items-center">
              <h4 className="text-base md:text-2xl font-bold text-darkGray">
                {language ? "عنوان الشركة" : "Company Address"}
              </h4>
              {isAdmin && (
                <>
                  {editCompanyAddress && (
                    <div className="flex gap-4 mx-4">
                      <button
                        className="bg-red-600 px-3 text-white font-bold p-1 rounded-md"
                        onClick={() => {
                          setEditCompanyAddress(false);
                          setAddCompanyAddress("");
                        }}
                      >
                        Close
                      </button>
                      <button
                        className="bg-green-600 p-1 text-white font-bold px-3 rounded-md"
                        onClick={handleChangeUserCompanyAddress}
                      >
                        Edit
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() => setEditCompanyAddress(true)}
                    className="w-fit "
                  >
                    {loadingCompanyAddress ? (
                      <LuLoader2 className="animate-spin text-xl" />
                    ) : (
                      <FaEdit className="mx-4 text-base md:text-2xl" />
                    )}
                  </button>
                </>
              )}
            </div>
            {editCompanyAddress ? (
              <input
                value={addCompanyAddress}
                className="w-full border-1.5 rounded-md p-3"
                onChange={(e) => setAddCompanyAddress(e.target.value)}
              />
            ) : (
              <p className="text-sm md:text-xl text-baseGray">
                {user.getUser?.companyAddress}
              </p>
            )}
          </div>
        )}
        {socialMedia && (
          <div className="space-y-4">
            <h4 className="text-base md:text-2xl font-bold text-darkGray">
              {language ? "مواقع التواصل" : "Social media"}
            </h4>
            <div className=" flex sm:gap-5 gap-3 items-center">
              {contactSocialMedia.map((social) => (
                <a
                  target="_blank"
                  href={social.link}
                  key={social.id}
                  title={social.title}
                  className="flex justify-center items-center text-[1.7rem] sm:text-[2.5rem] rounded-full text-white overflow-hidden"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            {isAdmin && (
              <button
                className="text-gray-500 hover:text-gray-700 mt-4"
                onClick={() => setEditSocialLinks(!editSocialLinks)}
              >
                <FaEdit />
              </button>
            )}
            {editSocialLinks && (
              <form
                onSubmit={handleChangeSocialLinks}
                className="mt-4 flex flex-col gap-2"
              >
                <label>
                  Instagram:
                  <input
                    type="url"
                    value={socialLinks.instagramLink}
                    onChange={(e) =>
                      setSocialLinks({
                        ...socialLinks,
                        instagramLink: e.target.value,
                      })
                    }
                    className="border rounded p-2 w-full"
                  />
                </label>
                <label>
                  Facebook:
                  <input
                    type="url"
                    value={socialLinks.faceLink}
                    onChange={(e) =>
                      setSocialLinks({
                        ...socialLinks,
                        faceLink: e.target.value,
                      })
                    }
                    className="border rounded p-2 w-full"
                  />
                </label>
                <label>
                  TikTok:
                  <input
                    type="url"
                    value={socialLinks.tiktokLink}
                    onChange={(e) =>
                      setSocialLinks({
                        ...socialLinks,
                        tiktokLink: e.target.value,
                      })
                    }
                    className="border rounded p-2 w-full"
                  />
                </label>
                <label>
                  Twitter:
                  <input
                    type="url"
                    value={socialLinks.xLink}
                    onChange={(e) =>
                      setSocialLinks({
                        ...socialLinks,
                        xLink: e.target.value,
                      })
                    }
                    className="border rounded p-2 w-full"
                  />
                </label>
                <label>
                  LinkedIn:
                  <input
                    type="url"
                    value={socialLinks.linkedInLink}
                    onChange={(e) =>
                      setSocialLinks({
                        ...socialLinks,
                        linkedInLink: e.target.value,
                      })
                    }
                    className="border rounded p-2 w-full"
                  />
                </label>
                <button
                  type="submit"
                  className="self-end bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {loadingSocialLinks ? (
                    <LuLoader2 className="animate-spin" />
                  ) : (
                    "Save"
                  )}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
      <UserProperties
        user={user}
        properties={properties}
        params={params}
        loading={loading}
      />
    </div>
  );
};
export default ViewUser;
// {socialMedia && (
//   <div className=" space-y-3 ">
//     <h4 className="text-base md:text-2xl font-bold text-darkGray">
//       {language ? "مواقع التواصل" : "Social media"}
//     </h4>
//     <div className=" flex sm:gap-5 gap-3 items-center">
//       {contactSocialMedia.map((social) => (
//         <a
//           target="_blank"
//           href={social.link}
//           key={social.id}
//           title={social.title}
//           className="flex justify-center items-center text-[1.7rem] sm:text-[2.5rem] rounded-full text-white overflow-hidden"
//         >
//           {social.icon}
//         </a>
//       ))}
//     </div>
//   </div>
// )}
