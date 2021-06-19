'use strict';

const fullDate = document.querySelector('.full-date');
const smallDate = document.querySelector('.small-date');

let now = new Date('2021', '1', '1', 13, 1, 1);



const getDate = ()=> {
  // let now = new Date();
  fullDate.textContent = 'Сегодня ' + now;
};

setInterval(getDate, 1000);
