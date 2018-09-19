const introH1 = document.querySelector(".intro h1");
const introP = document.querySelector(".intro p");
const nav = document.querySelectorAll("nav a");

TweenMax.from(introH1, 3, {opacity:0, width: 0});
TweenMax.from(introP, 3, {opacity:0, width: 5000});
TweenMax.from(nav, 3, {ease: Bounce.ease, opacity:0, width: 1000});