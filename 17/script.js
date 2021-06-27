'use strict';

const input = document.querySelector('input');
const paragraf = document.querySelector('p');
let timerId;

const getText = () => {
  clearTimeout(timerId);
  timerId = setTimeout(() => {
    paragraf.textContent = input.value;
  }, 300);
};

input.addEventListener('input', getText);