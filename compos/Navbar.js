import styles from '../styles/Navbar.module.scss';
import WeatherCast from './ExternalApi/WeatherCast';
import Logo from './Logo';
import Login from '../compos/Login';
import Register from '../compos/Register';
import NavMenu from './navbar-compos/nav-menu';
function Navbar() {
  return (
    <div className={` ${styles.navbar} flex-x p`}>
      <div className={`${styles.logo} m`}>
        <Logo width={90} height={70} />
      </div>
      <div className={`${styles.weather_head}`}>
        <div className='weather'>
          <WeatherCast />
        </div>
      </div>
      <div className={`flex-x centerXY`}>
        <nav>
          <ul className={`${styles.menu} ul-x-list`}>
            <li>
              <NavMenu title='Home' link='/' />
            </li>
            <li>
              <NavMenu title='Courses' link='/courses' />
            </li>
            <li>
              <NavMenu title='Services' link='/services' />
            </li>
            <li>
              <NavMenu title='About' link='/about' />
            </li>
            <li>
              <NavMenu title='Contact' link='/contact' />
            </li>
          </ul>
        </nav>
        <div>
          <Login variant='outlined' color='primary' size='medium' />
        </div>
        <div>
          <Register variant='outlined' color='secondary' size='medium' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
