import clsx from 'clsx';
import { Post } from './components/Post';
import { posts } from './constants/posts';
import styles from './styles.module.scss';
import { StaticImageData } from 'next/image';
import { comment } from './constants/commentsArray';

export type Props = {
  item: {
      id: number
      userName: string
      profilePicture: StaticImageData
      isStories: boolean
      verifyBage: boolean
      timeElapsed: string
      postImg: StaticImageData
      likesQty: number
      postDescr: string
      comments: comment
  }
}

const Posts = () => {
  return (
    <div className={styles.container}>
      <ul className={clsx('list-reset', styles.posts)}>
        {
          posts.map(item => (
            <li key={item.id} className={styles.posts__item}>
              <Post item={item} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Posts;