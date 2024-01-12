import { useState } from 'react'
import styles from '@/styles/Login.module.css'

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
            console.log("Login successful!")
        })
        .catch((e) => { console.log(e) })
    }    
}

export default function LoginPage() {
    return (
        <div className={styles.formContainer}>
            <div>
                <label>Username/Email: </label>
                <input type="text" id="username"></input>
                <label>Password: </label>
                <input type="password" id="password"></input>
                <button onClick={loginHandler}>Submit</button>
            </div>
        </div>
    )
}