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
            <div className={styles.mainContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.descriptionContainer}>
                        <h1 className={roboto.className}>Upload</h1>
                        <p className={roboto.className}>This tab is for uploading your resume. Files of .pdf, .doc, .docx, and .txt of up to 10 MB in size are allowed.</p>
                    </div>
                    <div className={styles.side}>
                        <button className={[styles.styledButton, roboto.className].join(' ')}>Upload</button>
                    </div>
                </div>
                <div className={styles.listContainer}>
                    <div className={styles.list}>
                        {mappedItems}
                    </div>
                </div>
            </div>
        </div>
    )
}