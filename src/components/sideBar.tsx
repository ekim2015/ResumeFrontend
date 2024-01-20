import styles from '@/styles/Dashboard.module.css'
import Link from 'next/link'
import classnames from 'classnames'
import { inter, roboto } from '@/fonts/fonts'

export default function Sidebar() {
    return (
        <div className={styles.sideBar}>
                <Link href='/dashboard' className={styles.linkButton}>Home</Link>
                <Link href='/dashboard/upload' className={styles.linkButton}>Upload</Link>
                <Link href='/dashboard/settings' className={styles.linkButton}>Settings</Link>
                <Link href='/dashboard/about' className={styles.linkButton}>About</Link>            
        </div>
    )
}