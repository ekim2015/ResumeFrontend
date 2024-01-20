import { useEffect } from 'react'
import styles from '@/styles/Auth.module.css'

async function Verification() {
    fetch('http://localhost:8080/auth/verify', {
        method: "POST"
    })
    .then((res) => res.json())
    .catch((e) => console.log(e))
}

export default function VerifyPage() {
    useEffect(() => {
        Verification().catch((e) => console.log(e))
    })
    
    return (
        <div className={styles.formContainer}>
            <h1>Temporary verification page...</h1>
        </div>
    )
}