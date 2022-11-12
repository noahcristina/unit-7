// COMP 266: Unit 5 js Site Design
// Noah Cristina: 34582526
// source: https://rapidapi.com/alphavantage/api/alpha-vantage


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '56c8129404mshe66b0a6a4495182p1c1d1bjsn046b38aa185f',
		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
	}
};

fetch('https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=SPY&datatype=json', options )

.then(response => response.json())

.then(data => {
console.log(data)
console.log(data["Global Quote"])
console.log(data["Global Quote"]["02. open"]) 


document.getElementById('SPY').innerHTML = data["Global Quote"]["02. open"];
})
.catch(err => {
console.error(err);
});

