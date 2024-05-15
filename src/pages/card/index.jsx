import RealtyCard from "@/components/realtyCard/RealtyCard";

const Index = () => {
  const property = {
    _id: "63ce45947a4ea698ca96c7db",
    acceptAt: "2024-04-01T08:22:05.877Z",
    area: 189,
    bathRooms: 2,
    connectPhoneNumber: "",
    countOfVisit: 930,
    createdAt: "2023-01-23T08:30:12.160Z",
    address: {
      governrate: "القاهرة",
      latitude: "30.0084868",
      longitude: "31.4284756",
      name: "The 5th Settlement, Cairo Governorate, Egypt",
      region: "القاهرة الجديدة",
    },
    isSold: true,
    offer: "For Sale",
    price: 950000,
    rooms: 3,
    user: { code: "+20", phone: "1012668446" },
    slug: "Lesoll-7633193234-شقة-للبيع-القاهرة-القاهره-شقه-استلام-فوري-تشطيب-كامل-بالتكيفات-بكمبوند-المقصد-بالتقسيط-",
    thumbnail:
      "https://cloud.lesoll.com/v0/public/Realty/عقار-للبيع-القاهرهfalse4815885791880000.webp",
    title: "شقه للبيع استلام فوري تشطيب كامل بكمبوند بالتجمع الخامس بالتقسيط ",
  };
  return (
    <div className=" grid grid-cols-1 md:container md:mx-auto  mx-[20px]  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10 ">
      <RealtyCard key={property._id} propertyDetails={property} />
      <RealtyCard key={property._id} propertyDetails={property} />
      <RealtyCard key={property._id} propertyDetails={property} />
      <RealtyCard key={property._id} propertyDetails={property} />
      <RealtyCard key={property._id} propertyDetails={property} />
      <RealtyCard key={property._id} propertyDetails={property} />
      <RealtyCard key={property._id} propertyDetails={property} />
      <RealtyCard key={property._id} propertyDetails={property} />
      <RealtyCard key={property._id} propertyDetails={property} />
    </div>
  );
};
export default Index;
