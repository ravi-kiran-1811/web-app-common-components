import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import clock from '../../../assets/clock.svg';
import bus from '../../../assets/bus.svg';
import ImageAndText from '../ImageAndText';
import styles from './index.module.css'
interface TabContent {
    label: string;
    imageUrl: string;
    activeImageUrl: string;
    content: React.ReactNode;
}

interface BasicTabsProps {
    tabContents: TabContent[];
    indicatorColor?: string;
    selectedTabColor?: string;
    unselectedTabColor?: string;
    tabContainerGap?: string;
    tabBorderBottomColor?: string;
    tabPanelPadding?: number;
}

interface TabPanelProps {
    index: number;
    value: number;
    content: React.ReactNode;
}

function CustomTabPanel(props: TabPanelProps) {
    const { value, index, content, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {content}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({
    tabContents,
    indicatorColor = "#CD342B",
    selectedTabColor = "#09843E",
    unselectedTabColor = "#4D4D4D",
    tabContainerGap = "25px",
    tabBorderBottomColor = "#E0E0E0",
    tabPanelPadding = 3,
}: BasicTabsProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "auto", "&.MuiTabs-root": { width: "auto" } }}>
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: indicatorColor,
                            border: `1px solid ${indicatorColor}`,
                        },
                    }}
                    sx={{
                        "&.MuiTabs-root": {
                            width: "fit-content",
                        },
                        marginTop: "24px",
                        ".MuiTabs-flexContainer": {
                            display: "flex",
                            gap: tabContainerGap,
                            borderBottom: `3px solid ${tabBorderBottomColor}`,
                        },
                    }}
                >
                    {tabContents.map((tab, index) => (
                        <Tab
                            sx={{
                                fontSize: 16,
                                fontWeight: 500,
                                fontFamily: "var(--font-montserrat)",
                                lineHeight: 0,
                                textAlign: "left",
                                textTransform: "none",
                                color: unselectedTabColor,
                                padding: '10px 13px 7px 19px',
                                "&.Mui-selected": {
                                    color: `${selectedTabColor} !important`,
                                    padding: '10px 13px 7px 19px !important',
                                    fontWeight: 700,
                                },
                            }}
                            key={index}
                            label={
                                <Box className={styles.tabs}>
                                    <img
                                        src={value === index ? tab.activeImageUrl : tab.imageUrl}
                                        alt={`Icon for ${tab.label}`}
                                    />
                                    <p className={styles.label}>{tab.label}</p>
                                </Box>
                            }
                            {...a11yProps(index)}
                        />
                    ))}
                </Tabs>
            </Box>
            {tabContents.map((tab, index) => (
                <CustomTabPanel key={index} value={value} index={index} content={tab.content} />
            ))}
        </Box>
    );
}
