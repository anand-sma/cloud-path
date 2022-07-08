import Link from 'next/link';
import Image from 'next/image';
const Logo = ({ width, height }) => {
  return (
    <Link href='/'>
      <a>
        <Image src='/logo.png' width={width} height={height} className='card' />
      </a>
    </Link>
  );
};

export default Logo;
