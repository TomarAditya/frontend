$(document).ready(function () {

  
  //For calculaton of screen width and height

  var scrollTop = 0;
  var scrollLeft = 0;

  $(window).scroll(function(){
  scrollTop = $(window).scrollTop();
  scrollLeft = $(window).scrollLeft();
  var window_width =$(window).width();
  var b =$( window ).height();

  

  if(scrollTop>1){
    value=0.65;
    $('.navbar-default').css('background','rgba(0,0,0,'+value+')')
    $('..navbar-default .navbar-nav > li > .dropdown-menu > li > a ').css('background','rgba(0,0,0,'+value+')')
  }
  else{
    $('.navbar-default').css('background','transparent')
    $('..navbar-default .navbar-nav > li > .dropdown-menu > li > a ').css('background','transparent')
  }
    

});
});