import clsx from "clsx";
import Link from "next/link";
import styles from '../style.module.scss'

export const ListHead = () => {
    return (
        <div className={styles['list-head']}>
            <p className={styles['list-head__text']}>Suggestions for you</p>
            <Link
                href='/'
                className={clsx('link-reset', styles['list-head__link'])}
            >
                See All
            </Link>
        </div>
    )
}