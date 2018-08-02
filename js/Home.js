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


//NOte: Sequence of function here in js should be in order of their function in page,they work according to their sequence as in programming.



//---------------Left Slide Card----------------------

//----------Cross sign Animation----------------
//Hover Over Element Bug
//Hover over burger causing st-1 and st-2 unstable
//need to isolate hover class for burger st-1 and st-2

/*document.querySelector(".burger").onmouseover=function()
{
  document.querySelector(".burger").classList.add("hover");
};

document.querySelector(".burger").onmouseout=function()
{
  document.querySelector(".burger").classList.remove("hover");
};
*/


function p()
{
  document.getElementById('slide-left-menu').style.transform="translateX(-4em)";
  document.getElementById('slide-left-menu').style.transition="transform .45s cubic-bezier(.45,0,0,1)";

  document.getElementById("Burger").classList.add("st-1");
  setTimeout(del,400);
  document.getElementById("Burger").classList.add("st-2");
}

document.querySelector(".burger").onclick=function()
{
  if (document.querySelector(".st-2") != null)
  {
    document.getElementById('slide-left-menu').style.transform="translateX(-103.8%)";
    document.getElementById('slide-left-menu').style.transition="transform .45s cubic-bezier(.45,0,0,1)";
    document.getElementById("Burger").classList.add("st-1");
    setTimeout(del,400);
    document.getElementById("Burger").classList.remove("st-2");
    document.getElementById("sl-menu-items").classList.remove("slide-trans");
  }
  else
  {
    p();
    document.getElementById("sl-menu-items").classList.add("slide-trans");
  }
};

//st-2 hover for cross sign
/*
document.querySelector(".burger").onmouseover=function()
{
  if (document.querySelector(".st-2") != null)
  {
    document.getElementById("Burger").classList.add("hover");
  }
  if (document.querySelector(".st-2") != null)
  {
  document.querySelector(".burger").onmouseout=function()
  {
    document.getElementById("Burger").classList.remove("hover");
  }
}
};
*/

function del(){
  document.getElementById("Burger").classList.remove("st-1");
}
//-----------Cross Animation Ends-----------------






//----------------Left Slide Card Ends-----------------------


/*Slide2 Content */



/*
var header2 = document.getElementById("Header2");
var header1 = document.getElementById("Header1");
var domRect = header2.getBoundingClientRect();
var domRect1 = header1.getBoundingClientRect();

function parallax() {
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


//optimize scroll content with element position for different devices
  $(window).scroll(function() {
     var hT = $('#Header1').offset().top,
         hH = $('#Header1').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
     if ((wS+120) > (hT+hH-wH))
     {
       $(".cc1").addClass('con-code-slide');
     }

     var hT2 = $('#Header2').offset().top,
         hH2 = $('#Header2').outerHeight();

    if ((wS+350) > (hT2+hH2-wH))
    {
      $('.progress').addClass('slide-up');
    }
    //var x = parseInt($('.progress').css('transform').split(',')[5]);  learn matrix of transform
    console.log(wS);

    if(wS>2410)
    {
      $('#pk-h1').addClass('pk-slide-rightin');
    }

    if(wS>2508){
      $('.py').addClass('python');
      $('.jv').addClass('java');
      $('.cp').addClass('cpp');
      $('.c').addClass('cc');
    }

    if(wS>2710)
    {
      $('#web-h1').addClass('web-slide-rightin');
      $('#web-h2').addClass('web-slide-rightin2');
      $('.skills-wrapper').addClass('skills-slide-rightin');
    }


  });



/*Event triggers */

window.onscroll = function()
{
    navbarScroll();
    var speed = 2.5;
    document.getElementById("check").style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(-window.pageYOffset/speed)+"px";
};
