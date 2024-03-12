import IconHome from "@/shared/ui/icons/IconHome";
import styles from "../styles.module.scss";

const Nav = () => {
  return (
    <nav>
      <ul className={`list-reset ${styles['list']}`}>
        <li>
          <a href="#" className={`link-reset ${styles['item']} ${styles['item--active']}`}><IconHome/>Home</a>
        </li>
        <li>
          <button className={`btn-reset ${styles['item']}`}><IconHome/>Home</button>
        </li>
        <li>
          <a href="#" className={`link-reset ${styles['item']}`}><IconHome/>Home</a>
        </li>
        <li>
          <a href="#" className={`link-reset ${styles['item']}`}><IconHome/>Home</a>
        </li>
        <li>
          <a href="#" className={`link-reset ${styles['item']}`}><IconHome/>Home</a>
        </li>
        <li>
          <a href="#" className={`link-reset ${styles['item']}`}><IconHome/>Home</a>
        </li>
        <li>
          <a href="#" className={`link-reset ${styles['item']}`}><IconHome/>Home</a>
        </li>
        <li>
          <a href="#" className={`link-reset ${styles['item']}`}><IconHome/>Home</a>
        </li>
        <li>
          <a href="#" className={`link-reset ${styles['item']}`}><IconHome/>Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;