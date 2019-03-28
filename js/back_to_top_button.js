// THIS IS THE FUNCTION FOR THE BACK TO TOP BUTTON TO DISPLAY WHEN SCROLING PAST 20px
window.onscroll = function() {scrollFunction()};
let btn = document.getElementById("backToTop");

function scrollFunction() {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.opacity = "1";
    } else {
        btn.style.opacity = "0";
    }
}    