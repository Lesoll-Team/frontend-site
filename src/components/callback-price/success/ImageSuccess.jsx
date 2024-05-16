import Image from "next/image";

const ImageSuccess = () => {
  return (
    <div className="w-full  -mb-16 flex relative justify-center">
      <Image
        src={"/price/holding_debit.svg"}
        width={200}
        height={200}
        alt=" holding debit "
      />
    </div>
  );
};
export default ImageSuccess;
