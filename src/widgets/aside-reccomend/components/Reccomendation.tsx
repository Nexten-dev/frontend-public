import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import styles from '../style.module.scss';


type Props = {
    item:
    {
        id: number
        userName: string
        mark: string
        profilePicture: StaticImageData
    }
};
export const Reccomendation = ({ item }: Props) => {
    return (
        <>
            <Image
                src={item.profilePicture}
                width={32}
                height={32}
                alt={item.userName}
                className={styles['profile__img']}
            />
            <div className={clsx(styles['profile__text-wrap'], styles['profile__text-wrap--mark'])}>
                <p>{item.userName}</p>
                <p>{item.mark}</p>
            </div>
            <button className={clsx(styles['profile__btn'], 'btn-reset')}>Follow</button>
        </>
    )
}