import { cn } from "@/utils/cn";
import styles from "../../styles/addMoto.module.css";
const { customScrollbar } = styles;
const ScrollableContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        `grid  gap-5 rounded  max-h-[55dvh] sm:max-h-[57dvh] px-2 overflow-y-auto ${customScrollbar} `,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ScrollableContainer;
