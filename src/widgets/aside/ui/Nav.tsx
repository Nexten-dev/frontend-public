"use client"
import IconHome from "@/shared/ui/icons/icon-home/IconHome";
import styles from "../styles.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navList = [
  {
    name: "Home",
    icon: <IconHome/>,
    link: "/home"
  },
  {
    name: "Profile",
    icon: <IconHome/>,
    link: "/profile"
  },
  {
    name: "Messages",
    icon: <IconHome/>,
    link: "/messages"
  }
];

const Nav = () => {
  const pathName = usePathname();
  return (
    <nav>
      <ul className={`list-reset ${styles['list']}`}>
        {
          navList.map(item=> {
            const isActive = pathName?.startsWith(item.link);
            console.log(isActive);
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