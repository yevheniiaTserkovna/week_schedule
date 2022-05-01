function Task({ task, color, delTaskmHandler }) {
  return (
    <div className={'week-day-task background-' + color}>
      <div className='week-day-task-content'>
        <div className='week-day-task-title'>{task.name}</div>
        <div className='week-day-task-image'>
          <svg width='100' height='70' version='2.0'>
            <use href={'#' + task.image} />
          </svg>
        </div>
        <div className='week-day-task-time'>{task.time}</div>
        <img
          alt='del'
          className='delButton'
          src='images/close-icon.png'
          onClick={() => {
            delTaskmHandler(task.id);
          }}
        ></img>
      </div>
    </div>
  );
}

export default Task;
