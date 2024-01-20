// contains in order: home, about, login/register
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { inter, roboto, bebas_neue } from '@/fonts/fonts'

export default function NavBar() {
    return (
        <div className={styles.navbarContainer}>
            <p className={bebas_neue.className} id={styles.logo}>Resuma</p>
            <Link className={[styles.linkButton, inter.className].join(' ')} href='/home'>
                Home
            </Link>
            <Link className={[styles.linkButton, inter.className].join(' ')} href="/about">
                About
            </Link>
            <Link className={[styles.linkButton, inter.className].join(' ')} href='/auth/login'>
                Login
            </Link>
            <button id={styles.dashButton} className={inter.className}>
                Dashboard
            </button>
        </div>
    )
}