import React from 'react';
import styles from './index.module.css';
import HomePageForm from '../HomePageForm/index';

const BookingPageHeader: React.FC = () => {
    return (
        <div className={styles.bookingPageHeader}>
            <div className="left-section">
                <button className="button">Button</button>
            </div>
            <div className="right-section">
                <HomePageForm routes={[]} onRouteSelect={function (from: string, to: string): void {
                    throw new Error('Function not implemented.');
                }} selectedTo={''} selectedFrom={''} />
            </div>
        </div>
    );
};

export default BookingPageHeader;