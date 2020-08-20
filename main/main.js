function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav" ) {
        x.className += " responsive";
    } else {
        x.className = "nav"
    }
}


// COLOR CHNAGE

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0";
    document.getElementById("navbar").style.backgroundColor = "#ddd";
  } else {
    document.getElementById("navbar").style.padding = "0";
    document.getElementById("navbar").style.backgroundColor = "#16325b";
  }
}