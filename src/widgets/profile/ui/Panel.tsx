import avatar from '@assets/avatar.jpg';
import styles from '../styles.module.scss';

const user = {
  nickname: 'vasya',
};

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
          <span className={styles.panel__nickname}>{user.nickname}</span>
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
      </div>
    </div>
  );
};

export default Panel;
