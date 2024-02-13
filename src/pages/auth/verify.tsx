import { useEffect, useState } from 'react'
import styles from '@/styles/Auth.module.css'

export default function VerifyPage() {
    let [ verified, setVerified ] = useState(false)
    
    useEffect(() => {
        fetch('http://localhost:8080/auth/verify', {
            method: "GET",
            credentials: "include"
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setVerified(data['verified'])
        })
        .catch((e) => console.log(e))
    })

    console.log(`Status: ${verified}`)
    
    if (!verified) {
        return (
            <div>
                <h1>Temporary verification page...</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Verified!</h1>
            </div>
        )
    }
}