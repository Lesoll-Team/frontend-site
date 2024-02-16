import Image from "next/image";

const NewPropDetails = ({ propertyData }) => {
  return (
    <div className="min-h-[50dvh]">
      <Image
        width={1400}
        height={1000}
        alt={propertyData.title}
        src={propertyData.thumbnail}
      />
      <p>asdsadas</p>
    </div>
  );
};
export default NewPropDetails;
