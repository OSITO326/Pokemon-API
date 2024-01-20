import '../css/pokemon-page.css';
import constants from './CONSTANTS';
import { fetchPokemon } from './http-provider';
const body = document.body;
let headerPage, mainPokemon;

const createHeader = () => {
  const html = `
  <nav class="nav">
    <img src="assets/logo.png" alt="Logo Pokédex">
    <ul class="nav-list">
      <li class="nav-item"><button class="btn btn-header" id="ver-todos">Ver todos</button></li> 
      <li class="nav-item"><button class="btn btn-header normal" id="normal">Normal</button></li>
      <li class="nav-item"><button class="btn btn-header fire" id="fire">Fire</button></li>
      <li class="nav-item"><button class="btn btn-header water" id="water">Water</button></li>
      <li class="nav-item"><button class="btn btn-header grass" id="grass">Grass</button></li>
      <li class="nav-item"><button class="btn btn-header electric" id="electric">Electric</button></li>
      <li class="nav-item"><button class="btn btn-header ice" id="ice">Ice</button></li>
      <li class="nav-item"><button class="btn btn-header fighting" id="fighting">Fighting</button></li>
      <li class="nav-item"><button class="btn btn-header poison" id="poison">Poison</button></li>
      <li class="nav-item"><button class="btn btn-header ground" id="ground">Ground</button></li>
      <li class="nav-item"><button class="btn btn-header flying" id="flying">Flying</button></li>
      <li class="nav-item"><button class="btn btn-header psychic" id="psychic">Psychic</button></li>
      <li class="nav-item"><button class="btn btn-header bug" id="bug">Bug</button></li>
      <li class="nav-item"><button class="btn btn-header rock" id="rock">Rock</button></li>
      <li class="nav-item"><button class="btn btn-header ghost" id="ghost">Ghost</button></li>
      <li class="nav-item"><button class="btn btn-header dark" id="dark">Dark</button></li>
      <li class="nav-item"><button class="btn btn-header dragon" id="dragon">Dragon</button></li>
      <li class="nav-item"><button class="btn btn-header steel" id="steel">Steel</button></li>
      <li class="nav-item"><button class="btn btn-header fairy" id="fairy">Fairy</button></li>
    </ul>
  </nav>
  `;
  const header = document.createElement('header');
  header.innerHTML = html;
  body.appendChild(header);
  headerPage = document.querySelector('header');
};

const createPokemon = ({ id, name, img, stats, height, weight, types }) => {
  const html = `
  <div class="card mb-3">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-8">
          <h4>#${id} ${name.toUpperCase()}</h4>
          <div class="col-6 col-md-8">
            <div>
              <img src="${img}" alt="${name}" />
            </div>
            <div>
              <p><b>Tipo: </b>${types.join(' ')}</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="card mb-3 mt-3">
          <h5>Ficha técnica</h5>
          <div class="container text-center">
            <div class="row row-cols-2">
              <div class="col">
                <p><b>Altura:</b>${height}m</p>
                <p><b>Peso:</b>${weight}kg</p>
              </div>
              <div class="col">
                <ul>
                  ${stats.map((stat) => `<li><b>${stat.stat.toUpperCase()}:</b> ${stat.base_stat}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  `;
  const main = document.createElement('main');
  main.innerHTML = html;
  body.appendChild(main);
  mainPokemon = document.querySelector('main');
};

const drawPokemon = () => {
  for (let i = 1; i <= constants.firstGeneration; i++) {
    fetchPokemon(i).then(createPokemon);
  }
};

export const init = () => {
  createHeader();
  drawPokemon();
  // fetchPokemon(1).then(createPokemon);
  fetchPokemon(1).then(console.log);
};
