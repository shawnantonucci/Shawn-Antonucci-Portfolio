var controller = new ScrollMagic.Controller();

// Tweens
var motto = TweenMax.from("#animate1", .5, {
  right: 1500
});

var welcomeH1 = TweenMax.from("#animate2", 2, {
  right: 1500
});

var welcomeP = TweenMax.from("#animate3", 2, {
  left: 1500
});

var motto2 = TweenMax.from("#animate4", .5, {
  left: 1500
});

var motto3 = TweenMax.from("#animate5", .5, {
  right: 1500
});

var git = TweenMax.from("#git", 1, {
  left: 1000
});

var email = TweenMax.from("#email", 1, {
  right: 1000
});

var contactH1 = TweenMax.from("#contactH1", 3, {
  opacity: 0
});

var contactP = TweenMax.from("#contactP", 3, {
  opacity: 0
});

// Scenes
var scene = new ScrollMagic.Scene({
  triggerElement: ".motto"
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
  triggerElement: "#contactH1"
})
  //.addIndicators()
  .setTween(email)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#contactH1"
})
  //.addIndicators()
  .setTween(git)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#contact"
})
  //.addIndicators()
  .setTween(contactH1)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#contact"
})
  //.addIndicators()
  .setTween(contactP)
  .addTo(controller);

const navLink = document.querySelector(".navLink");

TweenMax.from(".navLink", 2, { right: 1500 });
