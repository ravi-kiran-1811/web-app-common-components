import React, { useState } from 'react';
import busLogo from '../../../assets/busLogo.svg';
import styles from './index.module.css';
import ArraivalDeparture from '../ArraivalDeparture';
import ImageAndText from '../ImageAndText';
import downArrow from '../../../assets/downArrow.svg';
import FilterCard from '../FilterCard';
import FilterCardHeadingText from '../FilterCardHeading';
import SearchField from '../SearchField';

interface BusDetailsCardProps {
    busLogo: string;
    busNumber: string;
    busType: string;
    departureTime: string;
    arrivalTime: string;
    departurePlace: string;
    arrivalPlace: string;
    timeTaken: string;
    via: string;
    serviceNo: string;
    seatsAvailable: number;
    windowSeatsAvailable: number;
    price: string;
    additionalClassName?: string;
}

const BusDetailsCard: React.FC<BusDetailsCardProps> = ({ additionalClassName, busLogo, busNumber, busType, departureTime, arrivalTime, departurePlace, arrivalPlace, timeTaken, via, price, serviceNo, seatsAvailable, windowSeatsAvailable }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const hoveredArray = [
        {
            name: 'Available Seats',
            image: downArrow,
            component: <FilterCard selected={false} name={'hello'} notSelectedImage={downArrow} selectedImage={downArrow} />,
        },
        {
            name: 'Boarding & Dropping Points',
            image: downArrow,
            component: <SearchField placeholder={'Search'} onChange={(event) => console.log(event.target.value)} />
        },
        {
            name: 'Amenities',
            image: downArrow,
            component: <ArraivalDeparture departureTime={'19:20'} arrivalTime={'20:20'} departurePlace={'Hyderabad'} arrivalPlace={'Warangal'} timeTaken={'07:20'} via={'RFC'} serviceNo={'7890'} />
            ,
        },
        {
            name: 'Route',
            image: downArrow,
            component: <FilterCardHeadingText heading={'hello chotu'} />,
        },
        {
            name: 'Booking Policies',
            image: downArrow,
            component: <FilterCard selected={false} onClick={function (): void {
                throw new Error('Function not implemented.');
            }} name={'hello'} notSelectedImage={downArrow} selectedImage={downArrow} />,
        },
    ];
    const onClose = () => {
        setActiveItem(null);
        setIsExpanded(false);
        setIsHovered(false);
    }
    const handleClick = (index: number) => {
        if (activeItem === index) {
            setIsExpanded(!isExpanded);
        } else {
            setIsExpanded(true);
        }
        setActiveItem(index);
    };

    return (


        <div
            className={`${styles.container} ${additionalClassName} ${isHovered ? styles.hovered : ''}${isExpanded ? styles.expandedSecondContainer : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.cardContainer}>
                <div className={styles.firstContainer}>
                    <div className={styles.logoContainer}>
                        <img className={styles.busLogo} src={busLogo} alt="Bus Logo" />
                        <p className={styles.additionalDetails}>{busNumber} | {busType}</p>
                    </div>
                    <ArraivalDeparture
                        departureTime={departureTime}
                        arrivalTime={arrivalTime}
                        departurePlace={departurePlace}
                        arrivalPlace={arrivalPlace}
                        timeTaken={timeTaken}
                        via={via}
                        serviceNo={serviceNo}
                    />
                    <div className={styles.priceContainer}>
                        <p className={styles.from}>From</p>
                        <p className={styles.price}>{price}</p>
                    </div>
                </div>
                <div className={`${styles.secondContainer} `}>
                    {isHovered || isExpanded ? (
                        <div className={styles.hoveredContent}>
                            {hoveredArray.map((item, index) => (
                                <ImageAndText
                                    key={index}
                                    imageUrl={item.image}
                                    text={item.name}
                                    className={activeItem === index && isExpanded ? styles.hoveredContentText : ''}
                                    primary={true}
                                    onClick={() => handleClick(index)}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className={styles.imagePlaceholder}>Images will be there</p>
                    )}
                    <div className={styles.seatsSelection}>
                        <p className={styles.seatsAvailable}>{seatsAvailable} seats available | {windowSeatsAvailable} window</p>
                        <button className={styles.selectSeatsButton}>Select Seats</button>
                    </div>
                </div>
            </div>
            {activeItem !== null && (
                <div className={styles.dynamicComponentWrapper}>
                    <div className={styles.dynamicComponent}>
                        <p className={styles.close} onClick={onClose}>X</p>
                        {hoveredArray[activeItem].component}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BusDetailsCard;
