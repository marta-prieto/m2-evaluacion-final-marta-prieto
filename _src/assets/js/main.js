'use strict';

console.log('>> Ready :)');

const title = document.querySelector('.input__name');
const button = document.querySelector('.btn');
const result = document.querySelector('.list__series');
const url = 'http://api.tvmaze.com/search/shows?q=${}';


function getList__series() {
  // Coseguir lo que ha escrito el usuario
  const nameSerie = title.value;

  // crear la url
  const endpoint = url + nameSerie;

  // hacer la petición
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      result.innerHTML = '';
      let seriesResult = '';
      for (const item of data.list__series) {
        let namesTitle = '';
        for (const serie of item.serie) {
          namesTitle += `
            <li><a href="${serie}">${serie}</a></li>
          `;
        }

        seriesResult += `
          <li>
            <h2>Name: ${item.name}</h2>
            <div>Hair color: ${item.hair_color}</div>
            <ul>
              ${namesTitle}
            </ul>
          </li>
        `;
      }
      result.innerHTML += seriesResult;
    });
}
console.log ('prueba');
button.addEventListener('click', getList__series);

