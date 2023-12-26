import ActionsOnProperty from "./actions/ActionsOnProperty";
import AcceptedDetails from "./acceptedDetails/AcceptedDetails";
import AdminActions from "./adminActions/AdminActions";
import MainPorpInfo from "./MainInfo/MainPorpInfo";
import Description from "./description/Description";
import PropertInfo from "./propertyInfo/PropertInfo";
import PropertyAlbum from "./propertyAlbum/PropertyAlbum";
import PropertyServices from "./propertyServices/PropertyServices";
import InstallmentData from "./installmentData/InstallmentData";
import SectionContainer from "./SectionContainer";

const PropertyDetailsAdmin = ({ propertyDetails }) => {
  return (
    <div className="relative " dir="rtl">
      <div className="px-2 sm:px-0 sm:container mx-auto py-5 space-y-5 ">
        <AcceptedDetails propertyDetails={propertyDetails} />
        <PropertyAlbum propertyDetails={propertyDetails} />
        <MainPorpInfo propertyDetails={propertyDetails} />
        <div className="grid  lg:grid-cols-2 gap-5">
          <ActionsOnProperty propertyDetails={propertyDetails} />
          <Description propertyDetails={propertyDetails} />
          <div className="lg:col-span-2">
            <PropertInfo propertyDetails={propertyDetails} />
          </div>
          <PropertyServices services={propertyDetails.getProperty.service} />
          <InstallmentData propertyDetails={propertyDetails} />
          <SectionContainer style={"lg:col-span-2"}>
            <h3 className="text-center text-xl">من تفاعل مع العقار</h3>
            <div className="min-h-[300px] grid place-content-center">
              <p className="animate-bounce text-2xl">
                تحت الانشاء <span className="animate-bounce ">🛠️</span>
              </p>
            </div>
          </SectionContainer>
        </div>
      </div>
      <AdminActions propertyDetails={propertyDetails} />
    </div>
  );
};
export default PropertyDetailsAdmin;
