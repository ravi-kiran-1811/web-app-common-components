import styles from "./index.module.css";
import { useEffect, useRef } from 'react';
import CustomButton from "../custom-button";
import tourismCard from '../../assets/tourism-card.png'
import calenderIcon from '../../assets/calender-icon.svg'
import pickUpIcon from '../../assets//pickup-bus-icon.svg'

export type TourismCardType = {
  placeName: string;
  image: string;
  pickupTime: string;
  pickupPoint: string;
  placesCovered: string;
  places: string[];
  button: string;
};

const TourismCard: React.FC<TourismCardType> = ({ placeName, image, pickupPoint, pickupTime, placesCovered, places, button }) => {

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 900 || !cardRef.current) return;

    const cardElements = Array.from(document.querySelectorAll(`.${styles.tourismCard}`));
    let maxHeight = 0;

    cardElements.forEach(card => {
      const cardHeight = card.getBoundingClientRect().height;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    cardElements.forEach(card => {
      (card as HTMLElement).style.height = `${maxHeight}px`;
    });
  }, []);

  return (
    <div ref={cardRef} className={styles.tourismCard}>
      <div className={styles.imageText}>
        <h2 className={styles.tourisamPlace}>{placeName}</h2>
        <div className={styles.imagePlaceholder}>
          <img
            className={styles.picturesIcon}
            loading="lazy"
            alt="tourism-card-image"
            src={tourismCard}
          />
        </div>
      </div>
      <div className={styles.tourismCardContent}>
        <div className={styles.contents}>
          <div className={styles.timePlace}>
            <div className={styles.calendar}>
              <img
                className={styles.calenderIcon}
                loading="lazy"
                alt="calender-icon"
                src={calenderIcon}
              />
              <div className={styles.tourismTime}>{pickupTime}</div>
            </div>
            <div className={styles.pickup}>
              <img
                className={styles.pickupBusIcon}
                loading="lazy"
                alt="pickup-bus-icon"
                src={pickUpIcon}
              />
              <div className={styles.tourismPickup}>{pickupPoint}</div>
            </div>
          </div>
          <div className={styles.lineSeparator}></div>
          <div className={styles.description}>
            <div className={styles.placesCovered}>{placesCovered}</div>
            <div className={styles.chipsAndText}>
              <div className={styles.chips}>
                {places.map((place, index: number) => (
                  <span key={index} className={styles.place}>
                    <span>{place}</span>
                    <span className={styles.separator}>|</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonSection}>
          <CustomButton text={button} className={styles.button} />
        </div>
      </div>
    </div>
  );
};

export default TourismCard;