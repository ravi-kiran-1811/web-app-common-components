import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import styles from './index.module.css';

interface ReusableTextFieldProps {
  id: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  type: 'text' | 'email' | 'tel' | 'number';
  required?: boolean;
  onChange?: (id: string, value: string) => void;
}

const Container = styled.div`
  margin: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    font-family: monospace;
    font-size: 14px;    
    font-weight: 500;
  }
  & .MuiInputBase-input {
    padding: 12px;
  }
    & .MuiInputBase-input::-webkit-outer-spin-button,
  & .MuiInputBase-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ReusableTextField: React.FC<ReusableTextFieldProps> = ({ id, label, defaultValue, placeholder, type, required = false, onChange }) => {
  const [value, setValue] = useState<string>(defaultValue || '');
  const [error, setError] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(id, event.target.value);
    }
  };

  useEffect(() => {
    if (touched) {
      validate(value);
    }
  }, [value, touched]);

  const validate = (value: string) => {
    if (required && !value) {
      setError('This field is required');
      return;
    }

    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError('Please enter a valid email address');
        return;
      }
    }

    if (type === 'tel') {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(value)) {
        setError('Please enter a valid 10-digit mobile number');
        return;
      }
    }
    if (type === 'number') {
        const ageRegex = /^\d{1,3}$/; 
        if (!ageRegex.test(value) || parseInt(value) <= 0) {
          setError('Please enter a valid age (two-digit number)');
          return;
        }
      }
      

    setError('');
  };

  const handleBlur = () => {
    setTouched(true);
    validate(value);
  };

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <StyledTextField
        id={id}
        variant="outlined"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!error && touched}
        helperText={touched ? error : ''}
        required={required}
        type={type}
        className={styles.customTextFieldStyle}
      />
    </Container>
  );
};

export default ReusableTextField;
