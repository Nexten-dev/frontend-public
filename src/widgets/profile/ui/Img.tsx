import Image from 'next/image';
import preview from '../img/story-1.jpg';

const Img = () => {
  return <Image src={preview.src} alt='preview' width={75} height={75} />;
};

export default Img;
