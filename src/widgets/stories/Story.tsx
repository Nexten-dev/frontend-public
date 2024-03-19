import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Link from "next/link";


type Props = {
    item: {
        id: number
        userName: string
        profilePicture: StaticImageData
        isStories: boolean
    }
}

const Story = ({ item }: Props) => {
    return (
        <>
            <Link href='#' className={`link-reset`}>
                <Image
                    src={item.profilePicture}
                    width={56}
                    height={56}
                    alt={item.userName}
                    className={clsx(styles['stories__user-photo'],
                        { [styles['stories__user-photo--story']]: item.isStories })}
                />
            </Link>
            <Link href='/profile' className={`link-reset`}>
                <p className={styles['stories__username']}>
                    {item.userName}
                </p>
            </Link>
        </>
    )
};

export default Story;