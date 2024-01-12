import styles from '@/styles/Main.module.css'
import Image from 'next/image'
import { roboto } from '@/fonts/fonts'

import NavBar from '@/components/navBar'

export default function Home() {

    return (
        // table layout into rows:
        <div>
            <NavBar />
            <div className={styles.mainLayout}>
                <div className={roboto.className} style={{ backgroundColor: '#242582', padding: '8vw' }}>
                    <p>Welcome to the resume scanner! This resume scanner uses keyword extraction from job postings in order to determine whether
                        your resume is industry-ready!
                    </p>
                </div>
                <div>
                    <Image 
                    src="/codePhoto.jpg"
                    alt="Stock photo of code"
                    width={1920}
                    height={1080}
                    style={{ height: '100%', width: '100%' }}
                    />
                </div>
                <div>
                    <Image
                    src="/resumePhoto.jpg"
                    alt="Resume stock photo"
                    width={1920}
                    height={1080}
                    style={{ height: '100%', width: '100%' }}
                    />
                </div>
                <div className={roboto.className} style={{ backgroundColor: '#3aafa9', padding: '8vw' }}>
                    <p>Using our AI analysis tool, we can rank and extract appropriate keywords. We will analyze your resume text for soft skills and technical skills based on job postings!</p>
                </div>
            </div>
        </div>
    )
}