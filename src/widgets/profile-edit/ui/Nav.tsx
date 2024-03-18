import Link from 'next/link';
import nav from "../consts/nav";
import styles from '../styles.module.scss';

const Nav = () => {
  return (
    <div className={styles["border-bottom"]}>
      <ul className={`list-reset`}>
        {
          nav.map(item=>{
            return (
            <li key={item.name}>
              <Link href="#" className={`link-reset ${styles["link"]} ${item.selected? styles["link--active"]: ""}`}>
                {item.name}
              </Link>
            </li>
          )})
        }
      </ul>

      <Link href="#" className={`link-reset link txt-bold ${styles["link-switch"]}`}>Switch to personal account</Link>
    </div>
  );
};

export default Nav;