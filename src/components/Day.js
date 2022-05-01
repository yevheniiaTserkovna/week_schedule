import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { isCurrentDay } from '../additionalFunctions';
import { weekDayColors, weekDayNames } from '../data';
import { openPopap, removeEvent } from '../redux/actions';
import { delData } from '../redux/bd';
import Task from './Task';

function Day({ dayInfo, dayNumber }) {
  const classes = classNames(
    'week-day background-' + weekDayColors[dayNumber],
    {
      'week-day-active': isCurrentDay(dayNumber),
    }
  );

  const dispatch = useDispatch();

  const openPopapHandler = () => {
    dispatch(openPopap(dayNumber));
  };

  const delTaskmHandler = (id) => {
    dispatch(removeEvent(dayNumber, id));
  };

  return (
    <div className={classes}>
      <div>
        <div className='week-day-title'>{weekDayNames[dayNumber]}</div>
        {dayInfo.map((task) => (
          <Task
            key={task.id}
            task={task}
            color={weekDayColors[dayNumber]}
            delTaskmHandler={delTaskmHandler}
          />
        ))}
      </div>

      <button className='add-task-button' onClick={openPopapHandler}>
        Add Task
      </button>
    </div>
  );
}

export default Day;
