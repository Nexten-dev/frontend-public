import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import styles from '../styles.module.scss';
import { Props } from "../Posts";
import { IconMeatballsMenu } from '../svg/IconMeatballsMenu';

export const PostTop = ({ item }: Props) => {

    return (
        <div className={styles['post-top']}>
            <Link href='#' className={clsx(`link-reset`, styles['post-top__img-link'])}>
                <Image
                    src={item.profilePicture}
                    width={42}
                    height={42}
                    alt={item.userName}
                    className={clsx(styles['post-top__user-photo'],
                        {
                            [styles['post-top__user-photo--story']]: item.isStories
                        })}
                />
            </Link>
            <Link href='/' className={clsx(`link-reset`, styles['post-top__username'],
                {
                    [styles['post-top__username--verified']]: item.verifyBage
                })}>
                {item.userName}
            </Link>
            <p className={styles['post-top__time']}>
                &#183;{item.timeElapsed}
            </p>
            <button className={clsx(`btn-reset`, styles['post-top__btn'])}>
                <IconMeatballsMenu />
            </button>
        </div>
    )
}