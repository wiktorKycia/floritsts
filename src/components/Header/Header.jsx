import styles from './Header.module.css';

function Header() {
    return(
        <header className={styles.container}>
            <h1 className={styles.h1}>Blossom Boutique</h1>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}><a href="#">Home</a></li>
                    <li className={styles.li}><a href="#">About</a></li>
                    <li className={styles.li}><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;