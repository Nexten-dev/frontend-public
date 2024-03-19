import picture from '@assets/stories-img-temp.png'
import { StaticImageData } from 'next/image';

type stories = {
    id: number
    userName: string
    profilePicture: StaticImageData
    isStories: boolean
}[];

const storiesList: stories = [
    {
        id: 1,
        userName: 'itsdougthepug',
        profilePicture: picture,
        isStories: true,
    },
    {
        id: 2,
        userName: 'openaidalle',
        profilePicture: picture,
        isStories: false,
    },
    {
        id: 3,
        userName: 'lewishamilton',
        profilePicture: picture,
        isStories: true,
    },
]

export default storiesList;