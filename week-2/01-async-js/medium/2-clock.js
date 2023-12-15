// - HH:MM::SS (Eg. 13:45:23)

// - HH:MM::SS AM/PM (Eg 01:45:23 PM)

console.log('The current time is: ');
setInterval(() => {
  const date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log(`${hours}:${min}:${sec}`);

  let status;
  let remainingHours = hours;
  if (remainingHours > 12) {
    remainingHours = remainingHours - 12;
  }
  if (hours < 12) {
    status = 'AM';
  } else {
    status = 'PM';
  }

  console.log(`${remainingHours}:${min}:${sec} ${status}`);
}, 1000);
