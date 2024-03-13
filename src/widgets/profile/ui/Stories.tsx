import Story from './Story';
import styles from '../styles.module.scss';

const Stories = () => {
  return (
    <ul className={styles.stories}>
      <li>
        <Story />
      </li>
      <li>
        <Story />
      </li>
    </ul>
  );
};

export default Stories;
