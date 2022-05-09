import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { addEvent, closePopap } from '../redux/actions';
import { useRef, useState } from 'react';
import Carousel from './Carousel';
import { svgId } from '../data';

function AddTaskPopap() {
  const [taskName, setTaskName] = useState('');
  const [time, setTime] = useState('');
  const taskImgToAddRef = useRef(svgId[0]);

  const popapVisible = useSelector((state) => state.popapVisible);
  const selectedDay = useSelector((state) => state.selectedDay);
  const dispatch = useDispatch();

  const classes = classNames('popap', {
    'popap-visible': popapVisible,
  });

  const closePopapHandler = (e) => {
    if (!e.target.className.includes('popap-body')) return;
    dispatch(closePopap());
    setTaskName('');
    setTime('');
  };

  const changeTaskNameHandler = (e) => {
    setTaskName(e.target.value);
  };

  const changeTimeHandler = (e) => {
    setTime(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(
      addEvent(selectedDay, {
        name: taskName,
        time: time,
        image: taskImgToAddRef.current,
      })
    );
    dispatch(closePopap());
    setTaskName('');
    setTime('');
  };

  return (
    <div className={classes} onClick={closePopapHandler}>
      <div className='popap-body'>
        <div className='popap-content'>
          <h2>Add Task</h2>
          <form onSubmit={submitFormHandler}>
            <input
              type='text'
              placeholder='TASK NAME'
              value={taskName}
              onChange={changeTaskNameHandler}
              required
            ></input>
            <Carousel taskImgToAddRef={taskImgToAddRef} />
            <div className='popap-select-time-conteiner'>
              <input
                type='time'
                id='taskTime'
                name='taskTime'
                required
                value={time}
                onChange={changeTimeHandler}
              ></input>
            </div>
            <button className='submit-task-button' type='submit'>
              ADD TASK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTaskPopap;
