import { useState } from 'react';
import UserForm from './components/form/UserForm';
import UserInfo from './components/info/UserInfo';
import './App.scss';

function App() {

  const [user, setUser] = useState(null);
  
  const getUser = (userData) => {
    setUser(userData);
  };

  return (
    <div className="app">
      <div className="heading">
        <h1>GitHub User Info</h1>
      </div>
      <div className="main">
        <div className="form">
          <UserForm getUser={getUser} />
        </div>
        <div className="info">
          <UserInfo user={user} />
        </div>
      </div>
    </div>
  )
}

export default App
