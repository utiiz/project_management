import { useEffect, useState, useCallback } from 'react'
import './App.css'
import { User } from "./types/User"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

function UserItem(props: any) {
    return (
        <Draggable draggableId={props.user.id.toString()} index={props.index}>
            {
                (provided: any) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="user-item">{props.user.firstname} "{props.user.username}" {props.user.lastname}</div>
                )
            }
        </Draggable>
    )
}

function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("/api/users")
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])

    const onDragEnd = useCallback((result: any) => {
        console.log(result)
    }, [])

    return (
        <div className="App">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="droppable">
                    <Droppable droppableId="droppable">
                        {
                            (provided: any) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {
                                        users.map((user, index) => (
                                            <UserItem user={user} index={index} key={user.id}/>
                                        ))
                                    }
                                    {provided.placeholder}
                                </div>
                            )
                        }
                    </Droppable>
                </div>
            </DragDropContext>
        </div>
    )
}

export default App
