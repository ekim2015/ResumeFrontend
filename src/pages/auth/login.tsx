import { useState } from 'react'
import { redirect } from 'next/navigation'
import styles from '@/styles/Auth.module.css'
import { inter, roboto } from '@/fonts/fonts'
import Link from 'next/link'

async function loginHandler() {
    let inputUser = document.getElementById("username").value
    let inputPW = document.getElementById("password").value

    if (inputUser != null && inputPW != null) {
        console.log("Validating input password successfully: " + inputPW)

        let data = {
            username: inputUser,
            password: inputPW
        }
        
        fetch('http://localhost:8080/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(() => {
            // if we can login and sign the token, then redirect
            redirect('/auth/verify')
        })
        .catch((e) => { console.log(e) })
    }    
}

export default function LoginPage() {
    return (
        <div className={styles.formContainer}>
            <div className={styles.centerBox}>
                <label className={roboto.className}>Username/Email: </label>
                <input type="text" id="username"></input>
                <br></br>
                <label className={roboto.className}>Password: </label>
                <input type="password" id="password"></input>
                <div className={styles.buttonLevel}>
                    <button onClick={loginHandler}>Submit</button>
                    <Link href={'/auth/forgot'} className={roboto.className} id={styles.forgot}>Forgot password?</Link>
                </div>
            </div>
        </div>
    )
}