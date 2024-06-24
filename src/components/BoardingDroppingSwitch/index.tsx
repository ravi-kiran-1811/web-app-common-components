import React, { useState, ReactNode } from 'react';
import styles from './index.module.css';

interface BoardingDroppingSwitchProps {
    additionalClassName?: string;
    tab1Content: ReactNode;
    tab2Content: ReactNode;
    tab1Title: string;
    tab2Title: string;
}

const BoardingDroppingSwitch: React.FC<BoardingDroppingSwitchProps> = ({ additionalClassName, tab1Content, tab2Content, tab1Title, tab2Title }) => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [isSlide, setIsSlide] = useState(false);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setIsSlide(tab === 'tab2');
    };

    return (
        <div className={`${styles.container} ${additionalClassName}`}>
            <div className={styles.tabSliderNav}>
                <ul className={`${styles.tabSliderTabs} ${isSlide ? styles.slide : ''}`}>
                    <li
                        className={`${styles.tabSliderTrigger} ${activeTab === 'tab1' ? styles.active : ''}`}
                        onClick={() => handleTabClick('tab1')}
                    >
                        {tab1Title}
                    </li>
                    <li
                        className={`${styles.tabSliderTrigger} ${activeTab === 'tab2' ? styles.active : ''}`}
                        onClick={() => handleTabClick('tab2')}
                    >
                        {tab2Title}
                    </li>
                </ul>
            </div>
            <div className={styles.tabSliderContainer}>
                <div id="tab1" className={styles.tabSliderBody} style={{ display: activeTab === 'tab1' ? 'block' : 'none' }}>
                    {tab1Content}
                </div>
                <div id="tab2" className={styles.tabSliderBody} style={{ display: activeTab === 'tab2' ? 'block' : 'none' }}>
                    {tab2Content}
                </div>
            </div>
        </div>
    );
};

export default BoardingDroppingSwitch;