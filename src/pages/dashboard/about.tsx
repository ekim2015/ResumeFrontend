import Sidebar from '@/components/sideBar'
import { inter, roboto } from '@/fonts/fonts'
import styles from '@/styles/Dashboard.module.css'

export default function DashAbout() {
    return (
        <div className={styles.aboutContainer}>
            <Sidebar />
            <div className={styles.aboutBox}>
                <h1 className={roboto.className}>Resume Scanner</h1>
                <p className={roboto.className}>The aim of this project is to provide a resume scanner free of charge.
                We are leveraging NLP techniques in order to gather a list of the highest ranked keywords in a job posting, and
                then detecting whether those keywords are being used.</p>
                <br></br>
                <p className={roboto.className}>The dashboard contains charts regarding past keyword uploads, list of 
                soft skills scanned, and list of technical skills scanned. This includes the number of times certain
                keywords have appeared in the job posting, and how many times those words are used in 
                the resume.</p>
                <br></br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Tt08KmFfIYQ?si=LipYv2xAm-WU793M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}