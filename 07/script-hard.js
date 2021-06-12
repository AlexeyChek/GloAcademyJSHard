'use strict';
// lesson07-hard

const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

let now = ((new Date()).getDay() + 6) % 7;

for (let i = 0; i < week.length; i++) {
  let par = document.createElement('p');
  let day = week[i];
  if (i === now) {
    day = '<strong>' + day + '</strong>';
  }
  if (i > 4) {
    day = '<em>' + day + '</em>';
  }
  par.innerHTML = day;
  document.body.appendChild(par);
}