import { Props } from "../Posts";
import styles from '../styles.module.scss';

export const CountLikes = ({ item }: Props) => {
    const formattedLikesQty = item.likesQty.toLocaleString("en-EN");
    return (
        <div className={styles['likes-count']}>
           {formattedLikesQty} likes
        </div>
    )
}