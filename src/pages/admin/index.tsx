import { useEffect, useState } from 'react'

export default function AdminPage() {
    let [admin, setAdmin] = useState(false)
    
    // verify if user is admin
    useEffect(() => {
        fetch('http://localhost:8080/admin', {
            method: "GET",
            credentials: 'include',
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (Object.keys(data).length > 1) {
                setAdmin(data['admin'])
            }
        })
        .catch((e) => console.log(e))
    })

    

    if (!admin) {
        return (
            <h1>Unable to access this page!</h1>
        )
    } else {
        return (
            <h1>You have admin!</h1>
        )
    }
}