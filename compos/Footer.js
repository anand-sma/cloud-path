import style from '../styles/Footer.module.scss';
import Logo from './Logo';

function Footer() {
  return (
    <footer className={`flex-x centerXY ${style.footer}`}>
      <Logo width={28} height={24} />
      <p>cloud-coach copy right &copy; 2021</p>
    </footer>
  );
}

export default Footer;
