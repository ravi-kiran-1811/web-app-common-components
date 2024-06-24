import React from 'react';
import bus from '../../../assets/bus.svg';
import road from '../../../assets/road.svg';
import tick from '../../../assets/tickMark.svg';
import styles from './index.module.css';

interface CustomStepperProps {
    activeStep: number;
    steps: string[];
}

const BusStepper: React.FC<CustomStepperProps> = ({ activeStep, steps }) => {
    const calculateLeftPosition = (index: number) => {
        const percentage = (index / (steps.length - 1)) * 100;
        const offset = activeStep === index && index === steps.length - 1 ? '- 66px' : '';
        const position = activeStep === index ? '0px' : '26px';
        return `calc(${percentage}% ${offset} + ${position})`;
    };

    const calculateTopPosition = (index: number) => {
        if (activeStep === index) {
            return '50%';
        } else if (index < activeStep) {
            return 'calc(50% - 20px - 5px)';
        } else {
            return '50%';
        }
    };

    return (
        <div className={styles.container} style={{ backgroundImage: `url(${road})` }}>
            {steps.map((step, index) => (
                <div key={index} className={styles.step} style={{ left: calculateLeftPosition(index), top: calculateTopPosition(index) }}>
                    {activeStep === index ? (
                        <img className={styles.stepImage} src={bus} alt="Bus Logo" />
                    ) : index < activeStep ? (
                        <img className={styles.stepImage} src={tick} alt="Location Icon" />
                    ) : null}
                </div>
            ))}
            <div className={styles.stepText}>
                {steps.map((step, index) => (
                    <div key={index} className={styles.stepTextItem} style={{ color: index <= activeStep ? 'red' : 'black' }}>
                        {step}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusStepper;