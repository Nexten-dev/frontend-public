import clsx from "clsx";
import styles from "../style.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
    profile:
    {
        id: number
        userName: string
        customName: string
        profilePicture: StaticImageData
    }
};

export const CurrentProfile = ({ profile }: Props) => {
    return (
        <div className={styles['profile']}>
            <Image
                src={profile.profilePicture}
                width={56}
                height={56}
                alt={profile.userName}
                className={styles['profile__img']}
            />
            <div className={styles['profile__text-wrap']}>
                <p>{profile.userName}</p>
                <p>{profile.customName}</p>
            </div>
            <button className={clsx(styles['profile__btn'], 'btn-reset')}>Switch</button>
        </div>
    )
}