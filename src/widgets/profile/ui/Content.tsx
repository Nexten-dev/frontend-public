import Image from 'next/image';
import styles from '../styles.module.scss';

const Content = () => {
  return (
    <div className={styles.content}>
      <button className={styles.content__posts}>
        <Image src='@assets/posts-icon.svg' alt='posts'></Image>
      </button>
    </div>
  );
};

export default Content;
