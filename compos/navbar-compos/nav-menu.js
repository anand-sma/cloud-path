import Link from 'next/link';
const NavMenu = ({ title, link }) => {
  return (
    <Link href={link}>
      <a>{title}</a>
    </Link>
  );
};

export default NavMenu;
