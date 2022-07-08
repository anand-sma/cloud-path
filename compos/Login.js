import styles from '../styles/Login.module.scss';
import Button from '@material-ui/core/Button';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

function Login({ variant, color, size }) {
  return (
    <div className={`section ${styles.loginWrapper} m flex-y centerXY`}>
      <div className='login'>
        <Button variant={variant} color={color} size={size}>
          LogIn
          <ExitToAppOutlinedIcon fontSize='small' />
        </Button>
      </div>
    </div>
  );
}

export default Login;
