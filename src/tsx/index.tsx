import React, { useState } from 'react';
import styles from './index.module.css'; // Importing CSS module

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'boarding' | 'dropping'>('boarding');

  const handleTabClick = (tab: 'boarding' | 'dropping') => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabContainer}>
      <button
        className={`${styles.tab} ${activeTab === 'boarding' ? styles.active : ''}`}
        onClick={() => handleTabClick('boarding')}
      >
        Boarding Points
      </button>
      <button
        className={`${styles.tab} ${activeTab === 'dropping' ? styles.active : ''}`}
        onClick={() => handleTabClick('dropping')}
      >
        Dropping Points
      </button>
    </div>
  );
};

export default Tabs;
