import logoMeta from '@assets/logo-meta.png';
import Image from 'next/image';
const LogoMeta = ({className=""}) => {
  return (
    <Image
        className={className}
        src={logoMeta.src}
        alt="Meta"
        width={logoMeta.width} 
        height={logoMeta.height} 
      />
  );
};

export default LogoMeta;