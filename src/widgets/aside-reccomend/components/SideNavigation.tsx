import Link from "next/link";
import { navList } from "../constants/navList";
import styles from '../style.module.scss';
import clsx from "clsx";

export const SideNavigation = () => {
    return (
        <nav>
            <ul className={clsx('list-reset', styles['nav__list'], styles['nav-list'])}>
                {
                    navList.map((item, i) => (
                        <li key={item.href + i} className={clsx(styles['nav-list__item'])}>
                            <Link href={item.href} className={clsx('link-reset', styles['nav-list__link'])}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}