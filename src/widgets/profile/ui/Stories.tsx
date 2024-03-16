import Story from './Story';
import imgStory1 from '@assets/story1.png';
import imgStory2 from '@assets/story2.png';
import styles from '../styles.module.scss';

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
  {
    id: 1,
    imageSource: imgStory1,
    description: 'Metallica',
  },
];

const Stories = () => {
  return (
    <ul className={`list-reset ${styles.stories}`}>
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
