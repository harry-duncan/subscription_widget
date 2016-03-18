$(document).ready(function(){

  // add and remove the class of active for the member and non member buttons
  // this adds and removes the decoration and styling for the elements

  $('#member').click(function(){
    $('.non-member').removeClass("active");
    $('.member').addClass("active");
  });

  $('#non-member').click(function(){
    $('.member').removeClass("active");
    $('.non-member').addClass("active");
  });



});