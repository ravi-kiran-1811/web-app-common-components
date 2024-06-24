import React from "react";
import Button from "@mui/material/Button";
import styles from "./index.module.css";

interface ButtonProps {
  text: string;
  className?: string;
  isPrimary?: boolean /* green background white font color */;
  isSecondary?: boolean /* white background black font color */;
  isTernary?: boolean /* white background green font color */;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  className,
  isPrimary,
  isSecondary,
  isTernary,
  onClick,
}) => {

  const buttonStyles = isPrimary ? styles.primary : isSecondary ? styles.secondary : isTernary ? styles.ternary : "";

  return (
    <Button
      className={`${buttonStyles} ${className} ${styles.font}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;

