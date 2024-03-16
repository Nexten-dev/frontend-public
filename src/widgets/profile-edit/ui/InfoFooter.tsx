import Link from 'next/link';
import HintText from '@/shared/ui/hint-text';
import styles from '../styles.module.scss';
import LogoMeta from '@/shared/ui/logo-meta';

const InfoFooter = () => {
  return (
    <div className={styles["info"]}>
      <LogoMeta className={styles["info-meta"]}/>
      <Link href="#" className={`link-reset link txt-bold ${styles["info-link"]}`}>Accounts Center</Link>
      <HintText>Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing and logging in.</HintText>
    </div>
  );
};

export default InfoFooter;