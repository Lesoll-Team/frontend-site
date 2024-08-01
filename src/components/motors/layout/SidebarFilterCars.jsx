import CarBrandAccordion from "../accordions/CarBrandAccordion";
import EngineCapacityAccordion from "../accordions/EngineCapacityAccordion";
import FuelTypeAccordion from "../accordions/FuelTypeAccordion";
import GearBoxAccordion from "../accordions/GearBoxAccordion";
import KMRangeAccordion from "../accordions/KMRangeAccordion";
import LocationAccordion from "../accordions/LocationAccordion";
import MadeAtAccordion from "../accordions/MadeAtAccordion";
import RangePriceAccordion from "../accordions/RangePriceAccordion";
import ShapeCarsAccordion from "../accordions/ShapeCarsAccordion";

const SidebarFilterCars = () => {
  return (
    <div className="bg-white relative overflow-hidden overflow-y-auto p-2 w-3/12 min-w-[300px] space-y-5 ">
      <CarBrandAccordion />
      <RangePriceAccordion />
      <GearBoxAccordion />
      <MadeAtAccordion />
      <ShapeCarsAccordion />
      <KMRangeAccordion />
      <FuelTypeAccordion />
      <LocationAccordion />
      <EngineCapacityAccordion />
    </div>
  );
};
export default SidebarFilterCars;
