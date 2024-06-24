import React, { useState } from 'react';
import ReusableTextField from './textField/index';
import ToastMessage from './toastMessage';
import FinalBusDetails from './finalBusDetails';
import Tabs from './tsx';
import Carousal from './carousal';
import ImageWithText from './imageWithText';
import ErrorToastMessage from './errorToastMessage';

type BusDetails = {
  from: string;
  to: string;
  departureTime: {
    time: string;
    date: string;
  };
  arrivalTime: {
    time: string;
    date: string;
  };
  boardingPoint: string; 
  droppingPoint: string;
  busType: string;
  serviceNo: string;
  passengerDetails: {
    name: string;
    age: number;
    gender: string;
    seat: string;
  };
};

const textFieldData = [
  {
    id: "passenger-1",
    label: "Passenger 1",
    defaultValue: "",
    placeholder: "Name of the passenger",
    type: "text" as const,
    required: true
  },
  {
    id: "retired-employee-id",
    label: "TGSRTC Retired Employee ID",
    defaultValue: "",
    placeholder: "Enter E-mail ID",
    type: "text" as const,
    required: true
  },
  {
    id: "mobile-number",
    label: "Mobile Number",
    defaultValue: "",
    placeholder: "+91 ",
    type: "tel" as const,
    required: true
  },
  {
    id: "email",
    label: "E-mail ID",
    defaultValue: "",
    placeholder: "Enter your email",
    type: "email" as const,
    required: false
  },
  {
    id: "age",
    label: "Age",
    defaultValue: "",
    placeholder: "00",
    type: "number" as const,
    required: true
  }
];

const busDetails: BusDetails = {
  from: "Hyderabad (KPHB)",
  to: "Warangal (Venkatapuram)",
  departureTime: { time: "19:20,", date: "17th May" },
  arrivalTime: { time: "22:40,", date: "17th May" },
  boardingPoint: "Balanagar",
  droppingPoint: "Warangal BS",
  busType: "Lahari AC Sleeper Cum Seater",
  serviceNo: "Service No. 7810",
  passengerDetails: { name: "Radhika Chandana", age: 64, gender: "Female", seat: "L2" },
};

const errorToastMessageData = {
  imageSrc: "/error.svg",
  title: "We’re Sorry !",
  paragraph: "Your payment was not successful",
  message: "Your payment was not successful and your ticket could not be booked. If your money has been debited, it will be refunded to your original payment method within 2-3 days."
};

const components = [
  <ImageWithText src="/carousal-image.png" alt="Image 1" text="Testimoni One" />,
  <ImageWithText src="/carousal-image.png" alt="Image 2" text="Testimoni Two" />,
  <ImageWithText src="/carousal-image.png" alt="Image 3" text="Testimoni Three" />,
  <ImageWithText src="/carousal-image.png" alt="Image 4" text="Testimoni Four" />,
];

const App: React.FC = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleFieldChange = (id: string, value: string) => {
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  return (
    <div>
      <div>
        <Carousal components={components} />
      </div>

      {textFieldData.map((field, index) => (
        <ReusableTextField 
          key={index}
          id={field.id} 
          label={field.label} 
          defaultValue={field.defaultValue}
          placeholder={field.placeholder}
          type={field.type}
          required={field.required}
          onChange={handleFieldChange}
        />
      ))}
      <button onClick={() => console.log(formData)}>Submit</button>
      
      <ToastMessage />
      
      <FinalBusDetails busDetails={busDetails} />
      
      <Tabs />
      
      <ErrorToastMessage
        imageSrc={errorToastMessageData.imageSrc}
        title={errorToastMessageData.title}
        paragraph={errorToastMessageData.paragraph}
        message={errorToastMessageData.message}
      />
    </div>
  );
};

export default App;
