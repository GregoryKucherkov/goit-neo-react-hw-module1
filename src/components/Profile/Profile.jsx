import css from "./Profile.module.css"


function Profile({name, tag, location, image, stats}) {
  return (
    <div className={css.container}>
      <div>
        <img
          className={css.img}
          src={image}
          alt="User avatar"
        />
        <p className={css.name}>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.dscrpt}>
        <li className={css.stats}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.stats}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.stats}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
