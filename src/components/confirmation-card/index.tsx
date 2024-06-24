import * as React from "react";
import styles from "./index.module.css";
import CustomButton from "../custom-button";

interface ConfirmationProps {
  seatText: string;
  seatNumber: string;
  amountText: string;
  amount: string;
  text: string;
}

const ConfirmationCard: React.FC<ConfirmationProps> = ({
  seatText,seatNumber,amountText,amount,text
}) => {
  return (
    <section className={styles.cardContainer}>
      <div className={styles.cardDetails}>
        <div className={styles.selectedDetails}>
          <span>{seatText}</span>
          <span>{seatNumber}</span>
        </div>
        <div className={styles.amountDetails}>
          <span>{amountText}</span>
          <span>{amount}</span>
        </div>
        <div className={styles.lineSeparator}></div>
        <CustomButton
            text={text}
            isPrimary={true}
          />
      </div>
    </section>
  );
};
export default ConfirmationCard;