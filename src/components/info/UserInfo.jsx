import React from 'react'
import "./user-info.scss";

export default function UserInfo({user}) {
  return (
    <div className="user-info">
      {user && (
        <div>
          <div className="user-card">
            <div className="avatar">
              <img src={user.avatar_url} alt="avatr" />
            </div>
            <div className="bio">
              <h2>{user.name}</h2>
              <h2>{user.location}</h2>
              <p>
                {user.bio}
              </p>
            </div>
            <div className="stats">
              <div className="repos">
                <span>Repositories</span>
                <span>{user.public_repos}</span>
              </div>
              <div className="followers">
                <span>Followers</span>
                <span>{user.followers}</span>
              </div>
              <div className="following">
                <span>Following</span>
                <span>{user.following}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
