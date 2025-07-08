//details
import * as games from './games.js';
export async function disDetials(game) {
var body = document.body;
var Discription = '';
if (!body) {
    return;
}
const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=' + game.id;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '066d4a1335msh03c00281b90d1bep1606b6jsnab04a2c84943',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	Discription = await response.json();
	console.log(Discription);
} catch (error) {
	console.error(error);
}
body.innerHTML = '';

var detailDis = document.createElement('div');
detailDis.className = 'detialsBody w-100 h-100 d-flex flex-column';

detailDis.innerHTML = `
  <div class="container-fluid bigcont box">
    <div class="head pt-3 d-flex justify-content-between align-items-center mb-3 m-2">
      <span class="headText">Details Game</span>
      <button class="backButton"><i class="bi bi-x"></i></button>
    </div>
    
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-lg-start align-items-lg-start justify-content-sm-center align-items-sm-center">
        <img src="${game.thumbnail}" class="img-fluid w-75" alt="${game.title}">
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-5 mt-sm-3">
        <div class="gameD-info">
         <span class="gameD-title">
         <h2>Title: ${game.title}</h2>
         </span>
          <span class="gameD-genre d-flex flex-row justify-content-start align-items-start mb-4"> 
          <h5 class="disT">category: </h5>
            <span class="BlueText">${game.genre}</span>
          </span>
            <span class="gameD-platform d-flex flex-row justify-content-start align-items-start mb-4">
            <h5 class="disT">Platform: </h5>
            <span class="BlueText">${game.platform}</span>
          </span>
          <span class = "gameDstatus d-flex flex-row justify-content-start align-items-start mb-4">
          <h5 class="disT">Status: </h5>
            <span class="BlueText">${game.status}</span>
            </span>
          <p class="gameD-description d-flex flex-row justify-content-start align-items-start">${Discription.description}</p>
          <a href="${game.game_url}" class="Disbtn mt-5" target="_blank">Show Game</a>

        </div>
      </div>
      </div>
  </div>
`;

	body.appendChild(detailDis);
    var button = detailDis.querySelector('.backButton');
    button.addEventListener('click', back);

}
function back(){
    games.getgames(null);
}