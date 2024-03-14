import styles from '../styles.module.scss';
import Img from './Img';

type Props = {
  description: string;
};

function Story({ description }: Props) {
  return (
    <div className={styles.story}>
      <button type='button' className={styles.story__preview}>
        <Img></Img>
      </button>
      <span className={styles.story__description}>{description}</span>
    </div>
  );
}

export default Story;
