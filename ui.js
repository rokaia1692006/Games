
import { opCard } from './games.js';
import * as games from './games.js';
export function cardsGame(games) {
	var gameBody = document.body.getElementsByClassName('gamebody')[0];
	gameBody.classList.add('justify-content-center','align-items-center','w-100','gamebody');
  var cardbody = document.createElement('div');
	cardbody.className = 'container-fluid row cardbody mb-5 mt-5 d-flex justify-content-center align-items-center';
	gameBody.appendChild(cardbody);
	gameBody = gameBody.lastChild;
	if (!gameBody) {return;}

	if (!games || games.length === 0) {
		console.error("feh 2eh");
		return;}
	games.forEach(game=>{
		var card = new opCard(game);
		gameBody.appendChild(card.cardop);
	});
}
function genreClick(){
  const genre  = document.querySelectorAll('.nav-link[data-genre]');
  genre.forEach(item => {
    item.addEventListener('click', async (e) => {
      e.preventDefault();
      const selectedGenre = e.target.getAttribute('data-genre');
      console.log('Selected Genre:', selectedGenre);
      await games.getgames(selectedGenre);
    });
  });
}
export function displaybackNav(){
	var body = document.body;
	if (!body) {
		console.error("AAAAAAA");
		return;
	}
	body.innerHTML = ''; 
	body.innerHTML = `<div class="gamebody">
  <div class="contimag mb-0">
   
  </div>
  <div class="contnav  w-100 ms-0 me-0  mt-0 ">
    <nav class="navbar navbar-expand-lg  ms-lg-5 me-lg-5 sticky nvBar">
  <div class="container-fluid">
    <a class="navbar-brand ms-5" href="#">
      <img class ="logoIMG" src="./image/logo-sm.png" alt="logo">
      <span class="logo-text">GAME REVIEWS</span>
    </a>
    <button class="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-lg-0 ms-lg-auto me-lg-0 navitems">
        <li class="nav-item  ">
          <a class="nav-link active item" aria-current="page" href="#" data-genre="mmorpg">mmorpg
</a>
        </li>
        <li class="nav-item  ">
          <a class="nav-link active item" aria-current="page" href="#" data-genre="shooter">shooter</a>
        </li>
         <li class="nav-item  ">
          <a class="nav-link active item" aria-current="page" href="#" data-genre="sailing">sailing
</a>
        </li>
        <li class="nav-item  ">
          <a class="nav-link active item" aria-current="page" href="#" data-genre="permadeath">permadeath
</a>
        </li>
        <li class="nav-item  ">
          <a class="nav-link active item" aria-current="page" href="#" data-genre="superhero">superhero
</a>
        </li>
        <li class="nav-item  ">
          <a class="nav-link active item" aria-current="page" href="#" data-genre="pixel">pixel
</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

  </div>
  </div>

</div>`;
genreClick();
}






