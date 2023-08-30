// var t1 = new TimelineMax();
// var t2 = new TimelineMax();

// t1.from(".ringOne", 1, {
//     delay: 0.1,
//     opacity: 0,
//     y:40,
//     ease: Expo.easeInOut
// }).from(".ringTwo", 1, {
//     delay: 0.2,
//     opacity: 0,
//     y: 40,
//     ease: Expo.easeInOut
// }, "-=1").to(".ringOne", 2, {
//     delay: 0.1,
//     left: 445,
//     ease: Expo.easeInOut
// }).to(".ringTwo", 1, {
//     delay: 0.1,
//     left: 445,
//     ease: Expo.easeInOut
// },"-=1");






// ---------------------------- old - code --------------------------------------
// var t1 = new TimelineMax();
// var t2 = new TimelineMax();

// var widthOfScreen = $(window).width();
// console.log("width of screen :" + widthOfScreen);
// if (widthOfScreen >= 768) {
//     t1.from(".ringOne", 1, {
//         delay: 0.1,
//         opacity: 0,
//         y: 40,
//         ease: Expo.easeInOut
//     }).from(".ringTwo", 1, {
//         delay: 0.2,
//         opacity: 0,
//         y: 40,
//         ease: Expo.easeInOut
//     }, "-=1").to(".ringOne", 2, {
//         delay: 0.1,
//         left: 419,
//         // left: 419,
//         ease: Expo.easeInOut
//     }).to(".ringTwo", 1, {
//         delay: 0.1,
//         left: 419,
//         // left: 419,
//         ease: Expo.easeInOut
//     }, "-=1");

// }
// else if (widthOfScreen < 768) {
//     t1.from(".ringOne", 1, {
//         delay: 0.1,
//         opacity: 0,
//         y:40,
//         ease: Expo.easeInOut
//     }).from(".ringTwo", 1, {
//         delay: 0.2,
//         opacity: 0,
//         y: 40,
//         ease: Expo.easeInOut
//     }, "-=1").to(".ringOne", 2, {
//         delay: 0.1,

//         ease: Expo.easeInOut
//     }).to(".ringTwo", 1, {
//         delay: 0.1,

//         ease: Expo.easeInOut
//     },"-=1");
// }






// ---------------------------- new - code --------------------------------------
var t1 = new TimelineMax();
var t2 = new TimelineMax();

var widthOfScreen = $(window).width();
var heightOfScreen = $(window).height();

// console.log("width of screen :" + widthOfScreen);
// console.log("height of screen :" + heightOfScreen);

var setX = widthOfScreen / 4 + widthOfScreen / 22;
var setY = heightOfScreen / 2;


// y=40
// left:419


t1.from(".ringOne", 1, {
    delay: 0.1,
    opacity: 0,
    y: setY,                   //y:40
    ease: Expo.easeInOut
}).from(".ringTwo", 1, {
    delay: 0.2,
    opacity: 0,
    y: setY,                    //y:40
    ease: Expo.easeInOut
}, "-=1").to(".ringOne", 2, {
    delay: 0.1,
    left: setX,                 //left:419
    // left: 419,
    ease: Expo.easeInOut
}).to(".ringTwo", 1, {
    delay: 0.1,
    left: setX,                 //left:419
    // left: 419,
    ease: Expo.easeInOut
}, "-=1");


