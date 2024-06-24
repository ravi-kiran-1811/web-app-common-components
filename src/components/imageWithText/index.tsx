import React from 'react';
import styles from './index.module.css';

const ImageWithText: React.FC<{ src: string, alt: string, text: string }> = ({ src, alt, text }) => {
  return (
    <div  className={styles.imageWithText}>
      <img src={src} alt={alt} className={styles.imageWithTextImage} />
      <p className={styles.imageWithTextParagraph}>{text}</p>
    </div>
  );
}
export default ImageWithText;