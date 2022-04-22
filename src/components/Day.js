import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { isCurrentDay } from '../additionalFunctions';
import { openPopap } from '../redux/actions';
import Task from './Task';

function Day({ dayInfo }) {
  const classes = classNames('week-day background-' + dayInfo.dayColor, {
    'week-day-active': isCurrentDay(dayInfo.dayName),
  });

  const dispatch = useDispatch();

  const openPopapHandler = () => {
    dispatch(openPopap());
  };

  return (
    <div className={classes}>
      <div>
        <div className='week-day-title'>{dayInfo.dayName}</div>
        {dayInfo.tasks.map((task) => (
          <Task key={task.name} task={task} color={dayInfo.dayColor} />
        ))}
      </div>

      <div className='add-task-button' onClick={openPopapHandler}>
        Add Task
      </div>
    </div>
  );
}

export default Day;
