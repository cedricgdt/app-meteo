const getDay = (miliDay) => {
  let date = new Date(miliDay * 1000);
  let day = date.toGMTString().split(' ');
  if(day.includes('Mon,')) {
    return 'Lundi';
  } else if(day.includes('Tue,')) {
    return 'Mardi';
  } else if(day.includes('Wed,')) {
    return 'Mercredi';
  } else if(day.includes('Thu,')) {
    return 'Jeudi';
  } else if(day.includes('Fri,')) {
    return 'Vendredi';
  } else if(day.includes('Sat,')) {
    return 'Samedi';
  } else if(day.includes('Sun,')) {
    return 'Dimanche';
  }
}

export default getDay;