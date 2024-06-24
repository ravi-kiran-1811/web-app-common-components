import * as React from "react";
import styles from "./index.module.css";

interface TooltipProps {
    tooltip: string;
    tooltipText: string;
    tooltipClassName?: string;
    tooltipTextClassName?: string;
  }
  
 
const Tooltip: React.FC<TooltipProps>  = ({tooltip,tooltipText,tooltipClassName,tooltipTextClassName}) => {

    return (
        <div className={`${styles.tooltip} ${styles.tooltipClassName}`}>
            {tooltip}
            <span className={`${styles.tooltiptext} ${styles.tooltipTextClassName}`}>
                {tooltipText}
            </span>
        </div>
    );
};

export default Tooltip;