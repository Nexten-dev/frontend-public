import profile from './constants/profile';
import reccomendList from './constants/reccomendList';
import styles from './style.module.scss';
import { CurrentProfile } from './components/CurrentProfile';
import { ReccomendList } from './components/ReccomendList';
import { SideNavigation } from './components/SideNavigation';
import { Copyright } from './components/Copyright';

const AsideRecommend = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles['aside__inner']}>
        <CurrentProfile profile={profile} />
        <ReccomendList list={reccomendList} />
        <SideNavigation />
        <Copyright/>
      </div>
    </aside>
  );
};

export default AsideRecommend;