import express, { Request, Response } from "express"
import cors from "cors"
import { User } from "./types/User"
import { Category } from "./types/Category"

const app = express()
const port = process.env.port || 5050

app.use(cors());
app.options('*', cors());

app.get("/users", (req: Request, res: Response) => {
    const users: User[] = [
        {id: 1, firstname: 'Tanguy', lastname: 'Kervran', username: 'utiiz'},
        {id: 2, firstname: 'Laura', lastname: 'Pagnucco', username: 'awa'},
        {id: 3, firstname: 'Adrien', lastname: 'Rioual', username: 'mavys'},
        {id: 4, firstname: 'Phylippe', lastname: 'Jeanmart', username: 'phyloutubs'},
    ]
    res.json(users)
})

app.get("/categories", (req: Request, res: Response) => {
    const categories: Category[] = [
        {id: 1, name: 'To Do', userIds: [1, 2, 3]},
        {id: 2, name: 'In Progress', userIds: [4]},
        {id: 3, name: 'Done', userIds: []},
    ]
    res.json(categories)
})

app.listen(port, () => {
    console.info(`⚡️Listening on port ${port}`)
})
