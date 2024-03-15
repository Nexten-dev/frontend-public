import styles from '../styles.module.scss';
import type { PropsStory } from '../model/types';

function Story({ imageSource, description }: PropsStory) {
  return (
    <div className={styles.story}>
      <button
        type='button'
        className={styles.story__preview}
        style={{ backgroundImage: imageSource.src }}
      ></button>
      <span className={styles.story__description}>{description}</span>
    </div>
  );
}

export default Story;
