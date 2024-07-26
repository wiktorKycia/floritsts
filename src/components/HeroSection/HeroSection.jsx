import styles from "./HeroSection.module.css";

function HeroSection()
{
    return(
        <section className={styles.section}>
            <h1>Welcome to Blossom Boutique – Where Every Bloom Tells a Story</h1>
            <button className={styles.button}>order now</button>
        </section>
    )
}
export default HeroSection;