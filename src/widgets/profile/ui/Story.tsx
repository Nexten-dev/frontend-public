import styles from '../styles.module.scss';
import Img from './Img';
import storyImg1 from '../img/story-1.jpg';

console.log(storyImg1);
const Story = () => {
  return (
    <div className={styles.story}>
      <button type='button' className={styles.story__preview}>
        <Img></Img>
      </button>
      <span className={styles.story__description}>description</span>
    </div>
  );
};

export default Story;
