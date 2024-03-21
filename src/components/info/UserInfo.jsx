import React from 'react'
import "./user-info.scss";

export default function UserInfo({user}) {
  return (
    <div className="user-info">
      <h2>User Info</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Username: {user.login}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repos: {user.public_repos}</p>
        </div>
      )}
    </div>
  )
}
