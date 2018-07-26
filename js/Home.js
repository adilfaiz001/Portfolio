
/*Navigation Bar scroll function */
function navbarScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.transform="translateY(0)";
        document.getElementById("navbar").style.transition="transform 0.4s"
    } else {
        document.getElementById("navbar").style.transform="translateY(-3.7em)";
        document.getElementById("navbar").style.transition="transform 0.4s";
    }
}
/*Navigation Bar function Ends*/


/*Hamburger Menu Function */
document.getElementById('c-hamburger').onclick=function()
{
  document.getElementById('slide-left-menu').style.transform="translateX(-4em)";
  document.getElementById('slide-left-menu').style.transition="transform 1s";
};
document.getElementById('sl-menu-close').onclick=function()
{
  document.getElementById('slide-left-menu').style.transform="translateX(-27em)";
  document.getElementById('slide-left-menu').style.transition="transform 1s";
};
/*Hamburger Menu Ends*/


/*
$(document).ready(function(){
  $('#c-hamburger,#side-menu').click(function(){
    $('#slide-left-menu').css({"transform":"translateX(-4em)"});
    $('#slide-left-menu').css({"transition":"transform 1s"});
  });
});
*/

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();


/*Slide2 Content */

var header2 = document.getElementById("Header2");
var header1 = document.getElementById("Header1");
var domRect = header2.getBoundingClientRect();
var domRect1 = header1.getBoundingClientRect();

/*function parallax() {
    var speed = 2.0;
    var t = domRect.top;
    var t1 = domRect1.top;
    console.log(t1);
    if(t1<113)
    {
      header1.style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(-window.pageYOffset/5.0)+"px"
    }
    header2.style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(-window.pageYOffset/2.0)+"px";

  }*/

  $(window).scroll(function() {
     var hT = $('#Header1').offset().top,
         hH = $('#Header1').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
    //console.log(wS,hT,hH,wH);
     if (wS > (hT+hH-wH))
     {
       $("#Header1").css("background-attachment","fixed");
     }
     else {
       $("#Header1").css("background-attachment","scroll");
     }
  });





/*Event triggers */

window.onscroll = function()
{
    navbarScroll();
    var speed = 2.0;
    document.getElementById("check").style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(-window.pageYOffset/speed)+"px";
};
