import styles from '@/styles/Main.module.css'
import Image from 'next/image'
import { roboto, inter, bebas_neue } from '@/fonts/fonts'
import Link from 'next/link'

import NavBar from '@/components/navBar'
import Footer from '@/components/footer'

export default function Home() {

    return (
        <div>
            <NavBar />
            <div className={styles.mainLayout}>
                <div className={styles.textContainer}>
                    <h1 className={bebas_neue.className} id={styles.introTitle}>Resuma</h1>
                    <p className={bebas_neue.className} id={styles.titleText}>A resume scanner for aspiring workers, free of cost.</p>
                    <p className={bebas_neue.className} id={styles.titleText}>Ideal for new graduates and job hunting pros.</p>
                </div>
                <div className={styles.aboutBox}>
                    <p className={inter.className} id={styles.boxTitle}>Mission</p>
                    <p className={inter.className}>The purpose of Resuma is to empower jobseekers to make themselves the best
                    candidate as possible. We noticed that many resume scanners today require people to pay for crucial features,
                    lowering their accessibility for disadvantaged jobseekers. We want to change that today.</p>
                    <Link href='/about' id={styles.learnMore} className={bebas_neue.className}>Learn More</Link>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <h1 className={inter.className}>Resume Builder</h1>
                        <br></br>
                        <p className={inter.className}>Build your dream resume with the Resume
                        Builder tool provided by Resuma! The resume builder uses pre-filled fields and artificial intelligence
                        to produce the best resume we can create!</p>
                        <button>Find out</button>
                    </div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}