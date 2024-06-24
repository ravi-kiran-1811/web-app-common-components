import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "./index.module.css";

interface CheckboxLabelProps {
    text: string;
    highlightedText?: string;
}
  
const CheckboxLabel: React.FC<CheckboxLabelProps> = ({text,highlightedText}) => {
  return (
    <FormGroup className={styles.formGroup}>
      <FormControlLabel
        required
        className={styles.formControlLabel}
        control={<Checkbox  sx={{
            '&.Mui-checked': {
              color: '#11AD6B',
            },
          }} className={styles.checkbox}/>}
        label={
          <span className={styles.text}>
            {text}
            <span className={styles.highlightedText}>{highlightedText}</span>
          </span>
        }
      />
    </FormGroup>
  );
};
export default CheckboxLabel;
