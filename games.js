//main section
import * as ui from './ui.js';  
import * as details from './detials.js'; // Importing the details module
var games = [];
var clickedID= null;
export async function getgames(genre) {

	if(!genre || genre === '') {
	
		const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

	const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '066d4a1335msh03c00281b90d1bep1606b6jsnab04a2c84943',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
	console.log('title', JSON.parse(result)[0].title);
	games = JSON.parse(result);
	console.log('games', games);
} catch (error) {
	console.error(error);
}
ui.displaybackNav();
ui.cardsGame(games);
	}
	else{
const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category='+genre;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '066d4a1335msh03c00281b90d1bep1606b6jsnab04a2c84943',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
	console.log('title', JSON.parse(result)[0].title);
	games = JSON.parse(result);
	console.log('games', games);
} catch (error) {
	console.error(error);
}
ui.displaybackNav();
ui.cardsGame(games);
	}
}
export class opCard{
	constructor(game) {
		if (!game || !game.title || !game.thumbnail || !game.short_description || !game.genre || !game.platform) {
			console.error("msh sha8al", game);
			return;
		}
		this.game = game;
		console.log('game', game);
		this.createCard = this.createCard.bind(this);
		this.cardop = this.createCard();
	}
	createCard(){
		var card = document.createElement('div');
		card.className = 'col-lg-3 col-md-4 col-sm-10 col-xs-10 d-flex justify-content-center align-items-center';
		card.innerHTML = `
		<div class="card h-100 w-100 d-flex flex-column gameCard " style="min-width: 18rem;">
			<img src="${this.game.thumbnail}" class="card-img-top" alt="${this.game.title}">
			
			<div class="overlay position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center">
			</div>
			
			<div class="card-body d-flex flex-column">
				<div class="d-flex align-items-center">
					<h5 class="card-title mb-0">${this.game.title}</h5>
					<span class="badge bg-primary ms-auto">Free</span>
				</div>
				<p class="card-text">${this.game.short_description}</p>
				<div class="flex-grow-1"></div>
				<div class="footer d-flex p-0 mt-2 justify-content-between">
					<span class="badge genreDevice">${this.game.genre}</span>
					<span class="badge genreDevice">${this.game.platform}</span>
				</div>
			</div>
		</div>`;
		card.addEventListener('click', this.Click.bind(this));
		this.cardop = card;
		console.log('game', this.game);
return card;
	}
	Click(){
		
		details.disDetials(this.game);
	}
}
//feh functions el main page bl card
//ba3d ma bad8t 3la el game eyd5ol 3la el detials
//ba3d el close yerg3 lel main
// ui feh kol el display function w el display detials
////tybbbbbbb ya rb 2er7amni
//api by genre = games by category or tag

// import 'detials.js';
// import './style.css';
// import './node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './node_modules/bootstrap-icons/font/bootstrap-icons.css';

