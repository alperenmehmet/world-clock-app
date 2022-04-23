const dateConverter = () => {
  const currentTime = new Date();
  const hour = currentTime.getHours().toLocaleString();
  const minutes = currentTime.getMinutes();
  const getTimeZone = currentTime.toLocaleString();

  return { hour, minutes, getTimeZone };
};

export default dateConverter;
