//sources: https://countapi.xyz/ https://www.youtube.com/watch?v=uNJszWsGGQo
// this is js to show a counter on the page

const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/ncristina/count/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}

