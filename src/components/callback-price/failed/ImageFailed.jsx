import Image from "next/image";

const ImageFailed = () => {
  return (
    <div className="w-full  -mb-16 flex relative justify-center">
      <Image
        src={"/price/header-failed.svg"}
        width={200}
        height={200}
        alt=" holding debit "
      />
    </div>
  );
};
export default ImageFailed;
