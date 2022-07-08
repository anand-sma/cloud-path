import Button from '@material-ui/core/Button';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';

function Tour() {
  return (
    <div className='take-tour'>
      <Button variant='outlined' color='primary' size='small'>
        Take a tour
        <ArrowRightAltOutlinedIcon />
      </Button>
    </div>
  );
}

export default Tour;
