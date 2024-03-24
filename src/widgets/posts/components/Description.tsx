import clsx from "clsx";
import { Props } from "../Posts";
import styles from '../styles.module.scss';

export const Description = ({ item }: Props) => {
    const textArray = item.postDescr.split(' ');
    const shouldHide = textArray.length > 15 ? true : false;

    let postDescr = item.postDescr;

    if (shouldHide) {
        postDescr = textArray.slice(0, 15).join(' ');
    }

    return (
        <div >
            <div className={clsx(styles['decr-row'],
                { [styles['decr-row--long-text']]: !shouldHide })}>
                <p className={styles['decr-row__user-name']}>
                    {item.userName}
                </p>
                <p className={clsx(styles['decr-row__descr'])}>
                    {postDescr}
                    {shouldHide && <button className={clsx(`btn-reset`, styles['decr-row__decr-btn'])}>
                        ... more
                    </button>}
                </p>
            </div>
            <button className={clsx(`btn-reset`, styles['decr-row__btn'],
                { [styles['decr-row__btn--long-text']]: shouldHide })}>
                See translation
            </button>
        </div>
    )
}