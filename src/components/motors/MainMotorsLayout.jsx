import MotorsResultCards from "./layout/MotorsResultCards";
import SidebarFilterCars from "./layout/SidebarFilterCars";

const MainMotorsLayout = () => {
  return (
    <div dir="rtl" className="h-screen flex gap-2 p-1 my-10">
      <SidebarFilterCars />
      <MotorsResultCards />
    </div>
  );
};
export default MainMotorsLayout;
