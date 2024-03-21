import Image from 'next/image';
import post1 from '@assets/post1.jpg';
import post2 from '@assets/post2.jpeg';
import post3 from '@assets/post3.jpeg';
import styles from '../styles.module.scss';
/*
let tabBtn = document.querySelectorAll('.how__link-step');
let tabItem = document.querySelectorAll('.how__content');

tabBtn.forEach(function (elem) {
  elem.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabBtn.forEach(function (btn) {
      btn.classList.remove('how__link-step_active');
    });

    e.currentTarget.classList.add('how__link-step_active');

    tabItem.forEach(function (element) {
      element.classList.remove('how__content_active');
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add('how__content_active');
  });
});
*/

const Content = () => {
  return (
    <div className={styles.content}>
      <ul className={`list-reset ${styles['btn-list']}`}>
        <li className={styles['btn-item']}>
          <button
            className={`btn-reset ${styles['btn-posts']} ${styles['content__btn']} ${styles['content__btn--active']}`}
            data-path='posts'
          >
            POSTS
          </button>
        </li>
        <li className={styles['btn-item']}>
          <button
            className={`btn-reset ${styles['btn-reels']} ${styles['content__btn']}`}
            data-path='reels'
          >
            REELS
          </button>
        </li>
        <li className={styles['btn-item']}>
          <button
            className={`btn-reset ${styles['btn-tagged']} ${styles['content__btn']}`}
            data-path='tagged'
          >
            TAGGED
          </button>
        </li>
      </ul>
      <ul
        className={`list-reset ${styles['content__list']}`}
        data-target='posts'
      >
        <li className={styles['content__item']} style={{ height: 342 }}>
          <button className={`btn-reset ${styles['content__view']}`}>
            <Image
              src={post1}
              alt='post1'
              fill={true}
              objectFit='cover'
            ></Image>
          </button>
        </li>
        <li className={styles['content__item']} style={{ height: 342 }}>
          <button className={`btn-reset ${styles['content__view']}`}>
            <Image
              src={post2}
              alt='post2'
              fill={true}
              objectFit='cover'
            ></Image>
          </button>
        </li>
        <li className={styles['content__item']} style={{ height: 342 }}>
          <button className={`btn-reset ${styles['content__view']}`}>
            <Image
              src={post3}
              alt='post3'
              fill={true}
              objectFit='cover'
            ></Image>
          </button>
        </li>
        <li className={styles['content__item']} style={{ height: 342 }}>
          <button className={`btn-reset ${styles['content__view']}`}>
            <Image
              src={post1}
              alt='post1'
              fill={true}
              objectFit='cover'
            ></Image>
          </button>
        </li>
      </ul>
      <ul
        className={`list-reset ${styles['content__list']}`}
        data-target='reels'
      >
        <li className={styles['content__item']} style={{ height: 342 }}>
          <button className={`btn-reset ${styles['content__view']}`}>
            <Image
              src={post1}
              alt='post1'
              fill={true}
              objectFit='cover'
            ></Image>
          </button>
        </li>
        <li className={styles['content__item']} style={{ height: 342 }}>
          <button className={`btn-reset ${styles['content__view']}`}>
            <Image
              src={post1}
              alt='post1'
              fill={true}
              objectFit='cover'
            ></Image>
          </button>
        </li>
        <li className={styles['content__item']} style={{ height: 342 }}>
          <button className={`btn-reset ${styles['content__view']}`}>
            <Image
              src={post1}
              alt='post1'
              fill={true}
              objectFit='cover'
            ></Image>
          </button>
        </li>
      </ul>
      <ul
        className={`list-reset ${styles['content__list']}`}
        data-target='tagged'
      >
        <li className={styles['content__item']} style={{ height: 342 }}>
          <button className={`btn-reset ${styles['content__view']}`}>
            <Image
              src={post1}
              alt='post1'
              fill={true}
              objectFit='cover'
            ></Image>
          </button>
        </li>
        <li className={styles['content__item']} style={{ height: 342 }}>
          <button className={`btn-reset ${styles['content__view']}`}>
            <Image
              src={post2}
              alt='post2'
              fill={true}
              objectFit='cover'
            ></Image>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Content;
