import React from 'react';
const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th> 
        <th>UserName</th> 
        <th>Action</th> 
      </tr>
    </thead> 
    <tbody>
      { props.users.length > 0 ? (
        props.users.map( (user) => (
      <tr key={user.id}>
        <th>{user.name}</th> 
        <th>{user.username}</th> 
        <th>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </th> 
      </tr> 
      ))
      ) : (
      <tr><td colSpan={3}>No users</td></tr>
      ) }
    </tbody>
  </table>
);
export default UserTable;
 
