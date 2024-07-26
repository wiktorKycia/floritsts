import styles from './Offer.module.css';

function Offer(props)
{
    return(
        <article className={styles.article}>
            <img src={props.image} alt="flower" className={styles.img}/>
            <div className={styles.overlay}>
                <p className={styles.offertext}>{props.text}</p>
                <button className={styles.button}>order now</button>
            </div>
        </article>
    )
}
export default Offer;