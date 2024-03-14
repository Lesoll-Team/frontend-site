import Image from "next/image";
import { useSelector } from "react-redux";

const BlogsHeader = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <header className="w-full flex relative justify-center items-center">
      <h1 className="absolute display-text text-white z-[5]">
        {language ? "المقالات" : "Blogs"}
      </h1>
      <Image
        src={"/blog-header.png"}
        width={1440}
        height={273}
        className="w-full "
        alt="man with a pen writing some blogs..."
      />
      {/* <Image
        src={"/blog-header-mobile.png"}
        width={360}
        height={95}
        className="w-full block md:hidden"
      /> */}
    </header>
  );
};
export default BlogsHeader;
