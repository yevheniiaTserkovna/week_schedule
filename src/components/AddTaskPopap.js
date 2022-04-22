import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { closePopap } from '../redux/actions';

function AddTaskPopap() {
  const popapVisible = useSelector((state) => state.popapVisible);
  const dispatch = useDispatch();

  const classes = classNames('popap', {
    'popap-visible': popapVisible,
  });

  const closePopapHandler = () => {
    dispatch(closePopap());
  };

  return (
    <div className={classes} onClick={closePopapHandler}>
      <div className='popap-body'>
        <div className='popap-content'>Add task!!!</div>
      </div>
    </div>
  );
}

export default AddTaskPopap;
