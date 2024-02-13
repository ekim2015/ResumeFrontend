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
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(() => {
            // if we can login and sign the token, then redirect
        })
        .catch((e) => { console.log(e) })
    }    
}

export default function LoginPage() {
    return (
        <div className={`${styles.formContainer} ${roboto.className}`}>
            <div className={styles.boxContainer}>
                <div className={styles.leftBox}>
                    <img src='/texture-1909992_1280.jpg' />
                </div>
                <div className={styles.centerBox}>
                    <div className={styles.titleArea}>
                        <h1>Login</h1>
                        <div>
                            <p>Don't have an account? <span><Link href='/auth/register'>Register</Link></span></p>
                        </div>
                    </div>
                    <label>Username/Email: </label>
                    <input type="text" id="username"></input>
                    <br></br>
                    <label>Password: </label>
                    <input type="password" id="password"></input>
                    <div className={styles.buttonLevel}>
                        <button onClick={loginHandler}>Submit</button>
                        <Link href={'/auth/forgot'} id={styles.forgot}>Forgot password?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}