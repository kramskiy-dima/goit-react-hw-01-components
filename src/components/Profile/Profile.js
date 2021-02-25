import PropTypes from "prop-types";
import defualtImage from "./defualt.png";
import s from "./Profile.module.css";

const Profile = ({
  name,
  avatar,
  tag,
  location,
  stats: { followers, views, likes },
}) => (
  <div className={s.container}>
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} width="150" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
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
