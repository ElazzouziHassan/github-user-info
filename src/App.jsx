import { useState } from 'react';
import './App.css'
import UserForm from './components/form/UserForm'
import UserInfo from './components/info/UserInfo'

function App() {

  const [user, setUser] = useState(null);
  
  const getUser = (userData) => {
    setUser(userData);
  };

  return (
    <div className="app">
      <h1>GitHub User Info</h1>
      <div className="form">
        <UserForm getUser={getUser} />
      </div>
      <div className="info">
        <UserInfo user={user} />
      </div>
    </div>
  )
}

export default App
