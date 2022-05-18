import { useEffect, useState, useCallback } from 'react'
import './App.css'
import styled from 'styled-components'
import { User } from "./types/User"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const Header = styled.div`
    font-weight: bold;
    color: #76acf9;
    border-bottom: 1px solid #76acf9;
    padding-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 5px;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 10px;

`

function UserItem(props: any) {
    return (
        <Draggable draggableId={props.user.id.toString()} index={props.index}>
            {
                (provided: any, snapshot: {isDragging: boolean, draggingOver: string}) => (
                    <div 
                        {...provided.dragHandleProps}
                        ref={provided.innerRef} 
                        {...provided.draggableProps} 
                        className={`user-item ${snapshot.isDragging ? "is-dragging" : ""}`}
                    >
                        <Checkbox/>
                        <div className="name">
                            {props.user.firstname} "{props.user.username}" {props.user.lastname}
                        </div>
                        {/* <div */} 
                        {/*     className="handle" */}
                        {/* > */}
                        {/* </div> */}
                    </div>
                )
            }
        </Draggable>
    )
}

const App = () => {
    const [users, setUsers] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("/api/users")
            .then(response => response.json())
            .then(data => setUsers(data))

        fetch("/api/categories")
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    const onDragStart = useCallback((event) => {
    }, [])

    const onDragEnd = useCallback(({ destination, source, draggableId }) => {

        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        let src = categories[parseInt(source.droppableId)]

        if (source.droppableId === destination.droppableId) {
            let userIds = Array.from(src.userIds)
            userIds.splice(destination.index, 0, userIds.splice(source.index, 1)[0])
            let newSrc = {
                ...src,
                userIds: userIds
            }

            const newCategory = Array.from(categories)
            newCategory.splice(parseInt(source.droppableId), 1, newSrc)

            setCategories(newCategory)
            return
        }

        let dest = categories[parseInt(destination.droppableId)]

        let srcColumn = Array.from(categories[parseInt(source.droppableId)].userIds)
        let destColumn = Array.from(categories[parseInt(destination.droppableId)].userIds)

        destColumn.splice(destination.index, 0, srcColumn.splice(source.index, 1)[0])

        let newSrc = {
            ...src,
            userIds: srcColumn
        }
        let newDest = {
            ...dest,
            userIds: destColumn
        }

        const newCategory = Array.from(categories)
        newCategory.splice(parseInt(source.droppableId), 1, newSrc)
        newCategory.splice(parseInt(destination.droppableId), 1, newDest)

        setCategories(newCategory)
    }, [users, categories])

    return (
        <div className="app">
            <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
                {
                    categories.map((category, idx) => (
                        <div className="droppable" key={idx}>
                            <Header>{ category.name }</Header>
                            <Droppable droppableId={idx.toString()}>
                                {
                                    (provided: any) => (
                                        <div ref={provided.innerRef} {...provided.droppableProps} className="droppable-area">
                                            {
                                                category.userIds.map((id, index) => (
                                                    <UserItem user={users.find(x => x.id === id)} index={index} key={id}/>
                                                ))
                                            }
                                            {provided.placeholder}
                                        </div>
                                    )
                                }
                            </Droppable>
                        </div>
                    ))
                }
            </DragDropContext>
        </div>
    )
}

export default App
