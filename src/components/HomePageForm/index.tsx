import React, { useState } from 'react';
import styles from './index.module.css';
import {
    InputLabel,
    MenuItem,
    Select,
    FormControl,
    Box,
    Button,
} from "@mui/material";
import icons2 from '../../assets/icons-2.svg';
import date from '../../assets/date-icon.svg';
import excange from '../../assets/exchange.svg';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
    LocalizationProvider,
    DesktopDatePicker,
} from "@mui/x-date-pickers";
import ReservationFormStyle from './home';
import dayjs from "dayjs";

interface HopePageFormProps {
    className?: string;
    routes: { from: string; to: string }[];
    onRouteSelect: (from: string, to: string) => void;
    selectedTo: string;
    selectedFrom: string;
}

const buttons = [
    { label: 'Today', style: styles.button1 },
    { label: 'Tommarow', style: styles.button1 },
];

const HomePageForm: React.FC<HopePageFormProps> = ({
    routes,
    onRouteSelect,
    selectedFrom,
    selectedTo,
}) => {

    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [isClicked, setIsClicked] = useState(false);

    // from input logic
    const handleFromChange = (event: any) => {
        onRouteSelect(event.target.value, selectedTo);
    };

    // to input logic
    const handleToChange = (event: any) => {
        onRouteSelect(selectedFrom, event.target.value);
    };

    // swapping icon logic
    const handleExchange = () => {
        setIsClicked(!isClicked);
        onRouteSelect(selectedTo, selectedFrom);
    };

    // default date logic
    const handleDateChange = (newValue: any) => {
        setSelectedDate(newValue);
    };

    // today button date logic
    const handleTodayClick = () => {
        setSelectedDate(dayjs());
    };

    // tommarow button date logic
    const handleTomorrowClick = () => {
        setSelectedDate(dayjs().add(1, "day"));
    };

    return (
        <div className={styles.bookYourTicketForm}>
            <Box className={styles.container}>
                <Box className={styles.inputContainer}>
                    <Box className={styles.inputBox1}>
                        <FormControl className={styles.formControl}>
                            <InputLabel
                                sx={ReservationFormStyle.inputLabel}
                                id="from-label"
                            >
                                From
                            </InputLabel>
                            <Select
                                labelId="from-label"
                                id="from-select"
                                value={selectedFrom}
                                label="from"
                                onChange={handleFromChange}
                                IconComponent={(props) => (
                                    <img
                                        src={icons2}
                                        alt="Image Description"
                                        {...props}
                                        loading="lazy"
                                    />
                                )}
                                sx={ReservationFormStyle.select1}
                            >
                                {routes.map((location) => (
                                    <MenuItem key={location.from} value={location.from} className={styles.menuStyles}>
                                        {location.from}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button className={styles.exchangeIcon} onClick={handleExchange}>
                            <img loading="lazy" alt="exchange icon" src={excange} />
                        </Button>
                    </Box>
                    <Box className={styles.inputBox2}>
                        <FormControl className={styles.formControl}>
                            <InputLabel id="to-label" sx={ReservationFormStyle.inputLabel}>
                               To
                            </InputLabel>
                            <Select
                                labelId="to-label"
                                id="to-select"
                                value={selectedTo}
                                label="to"
                                onChange={handleToChange}
                                IconComponent={(props) => (
                                    <img
                                        src={icons2}
                                        alt="Image Description"
                                        {...props}
                                        loading="lazy"
                                    />
                                )}
                                sx={ReservationFormStyle.select2}
                            >
                                {routes
                                    .filter((location) => location.to !== selectedFrom)
                                    .map((location) => (
                                        <MenuItem key={location.to} value={location.to} className={styles.menuStyles}>
                                            {location.to}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box className={styles.inputBox3}>
                    <Box className={styles.inputBox4}>
                        <Box className={styles.inputBox5}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    format="DD-MM-YYYY"
                                    sx={{
                                        ...ReservationFormStyle.datePicker,
                                        '.MuiButtonBase-root.MuiPickersDay-root.Mui-selected': {
                                            backgroundColor: 'green !important',
                                            color: '#fff !important',
                                            '&:hover': {
                                                backgroundColor: 'darkgreen !important',
                                            },
                                        },
                                    }}
                                    shouldDisableDate={(date) => dayjs(date).isBefore(dayjs(), 'day')}
                                    slotProps={{
                                        textField: {
                                            size: "medium",
                                            fullWidth: false,
                                            required: false,
                                            autoFocus: false,
                                            error: false,
                                            color: "primary",
                                            placeholder: "Date",
                                            InputProps: {
                                                className: styles.datePickerInputProps,
                                            },
                                            InputLabelProps: {
                                                sx: ReservationFormStyle.inputlabel1,
                                            },
                                        },
                                        openPickerIcon: {
                                            component: () => (
                                                <img
                                                    className={styles.datePickerIcon}
                                                    src={date}
                                                    alt="Date Picker Icon"
                                                    loading="lazy"
                                                />
                                            ),
                                        },
                                        openPickerButton: {
                                            className: styles.iconButton,
                                        },
                                    }}
                                    label="Date"
                                />
                            </LocalizationProvider>
                        </Box>
                        <Box className={styles.box}>
                            {buttons.map((button, index) => (
                                <button
                                    key={button.label}
                                    className={button.style}
                                    onClick={
                                        index === 0 ? handleTodayClick : handleTomorrowClick
                                    }
                                >
                                    {button.label}
                                </button>
                            ))}
                        </Box>
                    </Box>
                    <div className={styles.checkBoxContainer}>
                        <div className={styles.checkboxField}>
                            <input className={styles.frameInput} type="checkbox" />
                            <div className={styles.iWantTo}>{'ROUND_TRIP'}</div>
                        </div>
                        <Box className={styles.box2}>
                            <a className={styles.button} href='#' target="_blank">
                                <b className={styles.applyNow}>{'SEARCH_BUSSES'}</b>
                            </a>
                        </Box>
                    </div>
                </Box>
            </Box>
        </div>
    );
};

export default HomePageForm;
