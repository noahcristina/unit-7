//COMP 266: Unit 4 js Site Design
//Noah Cristina: 34582526
//Cat Pic button source : https://www.youtube.com/watch?v=NxHkjhX2IEA Rajsuthan Official
//Cat Pic API source : https://thecatapi.com/docs/

var generatebtn = document.querySelector(".generatebtn");


generatebtn.addEventListener("click", fetchPics);

//function to fetch cat pics from the API
function fetchPics() {
  let catImgDiv = document.querySelector(".catsImgDiv")//selects the div that will hold the cat pics, also sets the div to be empty
  catImgDiv.innerHTML=''
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json()) //converts response to json format
  .then((data) => { 
    let catsImgUrl = data[0].url//

    //creates a new image element and sets the src to cat pic url
    let catsImgEl = document.createElement("img")
    catsImgEl.setAttribute('src', `${catsImgUrl}`)

   //appends the image element to the div
    let catImgDiv = document.querySelector(".catsImgDiv")
    catImgDiv.appendChild(catsImgEl)
    
    })
    .catch(err => console.log(err))//console logs errors
}