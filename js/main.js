const introH1 = document.querySelector(".intro h1");
const introP = document.querySelector(".intro p");
const nav = document.querySelectorAll("nav a");
const motto = document.querySelector(".motto h2");

// TweenMax.from(introH1, 3, {opacity:0, right: 500});
// TweenMax.from(introP, 3, {opacity:0, left: "10%"});
// TweenMax.from(nav, 2, {ease: Bounce.ease, opacity:0, width: 500});
// TweenMax.from(motto, 5, {right: 1500});

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    TweenMax.from(introH1, 3, { opacity: 0, bottom: 200 });
    TweenMax.from(introP, 3, { opacity: 0, top: 200 });
    TweenMax.from(nav, 2, { ease: Bounce.ease, opacity: 0});
  } else {
    TweenMax.from(introH1, 3, { opacity: 0, right: 500 });
    TweenMax.from(introP, 3, { opacity: 0, left: "10%" });
    TweenMax.from(nav, 5, { opacity: 0});
  }
}

var x = window.matchMedia("(max-width: 500px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

// function Scroll() {
//     const ypos = window.pageYOffset;
//     if(ypos > 175) {
//         TweenMax.from(motto, 5, {right: 1500});
//     }
// }

// window.addEventListener("scroll", Scroll);
