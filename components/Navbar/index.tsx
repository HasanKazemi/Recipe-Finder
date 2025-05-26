import Link from 'next/link'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <h1 className={styles.pageTitle}>Recipe Finder</h1>
        </div>
        <div className={styles.navLinkContainer}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/" className={styles.navLink}>Favorites</Link>
            <Link href="/" className={styles.navLink}>About</Link>
        </div>
    </nav>
  )
}

export default Navbar