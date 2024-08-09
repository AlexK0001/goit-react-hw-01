import React from "react";
import './App.css'
import userDat from "../userData/userDat.json";

const userData = JSON.parse(userDat);

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <img src={image} alt={`${name}'s avatar`} />
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
      <ul>
        <li>Followers: </li>
        <li>{stats.followers}</li>
        <li>Views: </li>
        <li>{stats.views}</li>
        <li>Likes: </li>
        <li>{stats.likes}</li>
      </ul>
    </div>
  );
};
  
export default function App () {
    return (
      <>
        <Profile
          image={userData.avatar}
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          stats={userData.stats}
        />
      </>
    );
  };
  
