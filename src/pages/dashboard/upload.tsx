import Sidebar from '@/components/sideBar'
import { inter, roboto } from '@/fonts/fonts'
import styles from '@/styles/Dashboard.module.css'

function uploadFile() {
    
}

export default function DashUpload() {
    let fileArray = ['Resume1.pdf', 'Resume2.pdf', 'Resume3.pdf', 'Resume4.pdf', 'Resume5.pdf']
    let mappedItems = fileArray.map((file) => 
      <div className={styles.item}>{file}</div>
    )

    return (
        <div className={styles.aboutContainer}>
            <Sidebar />
            <div className={styles.itemsList}>
                <div className={styles.item} id='uploadTitle'><h1>List of Uploaded Resumes</h1></div>
                {mappedItems}
            </div>
            <div>
                <button className={styles.btngrad}>Upload</button>
            </div>
        </div>
    )
}