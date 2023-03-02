
const listCards = document.querySelector("#cards")

loadEventListeners();

function loadEventListeners(){

	listCards.addEventListener('mouseover', onEventMouseOver)

	listCards.addEventListener('mouseout', onEventMouseOut)

}

//Funciones
function onEventMouseOver(e){

	e.preventDefault()

	if(e.target.classList.contains("card")){

		const selectedCard = e.target;

		readData(selectedCard)
	}

}

//Lee el contenido de la tarjeta
function readData(card){

	const content = card.querySelector('h4').textContent.toLowerCase()

	img = card.querySelector('img')

	switch (content) {
		case 'python':
			card.querySelector('h4').textContent = '★ ★ ⭐⭐⭐'
			break;
		
		case 'html':
			card.querySelector('h4').textContent = '⭐⭐⭐⭐⭐'
			break;
		
		case 'js':
			card.querySelector('h4').textContent = '★ ★ ★ ⭐⭐'
			break;
		
		case 'react':
			card.querySelector('h4').textContent = '★ ★ ★ ⭐⭐'
			break;
		
		case 'css':
			card.querySelector('h4').textContent = '★ ⭐⭐⭐⭐'
			break;

		case 'bootstrap':
			card.querySelector('h4').textContent = '★ ★ ⭐ ⭐⭐'
			break;
	
		case 'excel':
			card.querySelector('h4').textContent = '★ ⭐⭐⭐⭐'
			break;

		case 'english':
			card.querySelector('h4').textContent = '★ ★ ⭐⭐⭐'
			break;
	
		default:
			break;
	}

	img.style.visibility='hidden'
}

function onEventMouseOut(e){
	e.preventDefault()

	if(e.target.classList.contains("card")){

		const selectedCard = e.target;

		returnData(selectedCard)
	}
}

function returnData(card){

	img = card.querySelector('img')

	card.querySelector('h4').textContent = card.id.toUpperCase()

	img.style.visibility='visible'
}
