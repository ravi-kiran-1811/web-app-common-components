import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import search from '../../assets/searchIcon.svg'
import styles from './index.module.css'
import FilterCardHeadingText from '../FilterCardHeading';

interface SearchFieldProps {
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ placeholder, onChange, className }) => {
    return (
        <div className={styles.container}>
            <FilterCardHeadingText heading="Search" additionalClassName={styles.text} />
            <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                className={`${styles.searchField} ${className}`}
                placeholder={placeholder}
                onChange={onChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={search} alt="Search" style={{ cursor: 'pointer' }} />
                        </InputAdornment>
                    ),
                    sx: {
                        pr: '12px',
                        pt: '12px',
                        pb: '12px',
                        pl: '12px',
                        '& .MuiInputBase-input': {
                            fontFamily: "Montserrat",
                            fontSize: "14px",
                            fontWeight: "400",
                            padding: '0 !important',
                        },
                        '& .MuiInputBase-input-MuiOutlinedInput-input': {
                            padding: '0 !important',
                        },
                    }
                }}
            />
        </div>
    );
};
export default SearchField;