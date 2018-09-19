const introH1 = document.querySelector(".intro h1");
const introP = document.querySelector(".intro p");
const nav = document.querySelectorAll("nav a");
const motto = document.querySelector(".motto h2");

TweenMax.from(introH1, 3, {opacity:0, right: 500});
TweenMax.from(introP, 3, {opacity:0, right: 5000});
//TweenMax.from(nav, 3, {ease: Bounce.ease, opacity:0, width: 500});
//TweenMax.from(motto, 5, {left: 1500});













// function Scroll() {
//     const ypos = window.pageYOffset;
//     if(ypos > 175) {
//         TweenMax.from(motto, 5, {opacity:0});
//     }
// }

// window.addEventListener("scroll", Scroll);