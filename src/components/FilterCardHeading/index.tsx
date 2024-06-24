import styles from './index.module.css'
interface FilterCardHeadingTextProps {
    heading: string;
    additionalClassName?: string;
}
const FilterCardHeadingText: React.FC<FilterCardHeadingTextProps> = ({ heading, additionalClassName }) => {
    const className = `${styles.heading} ${additionalClassName ? additionalClassName : ''}`;

    return (
        <p className={className}>{heading}</p>
    )
}
export default FilterCardHeadingText;