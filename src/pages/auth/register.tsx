import styles from '@/styles/Login.module.css'

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
        <div className={styles.formContainer}>
            <div>
                <label>Username: </label>
                <input type="text" id="username"></input>
                <label>Email: </label>
                <input type="text" id="email"></input>
                <label>Password: </label>
                <input type="password" id="password"></input>
                <button onClick={registrationHandler}>Submit</button>
            </div>
        </div>
    )
}