import Content from '../ui/Content';
import InfoHeader from '../ui/InfoHeader';
import Nav from '../ui/Nav';
import InfoFooter from '../ui/InfoFooter';
import styles from '../styles.module.scss';

const ProfileEdit = () => {
  return (
    <div className={styles["block"]}>
      <InfoHeader/>
      <Content/>
      <Nav/>
      <InfoFooter/>
    </div>
  );
};

export default ProfileEdit;