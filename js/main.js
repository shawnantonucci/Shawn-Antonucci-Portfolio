var controller = new ScrollMagic.Controller();

// Tweens
var motto = TweenMax.from("#animate1", 1, {
  right: 1500
});

var motto2 = TweenMax.from("#animate4", 1, {
  left: 1500
});

var motto3 = TweenMax.from("#animate5", 1, {
  right: 1500
});

var welcomeH1 = TweenMax.from("#animate2", 2, {
  right: 1500
});

var welcomeP = TweenMax.from("#animate3", 2, {
  left: 1500
});

var nav = TweenMax.from(".navLink", 2, {
  right: 1500
});

// Scenes
var scene = new ScrollMagic.Scene({
  triggerElement: ".intro",
  offset: 700
})
  //.addIndicators()
  .setTween(motto)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#motto2"
})
  //.addIndicators()
  .setTween(motto2)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#motto3"
})
  //.addIndicators()
  .setTween(motto3)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#welcome-section"
})
  //.addIndicators()
  .setTween(welcomeH1)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#welcome-section"
})
  //.addIndicators()
  .setTween(welcomeP)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#welcome-section"
})
  //.addIndicators()
  .setTween(nav)
  .addTo(controller);

//TweenMax.from(introH1, 3, {opacity:0, right: 500});
//TweenMax.from(introP, 3, {opacity:0, left: 500});
//TweenMax.from(nav, 2, {ease: Bounce.ease, opacity:0, width: 500});
