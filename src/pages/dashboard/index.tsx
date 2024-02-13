import styles from '@/styles/Dashboard.module.css'
import { inter, roboto } from '@/fonts/fonts'
import Pie, { ProvidedProps, PieArcDatum } from '@visx/shape/lib/shapes/Pie'
import classNames from 'classnames'
import Sidebar from '@/components/sideBar'

// sidebar + basically one page website
export default function Dashboard() {
    return (
        <div className={styles.flexContainer}>
            <Sidebar />
            {/* divided into grids */}
            <div className={styles.mainContainer}>
                <div>
                    <h1 className={roboto.className} id={styles.dashboardTitle}>Dashboard</h1>
                </div>
                <div className={styles.latestContainer}>
                    <div className={styles.dashboardBox}>
                        <h1 className={roboto.className}>Latest Job Scan</h1>
                        <p className={roboto.className}></p>
                    </div>
                    <div className={styles.dashboardBox}>
                        <h1 className={roboto.className}>View Latest Resume</h1>
                    </div>
                    <div className={styles.dashboardBox}>
                        <h1 className={roboto.className}>Resume Builder</h1>
                    </div>
                </div>
                <div className={styles.graphContainer}>
                    <div className={styles.graphBox}>
                        <h1 className={roboto.className}>Match Graph</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}