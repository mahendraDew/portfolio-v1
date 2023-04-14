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

// // 


var t1 = new TimelineMax();
var t2 = new TimelineMax();

var widthOfScreen = $(window).width();
console.log("width of screen :" + widthOfScreen);
if (widthOfScreen >= 768) {
    t1.from(".ringOne", 1, {
        delay: 0.1,
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
    }).from(".ringTwo", 1, {
        delay: 0.2,
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
    }, "-=1").to(".ringOne", 2, {
        delay: 0.1,
        left: 445,
        ease: Expo.easeInOut
    }).to(".ringTwo", 1, {
        delay: 0.1,
        left: 445,
        ease: Expo.easeInOut
    }, "-=1");

}
else if (widthOfScreen < 768) {
    t1.from(".ringOne", 1, {
        delay: 0.1,
        opacity: 0,
        y:40,
        ease: Expo.easeInOut
    }).from(".ringTwo", 1, {
        delay: 0.2,
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
    }, "-=1").to(".ringOne", 2, {
        delay: 0.1,
        
        ease: Expo.easeInOut
    }).to(".ringTwo", 1, {
        delay: 0.1,
       
        ease: Expo.easeInOut
    },"-=1");
}
