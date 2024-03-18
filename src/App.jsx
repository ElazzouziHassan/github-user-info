import { useState } from 'react';
import './App.css'
import UserForm from './components/UserForm'
import UserInfo from './components/UserInfo'

function App() {

  const [user, setUser] = useState(null);
  
  const getUser = (userData) => {
    setUser(userData);
  };

  return (
    <>
      <h1>GitHub User Info</h1>
      <UserForm getUser={getUser} />
      <UserInfo user={user} />
    </>
  )
}

export default App
