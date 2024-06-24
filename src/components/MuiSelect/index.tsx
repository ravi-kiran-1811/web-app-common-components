import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from './index.module.css';
import FilterCardHeadingText from '../FilterCardHeading';

interface MuiSelectProps {
    className?: string;
    items: { name: string; price: number }[];
    onChange?: (value: number) => void;
    containerClassName?: string;
    heading?: string;
}

const MuiSelect: React.FC<MuiSelectProps> = ({ className, items, containerClassName, onChange, heading }) => {
    const defaultItem = items.length > 0 ? items[0].price : 0;
    const [selectedItem, setSelectedItem] = React.useState<number>(defaultItem);

    const handleChange = (event: SelectChangeEvent) => {
        const value = parseFloat(event.target.value);
        setSelectedItem(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className={`${styles.MainContainer} ${containerClassName}`}>
            <FilterCardHeadingText heading="Filter" additionalClassName={styles.text} />
            <Box
                sx={{
                    minWidth: 120,
                    width: '258px',
                    border: '1px solid #CBCBCB !important',
                    borderRadius: '6px',
                    height: '42px !important',
                    overflow: 'hidden',
                }}
                className={`${styles.container} ${className}`}
            >

                <FormControl fullWidth className={styles.formControl}>
                    <InputLabel id="demo-simple-select-label" className={styles.inputLabel}></InputLabel>
                    <Select
                        sx={{
                            '.MuiSelect-select': {
                                fontSize: '14px',
                                fontFamily: 'Montserrat',
                                fontWeight: 500,
                                padding: '10px',
                                textAlign: 'left',
                                border: 'none',
                                height: '100%',
                            },
                            '.MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                        }}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    left: '0px !important',
                                }
                            }
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedItem.toString()}
                        label=""
                        onChange={handleChange}
                        className={styles.select}
                    >
                        {items.map((item) => (
                            <MenuItem
                                value={item.price.toString()}
                                className={item.name === 'Below Rs. 1000' ? `${styles.menuItem} ${styles.below1000}` : styles.menuItem}
                                key={item.price}
                            >
                                {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default MuiSelect;
