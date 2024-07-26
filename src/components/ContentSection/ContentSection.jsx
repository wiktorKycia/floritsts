import styles from './ContentSection.module.css';

function ContentSection(props)
{
    return(
        <section className={styles.section}>
            <h2 className={styles.h2}>{props.title}</h2>
            <div className={styles.container}>{props.children}</div>
        </section>
    )
}
export default ContentSection;