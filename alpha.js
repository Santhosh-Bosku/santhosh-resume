window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) 
{
document.getElementsById("bar-one").style.backgroundColor = "rgba(255, 255, 255)";
document.getElementsById("bar-two").style.backgroundColor = "rgba(255, 255, 255)";
}
else 
{
document.getElementsById("bar-one").style.backgroundColor = "rgba(0, 0, 0)";
document.getElementsById("bar-two").style.backgroundColor = "rgba(0, 0, 0)";
}
}