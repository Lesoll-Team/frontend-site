import CarBrandAccordion from "../accordions/CarBrandAccordion";
import EngineCapacityAccordion from "../accordions/EngineCapacityAccordion";
import FuelTypeAccordion from "../accordions/FuelTypeAccordion";
import GearBoxAccordion from "../accordions/GearBoxAccordion";
import KMRangeAccordion from "../accordions/KMRangeAccordion";
import LocationAccordion from "../accordions/LocationAccordion";
import MadeAtAccordion from "../accordions/MadeAtAccordion";
import RangePriceAccordion from "../accordions/RangePriceAccordion";
import ShapeCarsAccordion from "../accordions/ShapeCarsAccordion";
import ButtonsCarStatus from "../ui/ButtonsCarStatus";
import ResetAndTitleSearch from "../ui/ResetAndTitleSearch";
import styles from "../../../styles/carBrandAccordion.module.css";

const SidebarFilterCars = () => {
  return (
    <div
      dir="ltr"
      className={
        styles.filterContainer +
        " bg-white relative overflow-hidden overflow-y-auto p-2 md:block hidden w-3/12  min-w-[300px] space-y-5 "
      }
    >
      <ResetAndTitleSearch />
      <ButtonsCarStatus />
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
