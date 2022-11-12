//COMP 266: Unit 6 using liberies
//Noah Cristina: 34582526
//sources: https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
//https://www.youtube.com/watch?v=Jb9Ofkl_E70

//function to scroll to the top of the page
$(function() {
        
  $(window).scroll(function() { //scroll function

     var toTop = $(this).scrollTop(); //

     if (toTop>100) {    // if user has scrolled 100px or more
         $('.top').fadeIn(); // fade in the arrow

      $(".top").stop().fadeIn();//

     }else{
         
      $(".top").stop().fadeOut(); // else fade out the arrow
     }
  });

  $(".top").click(function(){
      $("body , html").animate({scrollTop:0},50);   //50 millisecs is the time to scroll to the top
  });

});

$(window).on('scroll', function() { //activate when window is scrolled
  if ($(this).scrollTop() > 50) //if user has scrolled more than 50px
  {
      $('.to-top').css('display', 'block');//show the to-top button
  } 
  else 
  {
      $('.to-top').css('display', 'none');//hide the to-top button
  }
});

$('.to-top').on('click', function() { //when the to-top button is clicked
  $('html, body').animate({scrollTop : 0}, 100); //scroll to the top of the page
});

