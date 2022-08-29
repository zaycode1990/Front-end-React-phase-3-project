import React, {useState} from 'react'

function TodoForm({setUpdatedUserData}) {
    const h1Style = {
        textAlign: "center",
        marginTop: "5%",
      }
    
    
    
    
      const [task, setTask] = useState("")
      const [userName, setUserName] = useState("")
      const [completed, setCompleted] = useState("")
     
    
    
      function handleSubmit(e) {
        e.preventDefault()

        const userData = {
          task,
          userName,
          completed,
        }
        fetch('http://localhost:9292/todos', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
        .then((res) => res.json())
        .then((updatedtodo) => setUpdatedUserData(updatedtodo))
        .catch((err) => console.log('error: ', err))

      }
    
      return (
        <div>
    
    
          <h1 style={h1Style}>Add Task to list</h1>
    
    
          <form label="Add Task" className='formStyle' onSubmit={handleSubmit}>
            <input type="text" required placeholder='Task' value={task} onChange={(e) => { setTask(e.target.value) }} />
            <input type="text" required placeholder='Name' value={userName} onChange={(e) => { setUserName(e.target.value) }} />
            <input type="text" required placeholder='Task Status' value={completed} onChange={(e) => { setCompleted(e.target.value) }} />
            <button type="submit">Submit</button>
          </form>
        </div>
      )
    }
    



export default TodoForm