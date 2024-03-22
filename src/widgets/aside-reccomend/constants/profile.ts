import picture from '@assets/user-icon-temp.png'
import { StaticImageData } from 'next/image';

type item = {
    id: number
    userName: string
    customName: string
    profilePicture: StaticImageData
};

const profile: item =
{
    id: 1,
    userName: 'upvox_',
    customName: 'Upvox',
    profilePicture: picture,
}
    ;


export default profile