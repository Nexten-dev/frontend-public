import avatar from '@assets/avatar.jpg';
import styles from '../styles.module.scss';

const user = {
  nickname: 'vasya',
  name: 'Vasiliy ',
  surname: 'Matroskin',
  bio: 'In order to sell something unnecessary, you must first buy something unnecessary.',
  website: 'matroskin.ru',
  websiteHref: 'http://matroskin.ru/',
  verify: true,
  posts: '1,861',
  followers: '4M',
  following: '454',
  followedBy: 'sharik',
};

let userVerify = user.verify
  ? `${styles['panel__nickname']} ${styles['panel__nickname--verify']}`
  : `${styles.panel__nickname}`;

const Panel = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.panel__avatar}>
        <div className={styles.avatar}>
          <div
            className={styles.avatar__url}
            style={{ backgroundImage: `url(${avatar.src})` }}
          ></div>
        </div>
      </div>
      <div className={styles.panel__info}>
        <div className={styles.panel__action}>
          <span className={userVerify}>{user.nickname}</span>
          <ul className={`list-reset ${styles['panel__list-btn']}`}>
            <li className={styles['panel__item-btn']}>
              <button className={`btn-reset ${styles.panel__following}`}>
                Following
              </button>
            </li>
            <li className={styles['panel__item-btn']}>
              <button className={`btn-reset ${styles.panel__message}`}>
                Message
              </button>
            </li>
            <li className={styles['panel__item-btn']}>
              <button className={`btn-reset ${styles.panel__add}`}></button>
            </li>
          </ul>
          <button className={`btn-reset ${styles.panel__burger}`}></button>
        </div>
        <ul className={`list-reset ${styles['panel__counters-list']}`}>
          <li className={styles['panel__counters-item']}>
            <span className={styles['panel__counters-posts']}>
              {user.posts}
            </span>{' '}
            posts
          </li>
          <li className={styles['panel__counters-item']}>
            <span className={styles['panel__counters-followers']}>
              {user.followers}
            </span>{' '}
            followers
          </li>
          <li className={styles['panel__counters-item']}>
            <span className={styles['panel__counters-following']}>
              {user.following}
            </span>{' '}
            following
          </li>
        </ul>
        <div className={styles.panel__personal}>
          <div className={styles.panel__fullname}>
            <span className={styles.panel__name}>{user.name}</span>
            <span className={styles.panel__surname}>{user.surname}</span>
          </div>
          <div className={styles.panel__bio}>{user.bio}</div>
          <div className={styles.panel__website}>
            <a href={user.websiteHref} className='link-reset'>
              {user.website}
            </a>
          </div>
          <div className={styles['panel__followed-by']}>
            <span className={styles.followed}>Followed by </span>
            <span className={styles['followed-user']}>{user.followedBy}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
