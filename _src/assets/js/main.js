'use strict';

console.log('>> Ready :)');

const title = document.querySelector('.input__name');
const button = document.querySelector('.btn');
const result = document.querySelector('.list');
const url = 'http://api.tvmaze.com/search/shows?q=';


function getList() {
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
      for (let item of data) {
        let namesTitle = '';
        namesTitle += `
            <li><a href="${item}">${item}</a></li>`;

        seriesResult += `
          <li>
            <h2>Name: ${item.name}</h2>
            <ul>
              ${namesTitle}
            </ul>
          </li>
        `;
        console.log('prueba');
      }
      result.innerHTML += seriesResult;
    });
}

button.addEventListener('click', getList);

