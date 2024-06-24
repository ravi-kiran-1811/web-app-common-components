import React from 'react';
import styles from './index.module.css';

interface ErrorToastMessageProps {
    imageSrc: string;
    title: string;
    paragraph: string;
    message: string;
}


const ErrorToastMessage: React.FC<ErrorToastMessageProps> = ({imageSrc,title,paragraph,message}) => {
    return (
        <div className={styles.errorToastMessage}>
            <div className={styles.errorImageContainer}><img src={imageSrc} alt="Error"  className={styles.errorImage}/></div>
            <h2 className={styles.errorTitle}>{title}</h2>
            <p className={styles.errorParagraph}>{paragraph}</p>
            <p className={styles.errorMessage}>{message}</p>
        </div>
    );
};

export default ErrorToastMessage;


