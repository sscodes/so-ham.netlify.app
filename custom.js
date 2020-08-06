var typed = new Typed('.type', {
    strings: ["Hi! I'm Soham Das!", "I'm a ML Engineer."],
    typeSpeed:60,
    backSpeed:60,
    loop:60
  });

var preloader = document.getElementById('loader')

function myfunction()
{
    preloader.style.display = 'none';
}