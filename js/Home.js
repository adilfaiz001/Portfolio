
/*Top Menu down scroll*/
window.onscroll = function() {navbarScroll()};


function navbarScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.transform="translateY(0)";
        document.getElementById("navbar").style.transition="transform 0.4s"
    } else {
        document.getElementById("navbar").style.transform="translateY(-3.7em)";
        document.getElementById("navbar").style.transition="transform 0.4s";
    }
}
/*.......................*/

/*Slide Left Menu Button*/
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
/*.........................*/
