import Link from "next/link";

const PinProfileTitle = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-between">
        <h2 className=" text-grayText2">وكلائنا المعتمدون</h2>
        <Link href={"/agents"} className="underline">
          عرض المزيد
        </Link>
      </div>
      <p className="mt-2 text-[#666666]">افضل وكلاء العقارات المتميزون لدينا</p>
    </div>
  );
};
export default PinProfileTitle;
