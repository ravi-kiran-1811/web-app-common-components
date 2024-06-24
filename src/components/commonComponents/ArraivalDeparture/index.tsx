import React from 'react';
import styles from './index.module.css'
import ArrivalDepartureDatePlace from '../ArrivalDepartureDatePlace';
import clock from '../../../assets/clock.svg';
import arrow from '../../../assets/arrow.png'
interface Props {
    departureTime: string;
    arrivalTime: string;
    departurePlace: string;
    arrivalPlace: string;
    timeTaken: string;
    via: string;
    serviceNo: string;
    departureDate?: string;
    departurePoint?: string;
    arrivalDate?: string;
    arrivalPoint?: string;
    type?: string;
    additionalClass?: string;
}

const ArraivalDeparture: React.FC<Props> = ({ departureTime, arrivalTime, departurePlace, arrivalPlace, timeTaken, via, serviceNo, departureDate, departurePoint, arrivalPoint, arrivalDate, additionalClass }) => {
    return (
        <div className={`${styles.container} ${additionalClass}`}>
            <ArrivalDepartureDatePlace time={departureTime} place={departurePlace} date={departureDate} point={departurePoint} type={'Boarding'} />
            <div>
                <div className={styles.innerContainer}>
                    <div className={styles.timeTaken}>
                        <img src={clock} alt="Clock" loading="lazy" />
                        <p className={styles.commonClass}>{timeTaken} hrs | Via: {via}</p>
                    </div>
                    <img src={arrow} alt="arrow" loading="lazy" />
                    <div>
                        <span className={styles.commonClass}> Service No. {serviceNo}</span>
                    </div>
                </div>
            </div>
            <ArrivalDepartureDatePlace time={arrivalTime} place={arrivalPlace} date={arrivalDate} point={arrivalPoint} type={'Dropping'} />
        </div>
    );
};

export default ArraivalDeparture;