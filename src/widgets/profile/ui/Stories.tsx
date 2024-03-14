import Story from './Story';
import styles from '../styles.module.scss';
// import type { PropsStories } from '../model/types';
import imgStory1 from '../img/story1.png';
import imgStory2 from '../img/story2.png';

const stories = [
  {
    id: 1,
    imageSource: imgStory1,
    altText: 'Metallica',
    imgW: 75,
    imgH: 31,
    description: 'Metallica',
  },
  {
    id: 2,
    imageSource: imgStory2,
    altText: 'Frisbee',
    imgW: 75,
    imgH: 75,
    description: 'Frisbee',
  },
];

console.log('Начало');
console.log(stories[0].imageSource);
console.log(stories[0].imageSource);
console.log(stories[0].imageSource);
console.log(stories[0].imageSource);
console.log(stories[0].imageSource);
console.log(stories[0].imageSource);
console.log('Конец');

const Stories = () => {
  return (
    <ul className={styles.stories}>
      {stories.map((item) => (
        <li className={styles.stories__item} key={item.id}>
          <Story
            imageSource={item.imageSource.src}
            altText={item.altText}
            imageW={item.imgW}
            imageH={item.imgH}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default Stories;
