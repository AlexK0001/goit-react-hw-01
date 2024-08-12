// import friends from '../../friends.json'
import clsx from "clsx";
import css from './FriendListItem.module.css'

export default function FriendListItem 
({ friends: {isOnline, name, avatar} })
  {
    const containerClsx = clsx(
    css.container,
    isOnline? css.isOnline : css.isRetired
    );
    
    return (
      <li className={containerClsx}>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
        <p>{isOnline ? "Online" : "Offline"}</p>
      </li>
    )
  }