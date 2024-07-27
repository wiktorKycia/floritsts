import styles from './Offer.module.css';
import PropTypes from 'prop-types';

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
Offer.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
}
Offer.defaultProps = {
    image: "./assets/flower1.jpg",
    text: "Flower Bouquet"
}
export default Offer;