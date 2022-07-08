import styles from '../styles/form-controlls/Button.module.scss';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        background: 'white',
      },
    },
  },
});
const ButtonComp = ({ title }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant='contained' color='primary'>
        {title}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonComp;
