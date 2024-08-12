import css from './Friends.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'

export default function FriendList({friends}) {
    return (
    <div>
      <ul className={css.list}>
        {friends.map((item) => (
          <li key={item.id}>
            <FriendListItem friends={item} />
          </li>
        ))}
      </ul>
  </div>
    )
  }