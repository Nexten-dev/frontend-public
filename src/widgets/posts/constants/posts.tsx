import picture from '@assets/post-img-temp.jpg';
import photo from '@assets/person-img-temp.jpg';
import { comment, commentsArray } from './commentsArray';
import { StaticImageData } from 'next/image';

export type items = {
    id: number
    userName: string
    profilePicture: StaticImageData
    isStories: boolean
    verifyBage: boolean
    timeElapsed: string
    postImg: StaticImageData
    likesQty: number
    postDescr: string
    comments: comment
}[];


export const posts: items = [
    {
        id: 1,
        userName: 'lewishamilton',
        profilePicture: photo,
        isStories: true,
        verifyBage: true,
        timeElapsed: '5h',
        postImg: picture,
        likesQty: 741368,
        postDescr: 'Parabéns Ayrton, minha inspiração sempre 🇧🇷💫',
        comments: commentsArray,
    },
    {
        id: 2,
        userName: 'kurzgesagt',
        profilePicture: photo,
        isStories: false,
        verifyBage: true,
        timeElapsed: '8h',
        postImg: picture,
        likesQty: 6724,
        postDescr: 'For every video we upload to YouTube we create different versions of the final thumbnail. For every video we upload to YouTube we create different versions of the final thumbnail.',
        comments: commentsArray,
    },
    {
        id: 3,
        userName: 'discovery',
        profilePicture: photo,
        isStories: false,
        verifyBage: true,
        timeElapsed: '2d',
        postImg: picture,
        likesQty: 78780,
        postDescr: 'If you had to choose, where would you be the fastest: air, land, or sea? If you had to choose, where would you be the fastest: air, land, or sea?',
        comments: commentsArray,
    },

]