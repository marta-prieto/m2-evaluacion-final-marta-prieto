'use strict';

console.log('>> Ready :)');

const title = document.querySelector('.input__name');
const button = document.querySelector('.btn');
const result = document.querySelector('.list__series');
const url = 'http://www.tvmaze.com/api#show-search';


/* function writeTitle () {
  console.log ('prueba');
}

button.addEventListener('click', writeTitle);
 */


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
      let series = '';
      for (const item of data.list__series) {
        let movies = '';
        for (const pelicula of item.films) {
          movies += `
            <li><a href="${pelicula}">${pelicula}</a></li>
          `;
        }

        series += `
          <li>
            <h2>Name: ${item.name}</h2>
            <div>Hair color: ${item.hair_color}</div>
            <ul>
              ${movies}
            </ul>
          </li>
        `;
      }
      result.innerHTML += series;
    });
}

button.addEventListener('click', getList__series);


