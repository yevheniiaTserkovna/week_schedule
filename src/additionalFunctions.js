/* function isCurrentDay(day) {
  const currentDayName = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(new Date());

  if (day.toLowerCase() === currentDayName.toLowerCase()) {
    return true;
  }
  return false;
} */

function isCurrentDay(dayNumber) {
  const currentDayNumber = new Date().getDay();

  if (parseInt(dayNumber) === currentDayNumber) {
    return true;
  }
  return false;
}

export { isCurrentDay };
