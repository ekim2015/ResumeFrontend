import { useState, useRef } from 'react'
import { roboto } from '@/fonts/fonts'
import { data } from '@/data/builderData'
import { NavBar } from '@/components/navBar'

import styles from '@/styles/Builder.module.css'


export default function Builder() {
    let [page, setPage] = useState(0)
    let [institution, setInstitution] = useState('')
    let [skills, setSkills] = useState([])
    let [jobs, setJobs] = useState([])
    let [numSkills, setNumSkills] = useState(0)

    let [done, setDone] = useState(false)

    function keyHandler(e) {
        let key = e.key
        if (key == "Enter" & page == 1 & numSkills < 10) {
            let addValue = document.getElementById('input').value
            if (!skills.includes(addValue)) {
                setSkills(skills => [...skills, addValue])
                setNumSkills(numSkills + 1)
            }
        }
    }

    function getNextPage() {
        if (page < 2) {
            document.getElementById('input').value = ''
            setPage(page + 1)
        } else {
            setDone(true)
        }
    }

    if (done === false) {
        return (
            <div className={`${styles.mainContainer} ${roboto.className}`}>
                <h1>{data[page].title}</h1>
                <div className={styles.itemGrid}>
                    { skills.length > 0 & page == 1
                    ? skills.map(skill => 
                    <div className={styles.itemBubble}>
                        <p>{skill}</p>
                        <button>X</button>
                    </div>) 
                    : <div></div>}
                </div>
                <input placeholder={data[page].desc} id="input" style={{ width: '25%' }} onKeyDown={(e) => {keyHandler(e)}}></input>
                <button onClick={getNextPage}>Next</button>
            </div>
        )
    } else {
        return (
            <div className={`${styles.halfContainer} ${roboto.className}`}>
                <div className={styles.listedColumn}>
                    <table>
                        <tr>
                            <td>Skill</td>
                        </tr>
                        { skills.map(skill => <tr><td>{skill}</td></tr>) }
                    </table>
                    <div>
                        <h1>College: </h1>
                        <p>{institution}</p>
                    </div>
                </div>
                <div className={styles.documentColumn}>
                    <p>Hi</p>
                </div>
            </div>
        )
    }

}