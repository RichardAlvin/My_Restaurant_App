import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import resto from '../DATA.json' assert { type: 'JSON' };
//import main from './view/main.js';
const restoItem = resto.restaurants;
// Resto List
const restoList = document.querySelector('.daftar-resto-inner');
console.log(restoItem);
for(let i = 1; i <= restoItem.length; i++){
let restoCard = document.createElement('div');
restoCard.classList.add("daftar-resto-inner-card");

let image = document.createElement('img');
image.src = restoItem[i].pictureId;
restoCard.appendChild(image);

let rate = document.createElement('p');
rate.innerHTML='Rating: '+ restoItem[i].rating;
rate.classList.add('rate');
restoCard.appendChild(rate);

let title = document.createElement('h2');
title.innerHTML=restoItem[i].name;
restoCard.appendChild(title);

let desc = document.createElement('p');
desc.innerHTML=restoItem[i].description;
desc.classList.add('desc');
restoCard.appendChild(desc);


restoList.appendChild(restoCard);
}

//document.addEventListener('DOMContentLoaded', main);