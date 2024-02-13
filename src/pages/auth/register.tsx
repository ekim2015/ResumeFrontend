import styles from '@/styles/Auth.module.css'
import Link from 'next/link'

import { inter, roboto } from '@/fonts/fonts'

async function registrationHandler() {
    let inputUser = document.getElementById("username").value
    let inputPW = document.getElementById("password").value
    let inputEmail = document.getElementById('email').value

    if (inputUser != null && inputPW != null && inputEmail != null) {
        let data = {
            username: inputUser,
            password: inputPW,
            email: inputEmail
        }

        console.log(JSON.stringify(data))

        fetch('http://localhost:8080/auth/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(() => { console.log("Registration completed!") })
        .catch((e) => { console.log(e) })
    }
}

export default function RegistrationPage() {
    return (
        <div className={`${styles.formContainer} ${roboto.className}`}>
            <div className={styles.boxContainer}>
                <div className={styles.leftBox}>
                    <img src='/watercolor-2681039_1920.jpg' />
                </div>
                <div className={styles.centerBox}>
                    <div className={styles.titleArea}>
                        <h1>Register</h1>
                        <div>
                            <p>Have an account? <span><Link href='/auth/login'>Login</Link></span></p>
                        </div>
                    </div>
                    <label className={roboto.className}>Username: </label>
                    <input type="text" id="username"></input>
                    <label className={roboto.className}>Email: </label>
                    <input type="text" id="email"></input>
                    <label className={roboto.className}>Password: </label>
                    <input type="password" id="password"></input>
                    <br></br>
                    <button onClick={registrationHandler}>Submit</button>
                </div>
            </div>
        </div>
    )
}