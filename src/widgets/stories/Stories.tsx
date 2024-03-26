import Story from '../../entities/story';
import imgStory1 from '@assets/story1.png';
import imgStory2 from '@assets/story2.png';
import styles from './styles.module.scss';

const stories = [
  {
    id: 1,
    loock: false,
    imageSource: imgStory1,
    description: 'Metallica'
  },
  {
    id: 2,
    loock: true,
    imageSource: imgStory2,
    description: 'Frisbee'
  }
];

const Stories = () => {
  return (
    <ul className={`list-reset ${styles.stories}`}>
      {stories.map((item) => (
        <li className={styles.stories__item} key={item.id}>
          <Story
            loock={item.loock}
            imageSource={item.imageSource}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default Stories;
