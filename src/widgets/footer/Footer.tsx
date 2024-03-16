import styles from './style.module.scss';
import nav from './consts/nav';
import Link from 'next/link';
import IconArrow from '@/shared/ui/icons/icon-arrow';

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <ul className={`list-reset ${styles.list}`}>
        {nav.map(item=>{
          return (
            <li key={item.name}>
              <Link href={item.link} className={`link-reset ${styles.link}`}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
      <div className={styles["copyright"]}>
        <div className={styles["dropdown"]}>English <IconArrow/></div>
        © 2024 Instagram from Meta</div>
    </footer>
  );
};

export default Footer;