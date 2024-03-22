import clsx from "clsx";
import styles from '../style.module.scss';
import { Reccomendation } from "./Reccomendation";
import { StaticImageData } from "next/image";
import { ListHead } from "./ListHead";

type Props = {
    list:
    {
        id: number
        userName: string
        mark: string
        profilePicture: StaticImageData
    }[];
};

export const ReccomendList = ({ list }: Props) => {
    return (
        <div>
            <ListHead />
            <ul className={clsx('list-reset', styles['list'])}>
                {
                    list.map(item => (
                        <li key={item.id} className={clsx(styles['list-item'], styles['profile'])}>
                            <Reccomendation
                                item={item}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}