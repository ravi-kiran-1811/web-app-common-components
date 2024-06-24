import React from 'react';
import styles from './index.module.css';

interface ArrivalDepartureDatePlaceProps {
    time: string;
    place: string;
    date?: string;
    type?: 'Boarding' | 'Dropping';
    point?: string;
    additionalClassName?: string;
}

const ArrivalDepartureDatePlace: React.FC<ArrivalDepartureDatePlaceProps> = ({
    time,
    place,
    date,
    point,
    type,
    additionalClassName
}) => {
    return (
        <div className={`${styles.container} ${additionalClassName}`}>
            <p className={styles.time}>{time}</p>
            <p className={styles.place}>{place}</p>
            {(date || (type && point)) && (
                <div className={styles.details}>
                    {date && <p className={styles.dateAndPoint}>{date}</p>}
                    {type && point && (
                        <div className={styles.datePoint}>
                            <p className={styles.straightLine}>|</p>
                            <p className={styles.dateAndPoint}> {type} : {point}</p>
                        </div>)}
                </div>
            )}
        </div>
    );
};

export default ArrivalDepartureDatePlace;
