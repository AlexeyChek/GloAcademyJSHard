'use strict';

const fullDate = document.querySelector('.full-date');
const smallDate = document.querySelector('.small-date');
const smallDateV2 = document.querySelector('.small-date-v2');

let options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

const getHour = (hour) => {
  if (hour == 0 || (hour >= 5 && hour <= 20)) return hour + ' часов ';
  if (hour == 1 || hour == 21) return hour + ' час ';
  if ((hour >= 2 && hour <= 4) || (hour >= 22 && hour <= 24)) return hour + ' часа ';
};

const getMinute = (minute) => {
  if (minute[minute.length - 1] == 0 ||
    (minute[minute.length - 1] >= 5 && minute[minute.length - 1] <= 9) ||
    (minute >= 11 && minute <= 19)) return minute + ' минут ';
  if (minute[minute.length - 1] == 1) return minute + ' минута ';
  if (minute[minute.length - 1] >= 1 && minute[minute.length - 1] <= 4) return minute + ' минуты ';
};

const getSecond = (second) => {
  if (second[second.length - 1] == 0 ||
    (second[second.length - 1] >= 5 && second[second.length - 1] <= 9) ||
    (second >= 11 && second <= 19)) return second + ' секунд ';
  if (second[second.length - 1] == 1) return second + ' секунда ';
  if (second[second.length - 1] >= 1 && second[second.length - 1] <= 4) return second + ' сукунды ';
};

const getFullDate = (date) => {
  let full = date.toLocaleString('ru', options);
  full = full[0].toUpperCase() + full.slice(1);

  let parts = full.split(' г., ');
  let timeParts = parts[1].split(':');
  return parts[0] + ' года, ' + getHour(timeParts[0]) + getMinute(timeParts[1]) + getSecond(timeParts[2]) ;
};

const addZero = (num) => {
  return num < 10 ? '0' + num : num;
}

// только какой в этом смысл, если дата и время итак выдаются с нулями
const getSmallDate = (date) => {

  date = date.toLocaleString('ru');
  date = date.split(',');

  let smallDate = date[0].split('.');
  let smallTime = date[1].split(':');

  smallDate.forEach((item) => {
    item = addZero(item);
  });
  
  smallTime.forEach((item) => {
    item = addZero(item);
  });

  return smallDate.join('.') + ' - ' + smallTime.join(':');
};

// вариант 2
const getSmallDate2 = (date) => {
  return `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()} - ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
};

const getDate = ()=> {
  const date = new Date();

  fullDate.textContent = 'Сегодня ' + getFullDate(date);
  smallDate.textContent = getSmallDate(date);
  smallDateV2.textContent = getSmallDate2(date);
};

setInterval(getDate, 1000);
