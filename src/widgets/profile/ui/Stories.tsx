import Story from './Story';
import styles from '../styles.module.scss';
// import type { PropsStories } from '../model/types';
import imgStory1 from '../img/story1.png';
import imgStory2 from '../img/story2.png';

const stories = [
  {
    id: 1,
    imageSource: imgStory1,
    description: 'Metallica',
  },
  {
    id: 2,
    imageSource: imgStory2,
    description: 'Frisbee',
  },
];

const Stories = () => {
  return (
    <ul className={styles.stories}>
      {stories.map((item) => (
        <li className={styles.stories__item} key={item.id}>
          <Story
            imageSource={item.imageSource}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default Stories;
