import { useEffect, useState } from 'react'
import './App.css'
import { User } from "./types/User"

function App() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("/api/users")
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div className="App">
            <ul>
                {
                    users.map((user: User) => {
                        return <li key={user.id}>{user.username}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default App
