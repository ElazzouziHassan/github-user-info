import axios from 'axios';
import React, { useState } from 'react';
import "./user-form.scss";


export default function UserForm({getUser}) {

  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${username}`);
    getUser(response.data);
    setUsername('');
    // *****************************************************************************
    // try{
    //   const res = await fetch(`https://api.github.com/users/${username}`);
    //   if (!res.ok) {
    //     throw new Error('User not found');
    //   }
    //   const userData = await res.json();
    //   getUser(userData);
    //   setUsername('');
    // }catch (err){
    //   console.error('Error fetching user data:', err);
    // }
    // *****************************************************************************
  }

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            name="username" 
            id="usernme" 
            value={username}
            placeholder='GitHub Username' 
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="submit">Get User Info</button>
      </form>
    </div>
  )
}
