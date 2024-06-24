import React from "react";
import styles from "./index.module.css";
import LabelText from "../labelText";
interface BusDetails {
  from: string;
  to: string;
  departureTime: { time: string; date: string };
  arrivalTime: { time: string; date: string };
  boardingPoint: string;
  droppingPoint: string;
  busType: string;
  serviceNo: string;
  passengerDetails: { name: string; age: number; gender: string; seat: string };
}

interface FinalBusDetailsProps {
    busDetails: BusDetails;
  }

  const FinalBusDetails: React.FC<FinalBusDetailsProps> = ({ busDetails }) => {
    return (
      <div className={styles.ticket}>
        <div>
      <div className={styles.header}>
        <div className={styles.title}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.reservation}>
          <h3>Online Reservation e-ticket</h3>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.from}>
          <LabelText label="From" text={busDetails.from} />
          <LabelText
            label="Departure Time"
            dateTime={busDetails.departureTime}
            text={busDetails.boardingPoint}
          />
        </div>
        <div className={styles.bus}>
            <div><img src="/arrow.svg" alt="arrow" /></div>
            <div><img src="/bus.svg" alt="bus" /></div>
          <p>{busDetails.busType}</p>
          <p>{busDetails.serviceNo}</p>
        </div>
        <div className={styles.to}>
          <LabelText label="To" text={busDetails.to} />
          <LabelText
            label="Arrival Time"
            dateTime={busDetails.arrivalTime}
            text={busDetails.droppingPoint}
          />
        </div>
      </div>
      <div className={styles.passengerDetails}>
        <div className={styles.passengerDetailsHeader}>
          <div className={styles.passengerDetailsTitle}>Passenger Details</div>
          <div className={styles.passengerDetailsBorder}></div>
        </div>
        <div className={styles.detailsRow}>
        <LabelText label="Name" text={busDetails.passengerDetails.name} />
          <LabelText label="Age" text={String(busDetails.passengerDetails.age)} />
          <LabelText label="Gender" text={busDetails.passengerDetails.gender} />
          <LabelText label="Seat" text={busDetails.passengerDetails.seat} />
        </div>
      </div>
      </div>
      <div className={styles.qrCode}>
        <img src="/qrcode.png" alt="QR Code" className={styles.qr} />
        <p>T356290202</p>
      </div>
    </div>
  );
};

export default FinalBusDetails;
