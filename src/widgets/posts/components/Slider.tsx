import Image from "next/image";
import { Props } from "../Posts";
import styles from '../styles.module.scss';


export const Slider = ({ item }: Props) => {
    return (
        <div className={styles.slider}>
            <Image
                width={468}
                src={item.postImg}
                alt={item.postDescr}
                className={styles.img} 
                />
        </div>
    )
}