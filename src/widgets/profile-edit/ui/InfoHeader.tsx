import Link from 'next/link';
import styles from '../styles.module.scss';
import BoldText from '@/shared/ui/bold-text';
import LogoMeta from '@/shared/ui/logo-meta';
import Text from '@/shared/ui/text';

const InfoHeader = () => {
  return (
    <div className={`${styles["border-bottom"]} ${styles["info"]}`}>
      <LogoMeta/>
      <BoldText>Some account settings are moving</BoldText>
      <Text>Soon, Accounts Center will be the primary place to manage your account info and settings.</Text>
      <Link href="#" className={`link-reset link ${styles["info-link"]}`}>Learn more</Link>
    </div>
  );
};

export default InfoHeader;