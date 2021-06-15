'use strict';

let color = document.getElementById('color');
let btn = document.getElementById('btn');

function newColor(){
  let randomColor = Math.floor(Math.random()*16777216).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  btn.style.color = "#" + randomColor;
};

newColor();

btn.addEventListener('click', newColor);