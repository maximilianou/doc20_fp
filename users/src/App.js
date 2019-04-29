import React from 'react';
import HomePage from  './HomePage'
import { UserProvider } from './UserContext'
function App() {
  const user = { name: 'Tania', loggetId:true }
  return (
    <UserProvider value={user} >
     <HomePage />
    </UserProvider>
  );
}

export default App;
