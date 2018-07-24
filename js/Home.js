
function navbarScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.transform="translateY(0)";
        document.getElementById("navbar").style.transition="transform 0.4s"
    } else {
        document.getElementById("navbar").style.transform="translateY(-3.7em)";
        document.getElementById("navbar").style.transition="transform 0.4s";
    }
}
window.onscroll = function() {navbarScroll()};



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

$(document).ready(function(){
  $('#c-hamburger,#side-menu').click(function(){
    $('#slide-left-menu').css({"transform":"translateX(-4em)"});
    $('#slide-left-menu').css({"transition":"transform 1s"});
  });
});

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
