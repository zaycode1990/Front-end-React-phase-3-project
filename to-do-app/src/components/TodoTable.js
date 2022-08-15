import React from 'react';
import Table from 'react-bootstrap/Table';
import TodoRow from './TodoRow';

function TodoTable({userData, handlePatch, handleDelete}) {
    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User</th>
              <th>Task</th>
              <th>Completed</th>
              <th>Time task was created</th>
              <th>Done?</th>
              <th>Task Updated</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {userData.map(data=> <TodoRow key={data.id} data={data} handlePatch={handlePatch} handleDelete={handleDelete}/>)}

          </tbody>
        </Table>
      );
}

export default TodoTable