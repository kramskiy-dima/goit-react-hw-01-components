import PropTypes from "prop-types";
import defualtImage from "./defualt.png";

const Profile = ({
  name,
  avatar,
  tag,
  location,
  stats: { followers, views, likes },
}) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt={name} className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defualtImage,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Profile;
