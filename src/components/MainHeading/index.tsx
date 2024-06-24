import styles from './index.module.css'
interface MainHeadingProps {
    heading: string;
    additionalClassName?: string;
}
const MainHeading: React.FC<MainHeadingProps> = ({ heading, additionalClassName }) => {
    const className = `${styles.heading} ${additionalClassName ? additionalClassName : ''}`;

    return (
        <p className={className}>{heading}</p>
    )
}
export default MainHeading;