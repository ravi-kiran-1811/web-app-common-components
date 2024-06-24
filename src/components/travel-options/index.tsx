import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import styles from "./index.module.css";

const data = [
  {
    value: "student",
    icon: "🎓",
    label: "I am a student",
  },
  {
    value: "everyday",
    icon: "💼",
    label: "I travel to work everyday",
  },
  {
    value: "occasionally",
    icon: "🧳",
    label: "I travel occasionally",
  },
];

const TravelOptions: React.FC = () => {
  const [selectedValue, setSelectedValue] = React.useState(" ");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" className={styles.root}>
      <RadioGroup
        aria-label="travel"
        name="travel"
        value={selectedValue}
        onChange={handleChange}
        className={styles.radioGroup}
      >
        {data?.map((item: any) => {
          return (
            <FormControlLabel
              value={item.value}
              control={<Radio className={styles.radioButton} />}
              label={ 
                <span className={styles.label}>
                    <span className={styles.icon}>{item.icon}</span>
                    <span className={styles.text}>{item.label}</span>
                </span>
              }
              className={`${styles.radioLabel} ${selectedValue === item.value ?  styles.checked : ""}`}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default TravelOptions;