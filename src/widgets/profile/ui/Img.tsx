import Image from 'next/image';

type Props = {
  source: string;
  alternative?: string;
  w?: number;
  h?: number;
};

const Img = ({ source, alternative, w, h }: Props) => {
  return <Image src={source} alt={alternative} width={w} height={h} />;
};

export default Img;
