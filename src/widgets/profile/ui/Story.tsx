import styles from '../styles.module.scss';
import Image from 'next/image';
import type { PropsStory } from '../model/types';

function Story({
  imageSource,
  altText,
  imageW,
  imageH,
  description,
}: PropsStory) {
  return (
    <div className={styles.story}>
      <button type='button' className={styles.story__preview}>
        <Image
          src={imageSource}
          alt={altText}
          width={imageW}
          height={imageH}
        ></Image>
      </button>
      <span className={styles.story__description}>{description}</span>
    </div>
  );
}

export default Story;
