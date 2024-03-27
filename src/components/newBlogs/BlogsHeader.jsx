import Image from "next/image";
import { useSelector } from "react-redux";

const BlogsHeader = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <header className="w-full flex relative justify-center items-center">
      <h1 className="absolute display-text text-white z-[5]">
        {language ? "المقالات" : "Blogs"}
      </h1>
      <img
        src={"/blog-header.png"}
        className="w-full object-cover min-h-[100px] md:min-h-[290px]"
        alt="man with a pen writing some blogs..."
      />
    </header>
  );
};
export default BlogsHeader;
