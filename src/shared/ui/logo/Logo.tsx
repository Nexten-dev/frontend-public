import Image from 'next/image';
import logo from '@assets/logo.png';
const Logo = () => {
  return (
    <Image
        src={logo.src}
        alt="Instagram"
        width={logo.width} 
        height={logo.height} 
      />
  );
};

export default Logo;