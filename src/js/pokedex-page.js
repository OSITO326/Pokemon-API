import { fetchPokedex } from './http-provider';

const body = document.body;
let tbody;

const crearInputFileHtml = () => {
  const html = `
    <h1 class="mt-5">Lista de Pokémon: National</h1>
    <hr>
    <br>
  `;
  const div = document.createElement('div');
  div.innerHTML = html;
  body.append(div);
};

const createHtml = () => {
  const html = `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">url_API</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  `;
  const div = document.createElement('div');
  div.innerHTML = html;
  body.appendChild(div);
  tbody = document.querySelector('tbody');
};

const createRowPokemon = ({ id, name, url }) => {
  const html = `
  <td scope="col">${id}</td>
  <td scope="col">${name}</td>
  <td scope="col">${url}</td>
`;
  const tr = document.createElement('tr');
  tr.innerHTML = html;
  tbody.appendChild(tr);
};

export const init = () => {
  crearInputFileHtml();
  createHtml();
  fetchPokedex(1).then((pokemon) => {
    pokemon.map(createRowPokemon);
  }); // pokedex: National
};
