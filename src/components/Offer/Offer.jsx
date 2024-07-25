import styles from './Offer.module.css';

function Offer(props)
{
    return(
        <div className={styles.image}>
            <img src={props.image} alt="flower" />
            <div id="overlay">
                <p>{props.text}</p>
                <button>order now</button>
            </div>
        </div>
    )
}
export default Offer;