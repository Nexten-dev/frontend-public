import React from 'react';
import Panel from '../../panel';
import Stories from '../../stories';
import Content from '../../content';
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
