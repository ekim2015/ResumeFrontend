import styles from '@/styles/Auth.module.css'
import { roboto, inter } from '@/fonts/fonts'
import { useState, useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function ForgotPassword() {
    let [passed, setPassed] = useState(false) 
    
    if (!passed) {
        return (
            <div className={styles.formContainer}>
                <div className={styles.centerBox}>
                    <h1 className={roboto.className}>Forgot password?</h1>
                    <label className={roboto.className}>Email: </label>
                    <input type="email"></input>
                    <button onClick={() => setPassed(true)}>Submit</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.formContainer}>
                <div className={styles.centerBox}>
                    <p className={roboto.className}>Password reset link sent.</p>
                </div>
            </div>
        )
    }
}