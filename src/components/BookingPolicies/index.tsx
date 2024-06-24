import React from "react";
import FilterCardHeadingText from "../FilterCardHeading";
import BulletPoints from "../BulletPoints";
import Tables from "../Tables/index";
import styles from './index.module.css'
type typeOfTheObject = "link" | "heading" | "bullet points" | "table" | "note";


interface DataItem {
    type: string;
    text?: string;
    data?: string[] | any[];
}

interface BookingPoliciesProps {
    array: DataItem[];
}
const BookingPolicies: React.FC<BookingPoliciesProps> = ({ array }) => {
    return (
        <div>
            {array !== undefined && 
                array.map((item, index) => {
                    switch (item.type) {
                        case "heading":
                            return (
                                <FilterCardHeadingText key={index} heading={item.text || ""} additionalClassName={styles.headingText} />
                            );
                        case "bullet points":
                            return <BulletPoints key={index} items={item.data as string[]} />;
                        case "table":
                            return (
                                <Tables
                                    key={index}
                                    rows={item.data as { [key: string]: string | number }[]}
                                />
                            );
                        default:
                            return null;
                    }
                })}
        </div>
    );
};
export default BookingPolicies;