import PropTypes from "prop-types";

const FriendListItem = ({ props }) => (
  <ul className="friend-list">
    {props.map((friend) => (
      <li key={friend.id} className="item">
        {friend.isOnline ? (
          <span className="statusOnline"></span>
        ) : (
          <span className="statusOffline"></span>
        )}

        <img
          className="avatar"
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className="name">{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendListItem.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendListItem;
