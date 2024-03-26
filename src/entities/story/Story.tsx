import type { PropsStory } from './interface/types';
import styles from './styles.module.scss';

function Story({ imageSource, description, loock }: PropsStory) {
  let stylePreview = loock
    ? `${styles.story__preview}`
    : `${styles['story__preview']} ${styles['story__preview--gradient']}`;
  return (
    <div className={styles.story}>
      <button type='button' className={`btn-reset ${stylePreview}`}>
        <div
          className={styles.story__image}
          style={{ backgroundImage: `url(${imageSource.src})` }}
        ></div>
      </button>
      <span className={styles.story__description}>{description}</span>
    </div>
  );
}

export default Story;
