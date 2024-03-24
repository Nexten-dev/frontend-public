import { Props } from "../Posts";
import clsx from "clsx";
import styles from '../styles.module.scss';
import { IconEmoji } from "../svg/IconEmoji";

export const CommentsField = ({ item }: Props) => {
    const formattedCommentsQty = item.comments.length.toLocaleString('en-EN');

    return (
        <div className={styles['comment-field']}>
            <button className={clsx('btn-reset', styles['comment-field__view-btn'])}>
                View all {formattedCommentsQty} comments
            </button>
            <form id={String(item.id)} className={styles['comment-field__form']}>
                <input
                    type="text"
                    placeholder="Add a comment…"
                    className={clsx(styles['comment-field__input'])}
                />
                <button className={clsx('btn-reset', styles['comment-field__emoji-btn'])}>
                    <IconEmoji />
                </button>
            </form>
        </div>
    )
}