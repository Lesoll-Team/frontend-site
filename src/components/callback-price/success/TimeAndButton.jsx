import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const TimeAndButton = ({ language }) => {
  const [isTime, setIsTime] = useState(60);
  const router = useRouter();
  useEffect(() => {
    const timer = setInterval(() => {
      if (isTime > 0) {
        setIsTime(isTime - 1);
      } else {
        clearInterval(timer);
        router.push("/profile/my-subscriptions");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isTime, router]);
  return (
    <div className=" text-center gap-y-3 my-5 flex  flex-col">
      <Link
        className="bg-lightGreen  px-6 py-2 rounded hover:bg-lightGreenHover mx-auto text-white "
        href="/profile/my-subscriptions"
      >
        {language ? "عرض جميع باقاتي" : "View my subscriptions"}
      </Link>
      <p className="xs-text">{`سيتم توجيهك الي الصفحة الشخصية خلال ${isTime} ثانية`}</p>
    </div>
  );
};
export default TimeAndButton;
