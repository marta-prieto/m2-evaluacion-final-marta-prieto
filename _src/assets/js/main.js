'use strict';


const title = document.querySelector('.input__name');
const button = document.querySelector('.btn');
const result = document.querySelector('.list');
const favorites = document.querySelector('.serie');
const url = 'http://api.tvmaze.com/search/shows?q=';
let favs = [];

addFavStore();

function addFavStore() {
  const favStore = JSON.parse(localStorage.getItem('favs'));
  if (favStore) {
    favs = favStore;
    getFavs();
  }

function getList() {
  const nameSerie = title.value;
  const endpoint = url + nameSerie;



  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      let seriesResult = '';
      for (const item of data) {
        if (item.show.image === null) {
          seriesResult += `
          <li class="list__title-serie" data-id="${item.show.id}"data-name="${item.show.name}" data-img="https://via.placeholder.com/210x295/f2f2ff/?text=TV">
            <h2 class="title__line"> "${item.show.name}"</h2>
            <img class="img__serie" src="https://via.placeholder.com/210x295/f2f2ff/?text=TV" alt="imagen de:${item.show.name}">
          </li>
        `;
        } else {
          seriesResult += `
          <li class="list__title-serie" data-id="${item.show.id}" data-name="${item.show.name}" data-img= "${item.show.image.medium}">
            <h2 class="title__line"> ${item.show.name}</h2>
            <img class="img__serie" src="${item.show.image.medium}" alt="imagen de:${item.show.name} ">
          </li>
        `;
        }
      }
      result.innerHTML += seriesResult;

      const series = document.querySelectorAll('.list__title-serie');

      for (let i = 0; i < series.length; i++) {
        series[i].addEventListener('click', getFavs);
      }
    });


  localStorage.setItem('favs', JSON.stringify(favs));

}




function getFavs(event) {
  const item = event.currentTarget;
  const id = item.getAttribute('data-id');
  const name = item.getAttribute('data-name');
  const img = item.getAttribute('data-img');
  const object = {
    'getImg': img,
    'getName': name,
    'getId': id,
  };

  let seriesResultFav = '';

  item.classList.toggle('serie-fav');
  if (item.classList.contains('serie-fav')) {
    if (favs.includes(object) === false) {
      favs.push(object);
      console.log(favs);
      if (object.getImg === null) {
        seriesResultFav +=
          `<li class="list__title-serie">
        <h2 class="title__line"> ${name}</h2>
        <img class="img__serie" src="${img}" alt="imagen de:${name} ">
      </li>`;

      } else {
        seriesResultFav += `
        <li class="list__title-serie">
          <h2 class="title__line"> ${name}</h2>
          <img class="img__serie" src="${img}" alt="imagen de:${name} ">
        </li>
      `;
      }
    }
  }
  else {
    const best = favs.indexOf(name);
    if (best > -1) {
      favs.splice(best, 1);
    }
  }
  favorites.innerHTML += seriesResultFav;



}

button.addEventListener('click', getList);
