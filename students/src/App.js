import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
const App = () => {
  const usersData = [
    {id: 10, name: 'Jose', username: 'josesito'},
    {id: 12, name: 'Maria', username: 'mary'},
    {id: 14, name: 'Pedro', username: 'peter'}
  ];
  const [ users, setUsers ] = useState(usersData);
  const addUser = user => {
    user.id = ( 
      users.reduce( (prev, curr) => {return (prev.id > curr.id) ? prev : curr} ) 
    ).id++; // Auto Increment temporary replacement.
    setUsers( [ ...users, user ] );
  };
  const delUser = ( uid ) => {
      setEditing(false)
      setUsers( users.filter( user => user.id !== uid ) )
  };
  const [ editing, setEditing ] = useState(false);
  const initialStateForm = { id: null, name: '', username: '' };
  const [ currentUser, setCurrentUser ] = useState( initialStateForm );
  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  const updateUser = ( id, updateUser ) => {
    setEditing(false);
    setUsers( users.map( user => (user.id === id ? updateUser : user ) ) ); 
  };
  return (
    <div className="container">
      <h2> CRUD App with Hooks </h2>
      <div className="flex-row">
        { editing ? (
          <div className="flex-large"> 
            <h2> Edit User </h2>
            <EditUserForm 
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div> 
        ) : (
          <div className="flex-large">
            <h3>Add User</h3>
            <AddUserForm addUser={addUser} /> 
          </div>
        ) }
        <div className="flex-large">
          <h3>View Users</h3>
          <UserTable delUser={delUser} editRow={editRow}  users={users}  />
        </div>
      </div>
    </div>
  );
}

export default App;
