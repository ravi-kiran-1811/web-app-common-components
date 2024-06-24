import styles from "./index.module.css";

interface LabelPropsType {
    heading?: string;
    subHeading?: string;
    className?: string;
    headingClassName?: string;
    subHeadingClassName?: string;
}

const BannerTitleSubTitle: React.FC<LabelPropsType>= ({ heading, subHeading, className, headingClassName, subHeadingClassName }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <h1 className={`${styles.heading} ${headingClassName}`}>
                {heading}
            </h1>
            <p className={`${styles.subHeading} ${subHeadingClassName}`}>
                {subHeading}
            </p>
        </div>
    );
};

export default BannerTitleSubTitle;
