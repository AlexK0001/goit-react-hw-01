import friends from './friends.json'
import clsx from "clsx";
import css from './'

export default function FriendListItem ({
    friends: {avatar, name, isOnline, id} 
}) {
    const containerClsx = clsx(
        css.container,
        isOnline ? css.isOnline : css.isRetired
      );
    
    return (
      <li className={containerClsx}>
        <img src={friends.avatar} alt={friends.name} width="48" />
        <p>{friends.name}</p>
        <p>{friends.isOnline}</p>
      </li>
    )
  }