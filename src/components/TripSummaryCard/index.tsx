import React from 'react';
import ArraivalDeparture from '../ArraivalDeparture';
import styles from './index.module.css'
import MainHeading from '../MainHeading';
import divider from '../../assets/tripSummaryCardDivider.svg'
import FilterCardHeadingText from '../FilterCardHeading';
interface TripSummaryCardProps {
    busName: string;
    seatsAvailable: number;
    windowSeats: number;
    departureTime: string;
    arrivalTime: string;
    departurePlace: string;
    arrivalPlace: string;
    timeTaken: string;
    via: string;
    serviceNo: string;
    arrivalPoint?: string;
    arrivalDate?: string;
    departurePoint?: string;
    departureDate?: string;
    additionalClassName?: string;

}

const TripSummaryCard: React.FC<TripSummaryCardProps> = ({ departurePoint, additionalClassName, departureDate, arrivalDate, arrivalPoint, via, busName, seatsAvailable, departurePlace, arrivalPlace, serviceNo, timeTaken, windowSeats, departureTime, arrivalTime }) => {
    return (
        <div className={`${styles.container} ${additionalClassName}`}>

            <div className={styles.firstContainer}>
                <MainHeading heading={'Trip Summary'} additionalClassName={styles.heading} />
                <div className={styles.innerContainer}>
                    <FilterCardHeadingText heading={busName} additionalClassName={styles.subHeading} />
                    <FilterCardHeadingText heading={`${seatsAvailable} seats available | ${windowSeats} window`} additionalClassName={styles.seatsText} />                </div>
            </div>
            <div className={styles.secondcontainer}>
                <img src={divider} alt="divider" className={styles.divider} />
                <ArraivalDeparture additionalClass={styles.travelContainer} departureTime={departureTime} arrivalTime={arrivalTime} departurePlace={departurePlace} arrivalPlace={arrivalPlace} timeTaken={timeTaken} via={via} serviceNo={serviceNo} arrivalPoint={arrivalPoint} arrivalDate={arrivalDate} departurePoint={departurePoint} departureDate={departureDate} />
            </div>
        </div>
    );
};

export default TripSummaryCard;