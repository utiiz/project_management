import express, { Request, Response } from "express"
import cors from "cors"
import { User } from "./types/User"

const app = express()
const port = process.env.port || 5000

app.use(cors());
app.options('*', cors());

app.get("/users", (req: Request, res: Response) => {
    var users: User[]= [
        {id: 1, firstname: 'Tanguy', lastname: 'Kervran', username: 'utiiz'},
        {id: 2, firstname: 'Laura', lastname: 'Pagnucco', username: 'awa'},
        {id: 3, firstname: 'Adrien', lastname: 'Rioual', username: 'mavys'},
    ]
    res.json(users)
})

app.listen(port, () => {
    console.info(`⚡️Listening on port ${port}`)
})
