import React from 'react';
import styles from './index.module.css';

const data = {
    message: "Congratulations Radhika, you have successfully booked your ticket!",
    buttonText: "Book Another"
};

const ToastMessage: React.FC = () => {
    return (
        <div className={styles.successToast}>
            <div className={styles.tick}><img src="/tick.svg" alt="done" className={styles.tickImage}/></div>
            <h1 className={styles.successText}>{data?.message}</h1>
            <button>{data?.buttonText}</button>
        </div>
    );
};

export default ToastMessage;