import styles from '@/styles/Scanner.module.css'
import { useState } from 'react'

// page where basic scans can be conducted (no save capability)
export default function ScannerPage() {
    let [skills, setSkills] = useState([])
    let skillListItems = skills.map((skill) => {
        if (skill != null) {
            <li>
                {skill}
            </li>
        } else {
            <li>Waiting for upload.</li>
        }
    })
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.inputHolder}>
                <textarea placeholder="Job Posting" id="posting" rows="40" cols="20"></textarea>
                <textarea placeholder="Resume" id="resume" rows="40" cols="20"></textarea>
            </div>
            <button onClick={() => {
                let data = {
                    posting: document.getElementById('posting').value
                }

                // regex expression used to remove new lines and breaks
                data.posting = data.posting.replace(/(\r\n|\n|\r)/gm, "")
                
                fetch('http://localhost:8080/keywords', {
                    method: "POST",
                    headers: {
                        "Application-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then((res) => res.json())
                .then((data) => {
                    setSkills(data)
                    console.log(data)
                })
                .catch((e) => console.log(e))
            }}>Submit</button>
            <p id={styles.middleText}>OR</p>
            <div className={styles.upload}>
                <button>Upload</button>
            </div>
        </div>
    )
}