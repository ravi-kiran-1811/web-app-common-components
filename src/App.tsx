import { useState } from 'react';
import './App.css';
import './global.css'
import image2 from '../src/assets/busimage.svg';
import image1 from '../src/assets/seat.svg';
import ArraivalDeparture from './components/ArraivalDeparture';
import BoardingDroppingSwitch from './components/BoardingDroppingSwitch';
import BusDetailsCard from './components/BusDetailsCard';
import FilterCard from './components/FilterCard';
import FilterCardHeadingText from './components/FilterCardHeading';
import ImageAndText from './components/ImageAndText';
import MainHeadingPlayFairDisplay from './components/MainHeading';
import SearchField from './components/SearchField';
import TripSummaryCard from './components/TripSummaryCard';
import BoardingAndDroppingStations from './components/Boarding&DroppingStations';
import BusStepper from './components/BusStepper';
import MuiSelect from './components/MuiSelect';
import HomePageForm from './components/HomePageForm';
import BasicTabs from './components/HomePageTabs';
import clock from './assets/clock.svg';
import bus from './assets/bus.svg';
import busLogo from './assets/busLogo.svg'
import BookingPolicies from './components/BookingPolicies';
import BookingPageHeader from './components/BookingPageHeader';
import CustomButton from './components/custom-button';
import Tooltip from './components/tooltip';
import ConfirmationCard from './components/confirmation-card';
import CheckboxLabel from './components/checkbox-label';
import TravelOptions from './components/travel-options';
import BannerTitleSubTitle from './components/banner-heading-subheading';
import TourismCard from './components/tourism-card';
interface Person {
  name: string;
  age: number;
}

function App() {
  const data = [
    {
      type: "Boarding Points"
    },
    {
      time: "19:20",
      place: "KPHB"
    },
    {
      time: "19:20",
      place: "KPHB"
    },
    {
      time: "19:20",
      place: "KPHB"
    }
  ];
  const array: Person[] = [
    { name: "John", age: 25 },
    { name: "Jane", age: 22 },
    { name: "Jill", age: 20 },
    { name: "Jack", age: 30 },
  ];

  const [filteredArray, setFilteredArray] = useState<Person[]>(array);
  const handleFilter = (filteredArray: Person[]) => {
    setFilteredArray(filteredArray);
    console.log(filteredArray);
  };

  const amenitiesArray = [
    { name: 'seater', notSelected: image1, selected: image2 },
    { name: 'bus', notSelected: image1, selected: image2 },
    { name: 'hello', notSelected: image1, selected: image2 },
  ];

  const [selectedStates, setSelectedStates] = useState<boolean[]>(new Array(amenitiesArray.length).fill(false));

  const onClick = (index: number) => {
    setSelectedStates(prevState => prevState.map((selected, i) => i === index ? !selected : selected));
  };
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Seat Selection', 'Passenger Details', 'Payment'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const items = [
    { name: 'Below Rs. 1000', price: 1000 },
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 },
  ];

  const [sortedItems, setSortedItems] = useState(items);
  const handleFilterChange = (price: number) => {
    console.log(price)
  };
  const routes = [
    { from: 'Hyderabad', to: 'Warangal' },
    { from: 'Hyderabad', to: 'Vijayawada' },
    { from: 'Hyderabad', to: 'Visakhapatnam' },
  ];
  const tabContents = [
    { label: 'Item One', imageUrl: clock, activeImageUrl: bus, content: <ImageAndText imageUrl={clock} text="Content for Item One" /> },
    { label: 'Item Two', imageUrl: clock, activeImageUrl: bus, content: <p>Content for Item Two</p> },
    { label: 'Item Three', imageUrl: clock, activeImageUrl: bus, content: <p>Content for Item Three</p> },
  ];
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const handleRouteSelect = (from: string, to: string) => {
    setSelectedFrom(from);
    setSelectedTo(to);
  };
  const arrayInfo = [
    {
      "type": "heading",
      "text": "a. Students below 12 years Bus Pass:"
    },

    {
      "type": "bullet points",
      "data": [
        "Eligible for below 12 years Students only.",
        "Free travel facility is provided for One UP and DOWN trip in all days except public Holidays from Residence to School & back.",
        "Cities - upto 22 KMs in City Ordinary Buses.",
        "Districts - upto 20 KMs in Pallevelugu Buses.",
        "Validity period – for Academic year.",
        "Applicant can apply at bus pass counter."
      ]
    },
    {
      "type": "heading",
      "text": "b. Girl Students upto X Class:"
    },
    {
      "type": "table",
      "data": [
        {
          "sNo": "S. No.",
          "DistanceInKms": "Distance in KMs",
          "Name": "Tariff (Rs)"
        },
        {
          "sNo": "01",
          "DistanceInKms": 4,
          "Name": 450
        },
        {
          "sNo": "02",
          "DistanceInKms": 8,
          "Name": 600
        },
        {
          "sNo": "03",
          "DistanceInKms": 12,
          "Name": 900
        },
        {
          "sNo": "04",
          "DistanceInKms": 18,
          "Name": 1150
        },
        {
          "sNo": "05",
          "DistanceInKms": 22,
          "Name": 1350
        }
      ]
    },
    {
      "type": "bullet points",
      "data": [
        "Eligible for Girl Students upto X Class and Below 18 years only.",
        "Free travel facility is provided for One UP and DOWN trip in all days except public Holidays from Residence to School & back.",
        "Cities - upto 22 KMs in City Ordinary Buses.",
        "Districts - upto 20 KMs in Pallevelugu Buses",
        "Validity period – for Academic year.",
        "Applicant can apply at bus pass counter."
      ]
    }
  ]
  return (
    <>
      <div className="App">
        <button onClick={handleNext}>next</button>
        <button onClick={handleBack}>back</button>
        {amenitiesArray.map((amenity, index) => (
          <FilterCard
            primary={false}
            key={index}
            selected={selectedStates[index]}
            onClick={() => onClick(index)}
            name={amenity.name}
            notSelectedImage={amenity.notSelected}
            selectedImage={amenity.selected}
            classNameContainer="container"
          />

        ))}
        {amenitiesArray.map((amenity, index) => (
          <ImageAndText key={index} imageUrl={amenity.notSelected} text={amenity.name} />
        ))}

        <MainHeadingPlayFairDisplay heading="Hello" />
        <FilterCardHeadingText heading="Hello" />
        <SearchField placeholder={'Search'} />
        <ArraivalDeparture departureTime={'19:20'} arrivalTime={'20:20'} departurePlace={'Hyderabad'} arrivalPlace={'Warangal'} timeTaken={'07:20'} via={'RFC'} serviceNo={'7890'} />
        <BusDetailsCard busNumber={'7890'} busType={'Luxury'} departureTime={'19:20'} arrivalTime={'20:20'} departurePlace={'Hyderabad'} arrivalPlace={'Warangal'} timeTaken={'07:20'} via={'RFC'} serviceNo={'7890'} seatsAvailable={0} windowSeatsAvailable={0} price={'$251'} busLogo={busLogo} />
        <TripSummaryCard
          busName={'Bus A1'}
          seatsAvailable={30}
          windowSeats={10}
          departureTime={'08:00 AM'}
          arrivalTime={'12:00 PM'}
          departurePlace={'City A'}
          arrivalPlace={'City B'}
          timeTaken={'4 hours'}
          via={'Town C'}
          serviceNo={'1234'}
        />
        <BoardingDroppingSwitch tab1Content={<BusStepper
          activeStep={activeStep}
          steps={steps}
        />} tab2Content={<BoardingAndDroppingStations data={data} />} tab1Title={'Boarding Point'} tab2Title={'Dropping Point'} />

        <MuiSelect items={items} onChange={handleFilterChange} />
        <HomePageForm routes={routes}
          onRouteSelect={handleRouteSelect}
          selectedFrom={selectedFrom}
          selectedTo={selectedTo} />
        <BasicTabs tabContents={tabContents} />
        <BookingPolicies array={arrayInfo} />
        <BookingPageHeader />

      </div>
      <CustomButton text="Hello" isPrimary={true} />
      <Tooltip tooltip={'View Details'} tooltipText={'Routes a , b, c'} />
      <ConfirmationCard seatText={'asdg'} seatNumber={'dfgjh'} amountText={'hghkj'} amount={'ghjjklk'} text={'ghjkj'} />
      <CheckboxLabel text={'Hello'} />
      <TravelOptions />
      <BannerTitleSubTitle heading='hgvcdjhcjh' subHeading='cvhscjsbj' />
      <TourismCard placeName={'Hyderabad'} image={''} pickupTime={'8:30pm'} pickupPoint={'Alpha'} placesCovered={'gsdgchjs'} places={["a", "b", "c"]} button={'Book Now'} />
    </>
  );
}

export default App;
