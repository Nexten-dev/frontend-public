import React from 'react';
import Panel from '../ui/Panel';
import Stories from '../ui/Stories';
import Content from '../ui/Content';
import styles from '../styles.module.scss';

const Profile = () => {
  return (
    <div className={styles['profile']}>
      <Panel />
      <Stories />
      <Content />
    </div>
  );
};

export default Profile;
