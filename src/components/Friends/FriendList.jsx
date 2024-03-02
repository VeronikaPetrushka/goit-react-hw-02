import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            friendName={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};


const FriendListItem = ({ avatar, friendName, isOnline }) => {
  return (
    <div className={css.friendBox}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{friendName}</p>
      <p className={`${css.friendStatus} ${isOnline ? css.isOnline : css.isOffline}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendList;