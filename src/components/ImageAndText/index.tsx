import React from 'react';
import styles from './index.module.css';

interface ImageAndTextProps {
    imageUrl: string;
    text: string;
    primary?: boolean;
    className?: string;
    onClick?: () => void; 
}

const ImageAndText: React.FC<ImageAndTextProps> = ({ imageUrl, text, primary, className, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className={`${styles.container} ${primary ? styles.columnReverse : ''}`} onClick={handleClick}>
            <img src={imageUrl} alt="Image" />
            <p className={`${styles.text} ${className}`}>{text}</p>
        </div>
    );
};

export default ImageAndText;
