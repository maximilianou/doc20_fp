import React from 'react';
import UserTable from './tables/UserTable';
const App = () => {
  return (
    <div className="container">
      <h2> CRUD App with Hooks </h2>
      <div className="flex-row">
        <div className="flex-large">
          <h3>Add User</h3>
        </div>
        <div className="flex-large">
          <h3>View Users</h3>
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default App;
