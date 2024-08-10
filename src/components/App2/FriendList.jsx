import css from ''
import FriendListItem from './FriendListItem'

export default function FriendList(friends: {id}) {
    return (
    <div>
      <ul className={css.list}>
        {friends.map((item) => (
          <li key={item.id}>
            <FriendListItem />
          </li>
        ))}
      </ul>
  </div>
    )
  }