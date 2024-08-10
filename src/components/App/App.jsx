import react from "react";
import './App.css'
import userData from "../userData/userDat.json";
import css from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <img src={image} alt={`${name}'s avatar`} className = {css.avatar}/>
      <p className = {css.name}>{name}</p>
      <p className = {css.tag}>@{tag}</p>
      <p className = {css.location}>{location}</p>
      <ul className ={css.stats}>
        <div className={css.li}>
        <li className = {css.label}>Followers: </li>
        <li className = {css.quantity}>{stats.followers}</li>
        </div>
        <div className={css.li}>
        <li className = {css.label}>Views: </li>
        <li className = {css.quantity}>{stats.views}</li>
        </div>
        <div className={css.li}>
        <li className = {css.label}>Likes: </li>
        <li className = {css.quantity}>{stats.likes}</li>
        </div>
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
  
