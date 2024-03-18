import React from 'react'

export default function UserForm() {
  return (
    <div className="user-form">
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <label htmlFor="username">GitHub Username</label><br />
          <input 
            type="text" 
            name="username" 
            id="usernme" 
            placeholder='Enter Your GitHub Username' 
          />
        </div>
        <button type="submit">Get User Info</button>
      </form>
    </div>
  )
}
