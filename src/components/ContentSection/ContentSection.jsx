import styles from './ContentSection.module.css';
import PropTypes from 'prop-types';

function ContentSection(props)
{
    return(
        <section className={styles.section}>
            <h2 className={styles.h2}>{props.title}</h2>
            <div className={styles.container}>{props.children}</div>
        </section>
    )
}
ContentSection.propTypes = {
    title: PropTypes.string
}
ContentSection.defaultProps = {
    title: "Bestsellers of 2024"
}
export default ContentSection;