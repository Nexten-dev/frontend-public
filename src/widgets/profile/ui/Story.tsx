import styles from '../styles.module.scss';
import Image from 'next/image';
import type { PropsStory } from '../model/types';

function Story({ imageSource, description }: PropsStory) {
  return (
    <div className={styles.story}>
      <button type='button' className={styles.story__preview}>
        <Image
          src={imageSource.src}
          alt={description}
          width={imageSource.width}
          height={imageSource.height}
        ></Image>
      </button>
      <span className={styles.story__description}>{description}</span>
    </div>
  );
}

export default Story;
