import React from "react";

const AdPosted = () => {
  return (
    <div className="w-full md:min-h-[322px] text-center gap-16 px-3 bg-lightNeutral py-16 grid place-content-center  justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-y-5">
        <Image
          src={"/done.svg"}
          width={85}
          height={85}
          alt="check done mark"
          className="mx-auto"
        />
        <div className="text-center space-y-4 mb-2">
          <h2 className="font-bold ">
            {language
              ? "تم إضافة  إعلانك بنجاح, شكراً لثقتك بنا"
              : "Your property has been added successfully, thanks for trusting us"}
          </h2>
          <p className="">
            {language
              ? "سنقوم بمراجعة إعلانك والرد في اسرع وقت"
              : "We will review your property and respond as soon as possible"}
          </p>
        </div>
        <Link
          href={"/"}
          className="w-8/12 lg:max-w-[300px] py-2 bg-lightGreen rounded-md text-white mx-auto"
        >
          {language ? "الرئيسية" : "Home Page"}{" "}
        </Link>
      </div>
    </div>
  );
};

export default AdPosted;
