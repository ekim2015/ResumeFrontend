import styles from '@/styles/Dashboard.module.css'
import Link from 'next/link'
import classnames from 'classnames'
import { inter, roboto } from '@/fonts/fonts'

export default function Sidebar() {
    return (
        <div className={[styles.sideBar, roboto.className].join(' ')}>
                <p id={styles.sidebarTitle}>Resuma</p>
                <div className={styles.sideButton} id={styles.homeButton}>
                    <Link href='/dashboard' className={styles.linkButton} id={styles.topButton}>Home</Link>
                </div>
                <div className={styles.sideButton}>
                    <Link href='/dashboard/results' className={styles.linkButton}>Results</Link> 
                </div>
                <div className={styles.sideButton}>
                    <Link href='/dashboard/upload' className={styles.linkButton}>Upload</Link>
                </div>
                <div className={styles.sideButton}>
                    <Link href='/dashboard/settings' className={styles.linkButton}>Settings</Link>
                </div>
                <div className={styles.sideButton}>
                    <Link href='/dashboard/about' className={styles.linkButton}>About</Link>  
                </div>
        </div>
    )
}