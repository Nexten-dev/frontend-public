import styles from './style.module.scss';

const AsideRecommend = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles['aside__inner']}>
        Рекомендации для подписки
      </div>
    </aside>
  );
};

export default AsideRecommend;