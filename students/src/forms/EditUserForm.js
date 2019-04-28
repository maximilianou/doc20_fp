import React, { useState } from 'react'
const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser( {...user, [name]: value } );
  }
  return(
    <form onSubmit={ event => {
       event.preventDefault();
       props.updateUser(user.id, user);
     }
     }
    >
      <label> Name </label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label> UserName </label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button> Update User </button>
      <button onClick={ () => props.setEditable(false) } className="button muted-button">
        Cancel
      </button>
    </form>
  )
}
export default EditUserForm;