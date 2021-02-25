import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ props }) => (
  <div className={s.container}>
    <ul className={s.friendList}>
      {props.map((friend) => (
        <li key={friend.id} className={s.item}>
          {friend.isOnline ? (
            <span className={s.statusOnline}></span>
          ) : (
            <span className={s.statusOffline}></span>
          )}

          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  </div>
);

FriendListItem.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      name: PropTypes.string,
      avatar: PropTypes.string,
    })
  ).isRequired,
};

export default FriendListItem;
