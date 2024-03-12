import React from 'react';
import Panel from '../ui/Panel';
import Stories from '../ui/Stories';
import Posts from '../ui/Posts';
import styles from '../styles.module.scss';

const Profile = () => {
  return (
    <div className={styles['profile']}>
      <Panel/>
      <Stories/>
      <Posts/>
    </div>
  );
};

export default Profile;