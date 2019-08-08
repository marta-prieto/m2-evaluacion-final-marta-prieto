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
      let seriesResult = '';
      for (const item of data) {

        seriesResult += `
          <li>
            <h2 class="title__line"> ${item.show.name}</h2>
            <img class="img__serie" src="${item.show.image.medium}" alt="imagen de:${item.show.name}">
          </li>
        `;
        console.log(item.show.image.medium);

      }
      result.innerHTML += seriesResult;
    });
}

button.addEventListener('click', getList);




/*   let namesTitle = '';
  namesTitle += `
      <li><a href="${item}">${item}</a></li>`;
      <li><a href="${item.show.name}">${item.show.name}</a></li>`;
  console.log(item.show.name);

  seriesResult += `
    <li>
      <h2>Name: ${item.name}</h2>
      <h2>${item.show.name}</h2>
      <ul>
        ${namesTitle}
      </ul>
    </li>
  `;
  console.log('prueba');

}
result.innerHTML += seriesResult;
}); */
