'use strict';

console.log('>> Ready :)');

const title = document.querySelector('.input__name');
const button = document.querySelector('.btn');
const result = document.querySelector('.list');
const url = 'http://api.tvmaze.com/search/shows?q=';


function getList() {
  const nameSerie = title.value;
  const endpoint = url + nameSerie;

  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      result.innerHTML = '';
      let seriesResult = '';
      for (const item of data) {

        let namesTitle = '';
        namesTitle += `
            <li><a href="${item.show.name}">${item.show.name}</a></li>`;
        console.log(item.show.name);

        seriesResult += `
          <li>
            <h2>${item.show.name}</h2>
            <ul>
              ${namesTitle}
            </ul>
          </li>
        `;

      }
      result.innerHTML += seriesResult;
    });
}

button.addEventListener('click', getList);

