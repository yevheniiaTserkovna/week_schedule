function Task({ task, color }) {
  return (
    <div className={'week-day-task background-' + color}>
      <div className='week-day-task-content'>
        <div className='week-day-task-title'>{task.name}</div>
        <div className='week-day-task-image'></div>
        <div className='week-day-task-time'>{task.time}</div>
      </div>
    </div>
  );
}

export default Task;
