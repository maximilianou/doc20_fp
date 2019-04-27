import React from 'react';
const UserTable = () => (
  <table>
    <thead>
      <tr>
        <th>Name</th> 
        <th>UserName</th> 
        <th>Action</th> 
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th> name </th> 
        <th> user_name </th> 
        <th>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </th> 
      </tr>
    </tbody>
  </table>
);
export default UserTable;
 
