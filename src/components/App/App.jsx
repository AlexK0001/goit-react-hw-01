import './App.css'
import userData from '../../userDat.json';
import friends from "../../friends.json"
import Profile from '../Profile/Profile'
import FriendList from '../FriendList/FriendList'

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
     <FriendList friends={friends} />
   </>
   );
};
  
