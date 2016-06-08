
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
