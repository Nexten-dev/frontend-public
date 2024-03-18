"use client"
import styles from "../styles.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navList from "../consts/nav";


const Nav = () => {
  const pathName = usePathname();
  return (
    <nav>
      <ul className={`list-reset ${styles['list']}`}>
        {
          navList.map(item=> {
            const isActive = pathName == item.link;
            return (
              <li key={item.name}>
                <Link href={item.link} className={`link-reset ${styles['item']} ${isActive ? styles['item--active'] : ''}`}>{item.icon}{item.name}</Link>
              </li>
              );
            }
          )
        }
      
        {/* <li>
          <button className={`btn-reset ${styles['item']}`}><IconHome/>Search</button>
        </li> */}
        
      </ul>
    </nav>
  );
};

export default Nav;