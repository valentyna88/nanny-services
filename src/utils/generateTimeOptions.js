export const generateTimeOptions = (
  start = '09 : 00',
  end = '17 : 00',
  interval = 30
) => {
  const times = [];
  const [startHour, startMinute] = start.split(':').map(Number);
  const [endHour, endMinute] = end.split(':').map(Number);

  let current = new Date();
  current.setHours(startHour, startMinute, 0, 0);

  const endTime = new Date();
  endTime.setHours(endHour, endMinute, 0, 0);

  while (current <= endTime) {
    const hours = current.getHours().toString().padStart(2, '0');
    const minutes = current.getMinutes().toString().padStart(2, '0');
    times.push(`${hours}:${minutes}`);
    current.setMinutes(current.getMinutes() + interval);
  }

  return times;
};
