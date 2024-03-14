import Story from './Story';
import styles from '../styles.module.scss';

const Stories = () => {
  return (
    <ul className={styles.stories}>
      <li className={styles.stories__item}>
        <Story description='BTS' />
      </li>
      <li>
        <Story description='Frisbee' />
      </li>
    </ul>
  );
};

export default Stories;
