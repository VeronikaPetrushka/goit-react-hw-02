import clsx from 'clsx'
import css from './socialProfile.module.css'

const Profile = ({ name, image, tag, location, stats }) => {
    return (
        <div className={css.profile}>
            <div className={css.userInfo}>
                <span className={css.userImgWrapper}>
                    <img className={css.userImg}
                    src={image}
                    alt="User avatar"
                />
                </span>
                <p className={css.userName}>{name}</p>
                <p className={css.userDesc}>@{tag}</p>
                <p className={css.userDesc}>{location}</p>
            </div>
            <ul className={css.userStats}>
                <li className={css.userStatItem}>
                    <span className={css.userStatItemText}>Followers </span>
                    <span className={css.userStatItemValue}>{stats.followers}</span>
                </li>
                <li className={css.userStatItem}>
                    <span className={clsx(css.userStatItemText, css.userViews)}>Views </span>
                    <span className={css.userStatItemValue}>{stats.views}</span>
                </li>
                <li className={css.userStatItem}>
                    <span className={clsx(css.userStatItemText, css.userLikes)}>Likes </span>
                    <span className={css.userStatItemValue}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;