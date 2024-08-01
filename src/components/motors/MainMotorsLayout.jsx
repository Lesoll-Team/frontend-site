import MotorsResultCards from "./layout/MotorsResultCards";
import SidebarFilterCars from "./layout/SidebarFilterCars";

const MainMotorsLayout = () => {
  return (
    <div className="h-screen flex gap-2   bg-yellow-200">
      <SidebarFilterCars />
      <MotorsResultCards />
    </div>
  );
};
export default MainMotorsLayout;
