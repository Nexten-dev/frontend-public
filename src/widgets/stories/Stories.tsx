import styles from "./styles.module.scss";
import storiesList from "./consts/storiesList";
import Story from "./Story";
import clsx from "clsx";

const Stories = () => {
  return (
    <div className={styles.stories}>
      <ul className={clsx('list-reset', styles.list)}>
        {
          storiesList.map(item => (
            <li key={item.id} className={styles['list-item']}>
              <Story
                item={item}
              />
            </li>
          )
          )
        }
      </ul>
    </div >
  );
};

export default Stories;