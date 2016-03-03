/*
                          Simple Carousel

    Author: Igor Boroja
    Licence: Feel Free to use in commercial and non-commercial projects.
    Images: https://pixabay.com         https://pixabay.com/en/service/faq/

*/

$(".slider img:first").addClass('top');

var change = function(){
  var curr = $(".slider img.top")
  var next = curr.next();

  if(!next.length){
    next = $(".slider img:first");
    next.addClass("top");
    curr.removeClass("top");
  }else{
    next.addClass("top");
    curr.removeClass("top");
  }
}

// Stop sliding on mouseover
  $(function() {
      var interval = setInterval( change, 4000 );

      $(".slider").hover(function() {
          clearInterval(interval);
      }, function() {
          interval = setInterval( change, 4000 );
      });
  });
