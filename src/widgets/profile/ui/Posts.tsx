import Image from 'next/image';
import postsIcon from '@assets/posts-icon.svg';
import styles from '../styles.module.scss';

const Posts = () => {
  return (
    <div className={styles.posts}>
      Тут посты, рилсы и тагеты (чтобы это ни значило)
      <br />
      По идее кнопки-табы ещё, чтоб совсем красиво было
      <div className={styles.content}>
        <button className={`btn-reset ${styles.content__posts}`}>POSTS</button>
      </div>
    </div>
  );
};

export default Posts;
