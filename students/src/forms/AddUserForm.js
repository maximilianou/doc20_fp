import React, { useState } from 'react';
const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', username: ''};
  const [user, setUser] = useState( initialFormState );
  const handleInputChange = ( event ) => {
    event.preventDefault();
    console.log(  event.target.name + "::" + event.target.value  );
    const { name, value } = event.target;
    setUser( { ...user, [name]:value } ); 
  };
  return (
    <form onSubmit={ event => {
        event.preventDefault();
        if( !user.name || !user.username ){
          return false;
        }else{
          props.addUser(user);
          setUser( initialFormState );
        }
      }} >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>User Name</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button> New User </button>
    </form>
  );
};

export default AddUserForm; 

