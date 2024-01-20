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
                    <h1 className={roboto.className}>Keyword Percentage</h1>
                    <p className={roboto.className}></p>
                </div>
                <div>
                    <p>Testing 123</p>
                </div>
                <div>
                    <p>Lorem dorup ipsum</p>
                </div>
                <div>
                    <p>Testing 123</p>
                </div>
            </div>
        </div>
    )
}