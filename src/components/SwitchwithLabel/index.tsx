import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import styles from './index.module.css';
import styled from "@emotion/styled";
import React from "react";
interface SwitchProps{
    labelclassName?:string;
    text:string
}

const SwitchwithLabel:React.FC<SwitchProps>=({labelclassName,text})=>{
    const NewSwitch = styled(Switch)`
        & .Mui-checked  {
            color: #fff !important;
        }
        & .Mui-checked + .MuiSwitch-track {     
            opacity:1 !important;
            background-color: #11ad6b !important;
        }
    `
    return(
        <FormGroup>
            <FormControlLabel 
            control={<NewSwitch defaultChecked/>} 
            label={
            <span className={`${styles.label} ${labelclassName}`}>{text}</span>
            } />
        </FormGroup>
    )
};
export default SwitchwithLabel;