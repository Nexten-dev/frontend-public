import Image from 'next/image';
import post1 from '@assets/post1.jpg';
import styles from '../styles.module.scss';

const Content = () => {
  return (
    <div className={styles.content}>
      <ul className={`list-reset ${styles['btn-list']}`}>
        <li className={styles['btn-item']}>
          <button
            className={`btn-reset ${styles['btn-posts']} ${styles['content__btn']} ${styles['content__btn--active']}`}
          >
            POSTS
          </button>
        </li>
        <li className={styles['btn-item']}>
          <button
            className={`btn-reset ${styles['btn-reels']} ${styles['content__btn']}`}
          >
            REELS
          </button>
        </li>
        <li className={styles['btn-item']}>
          <button
            className={`btn-reset ${styles['btn-tagged']} ${styles['content__btn']}`}
          >
            TAGGED
          </button>
        </li>
      </ul>
      <div className={styles['content__posts']}>
        <Image src={post1} alt='post1'></Image>
        <Image src={post1} alt='post1'></Image>
        <Image src={post1} alt='post1'></Image>
      </div>
    </div>
  );
};

export default Content;
