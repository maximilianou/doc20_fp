import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
const App = () => {
  const usersData = [
    {id: 10, name: 'Jose', username: 'josesito'},
    {id: 12, name: 'Maria', username: 'mary'},
    {id: 14, name: 'Pedro', username: 'peter'}
  ];
  const [users, setUsers] = useState(usersData);
  const addUser = user => {
    user.id = ( 
      users.reduce( (prev, curr) => {return (prev.id > curr.id) ? prev : curr} ) 
    ).id++; // Auto Increment temporary replacement.
    setUsers( [...users, user] );
  };
  return (
    <div className="container">
      <h2> CRUD App with Hooks </h2>
      <div className="flex-row">
        <div className="flex-large">
          <h3>Add User</h3>
          <AddUserForm addUser={addUser} /> 
        </div>
        <div className="flex-large">
          <h3>View Users</h3>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
