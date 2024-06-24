import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styles from './index.module.css';

interface LabelTextProps {
    label: string;
    dateTime?: {
      date?: string | null;
      time?: string | null;
    };
    text?: string;
  }
  
  const LabelText: React.FC<LabelTextProps> = ({ label, dateTime, text }: InferProps<LabelTextProps>) => {
    return (
      <div>
        <p className={styles.label}>{label}</p>
        {dateTime && (
          <p className={styles.dateTime}>
            {dateTime.date} {dateTime.time &&  dateTime.time}
          </p>
        )}
        {text && <p className={styles.text}>{text}</p>} 
      </div>
    );
  };
  
  LabelText.propTypes = {
    label: PropTypes.string.isRequired,
    dateTime: PropTypes.shape({
      date: PropTypes.string,
      time: PropTypes.string,
    }),
    text: PropTypes.string, 
  };
  
  export default LabelText;