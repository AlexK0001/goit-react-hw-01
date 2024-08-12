import './App.css'
import userData from '../../userDat.json';
import friends from "../../friends.json"
import Profile from '../Profile/Profile'
import FriendList from '../FriendList/FriendList'
import TransactionHistory from '../TransactionHistory/TransactionHistory'
import transactions from '../../transactions.json'

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
     <TransactionHistory items={transactions} />
   </>
   );
};


