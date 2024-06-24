
import React from 'react';
import locationIcon from '../../assets/locationIcon.svg';
import styles from './index.module.css';

interface Props {
    data: Array<{
        type?: string;
        time?: string;
        place?: string;
    }>;
    additionalClassName?: string;
}

const BoardingAndDroppingStations: React.FC<Props> = ({ data, additionalClassName }) => {
    return (
        <div className={`${styles.mainContainer} ${additionalClassName}`}>
            <p className={styles.heading}>{data[0].type}</p>
            {data.slice(1).map((item, index) => (
                <div key={index} className={styles.container}>
                    <div className={styles.innerContainer}>
                        <img src={locationIcon} alt="location" />
                        <p className={styles.time}>{item.time}</p>
                    </div>
                    <p className={styles.place}>{item.place}</p>
                </div>
            ))}
        </div>
    );
};
export default BoardingAndDroppingStations;