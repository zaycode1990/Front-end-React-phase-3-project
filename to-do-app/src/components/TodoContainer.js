import React from 'react'
import TodoForm from './TodoForm'
import TodoTable from './TodoTable'
import { useEffect } from 'react'
import { useState } from 'react'



function TodoContainer() {

    const [userData, setUserData] = useState([])
    const [updatedUserData, setUpdatedUserData] = useState([])
    useEffect(() => {
        fetch('http://localhost:9292/users')
            .then(res => res.json())
            .then(Data => setUserData([...Data]))
    }, [updatedUserData])

    const handlePatch = (todo) => {
        console.log(todo.id)
        fetch(`http://localhost:9292/todos/${todo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                completed: !todo.completed
            }),
        })
            .then((res) => res.json())
            .then((updatedtodo) => setUpdatedUserData(updatedtodo))
            .catch((err) => console.log('error: ', err))

    }

    const handleDelete = (todo) => {
        fetch(`http://localhost:9292/todos/${todo}`
      , {

        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    }


    console.log(userData)
    return (
        <>    <TodoForm />
            <TodoTable userData={userData} handlePatch={handlePatch} handleDelete={handleDelete}/> </>




    )

}


export default TodoContainer