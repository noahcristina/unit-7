// COMP 266: Unit 5 js Site Design
// Noah Cristina: 34582526
// sources: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto , https://www.youtube.com/watch?v=4YQ4svkETS0 by Traversy Media



var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 10000;	// Time Between change in Milliseconds

//image sources: https://unsplash.com/photos/uJhgEXPqSPk , https://unsplash.com/photos/PXnJeZxMuRY , https://unsplash.com/photos/lmV3gJSAgbo
//array
images[0] = "https://images.unsplash.com/photo-1468254095679-bbcba94a7066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80";
images[1] = "https://images.unsplash.com/photo-1621551509931-6a66c6e5d6d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
images[2] = "https://images.unsplash.com/photo-1648275913341-7973ae7bc9b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80";

function changeImg(){
	document.slideshow.src = images[i];

	// Check If Index Is Under Max if not Add 1 to the array index
	if(i < images.length - 1){
	  i++; 
	} else { //or else reset the index to 0
		i = 0;
	}

	// Run function every 10000 milliseconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;