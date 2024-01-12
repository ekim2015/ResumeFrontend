// contains in order: home, about, login/register
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'

export default function NavBar() {
    return (
        <div className={styles.navbarContainer}>
            <Link href='/home'>
                <button className={styles.nav}>Home</button>
            </Link>
            <Link href="/about">
                <button className={styles.nav}>About</button>
            </Link>
            <Link href='/login'>
                <button className={styles.nav}>Login</button>
            </Link>
        </div>
    )
}