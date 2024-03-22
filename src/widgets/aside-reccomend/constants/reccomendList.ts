import picture from '@assets/frame-temp.png'
import { StaticImageData } from 'next/image';

type item = {
    id: number
    userName: string
    mark: string
    profilePicture: StaticImageData
}[];

const reccomendList: item = [
    {
        id: 1,
        userName: 'imkir',
        mark: 'Follows you',
        profilePicture: picture,
    },
    {
        id: 2,
        userName: 'organic__al',
        mark: 'Followed by chirag_singla17',
        profilePicture: picture,
    },
    {
        id: 3,
        userName: 'im_gr',
        mark: 'Followed by chirag_singla17',
        profilePicture: picture,
    },
    {
        id: 4,
        userName: 'abh952',
        mark: 'Follows you',
        profilePicture: picture,
    },
    {
        id: 5,
        userName: 'sakbrl',
        mark: 'Follows you',
        profilePicture: picture,
    },
]

export default reccomendList