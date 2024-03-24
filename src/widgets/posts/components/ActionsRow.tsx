import { Props } from "../Posts";
import clsx from "clsx";
import styles from '../styles.module.scss';
import { IconLikes } from "../svg/IconLikes";
import { IconComment } from "../svg/IconComment";
import { IconShare } from "../svg/IconShare";
import { IconSave } from "../svg/IconSave";


export const ActionsRow = ({ item }: Props) => {
    return (
        <div className={styles['actions-row']}>
            <button className={clsx(`btn-reset`, styles['actions-row__btn'])}>
                <IconLikes />
            </button>
            <button className={clsx(`btn-reset`, styles['actions-row__btn'])}>
                <IconComment />
            </button>
            <button className={clsx(`btn-reset`, styles['actions-row__btn'])}>
                <IconShare />
            </button>
            <button className={clsx(`btn-reset`, styles['actions-row__btn'])}>
                <IconSave />
            </button>
        </div>
    )
}