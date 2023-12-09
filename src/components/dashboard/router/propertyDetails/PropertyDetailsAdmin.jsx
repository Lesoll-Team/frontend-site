import ActionsOnProperty from "./actions/ActionsOnProperty";
import AcceptedDetails from "./acceptedDetails/AcceptedDetails";
import AdminActions from "./adminActions/AdminActions";
import MainPorpInfo from "./MainInfo/MainPorpInfo";
import Description from "./description/Description";
import PropertInfo from "./propertyInfo/PropertInfo";
import PropertyAlbum from "./propertyAlbum/PropertyAlbum";

const PropertyDetailsAdmin = ({ propertyDetails }) => {
  console.log(propertyDetails);
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
        </div>
      </div>
      <AdminActions propertyDetails={propertyDetails} />
    </div>
  );
};
export default PropertyDetailsAdmin;
