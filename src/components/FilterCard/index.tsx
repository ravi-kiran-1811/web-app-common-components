import React from 'react';
import styles from './index.module.css';

interface FilterCardProps {
    selected: boolean;
    onClick?: () => void;
    name: string;
    notSelectedImage: string;
    selectedImage: string;
    primary?: boolean;
    classNameContainer?: string;
}

const FilterCard: React.FC<FilterCardProps> = ({ selected, primary, classNameContainer, onClick, name, notSelectedImage, selectedImage }) => {
    const containerClassName = `
        ${styles.container} 
        ${selected ? styles.selected : ''} 
        ${primary ? styles.primary : ''} 
        ${classNameContainer}
    `.trim();

    return (
        <div className={containerClassName} onClick={onClick}>
            <div className={styles.imageContainer}>
                <img
                    src={selected ? selectedImage : notSelectedImage}
                    alt={name} 
                    className={styles.image}
                    loading="lazy"
                />
            </div>
            <p className={styles.cardText}>{name}</p>
        </div>
    );
};

export default FilterCard;
