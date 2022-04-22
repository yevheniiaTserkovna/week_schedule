function isCurrentDay(day) {
  const currentDayName = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(new Date());

  if (day.toLowerCase() === currentDayName.toLowerCase()) {
    return true;
  }
  return false;
}

export { isCurrentDay };
