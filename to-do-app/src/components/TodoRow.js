import React from 'react'
import Button from 'react-bootstrap/Button';


function TodoRow({data, handlePatch, handleDelete}) {



  // console.log(data)
  return (
    <>
   { data.to_dos.length === 0 ? null : <tr>
    <td>{data.name}</td>
    <td>{data.id}</td>
    <td>{data.to_dos[0].task}</td>
    <td>{String(data.to_dos[0].completed)}</td>
    <td>{data.to_dos[0].created_at}</td>
    <td ><Button variant="primary" onClick={() => handlePatch(data.to_dos[0])}>{data.to_dos[0].completed ? "Not Done" : "Done"}</Button></td>
    <td>{data.to_dos[0].updated_at}</td>
    <td>{data.to_dos[0].completed ? <Button variant="danger" onClick={()=> handleDelete(data.to_dos[0])}>Remove Task</Button> : "Pending Task Removal" } </td>
  </tr>}
</> 
 )
}

export default TodoRow