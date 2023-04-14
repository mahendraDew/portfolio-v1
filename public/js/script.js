 // navigation starts here
 $('#toggle').click(function () {
    $(this).toggleClass('on')
    $('#resize').toggleClass('active')
  })

  $('#resize ul li a').click(function () {
    $(this).toggleClass('on')
    $('#resize').toggleClass('active')
  })

  $('.close-btn').click(function () {
    $(this).toggleClass('on')
    $('#resize').toggleClass('active')
  })

  // navigation ends here

  // nav animation

  TweenMax.from('#brand', 1, {
    delay: 0.4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.staggerFrom(
    '.menu li a',
    1,
    {
      delay: 0.4,
      opacity: 0,
      ease: Expo.easeInOut
    },
    0.1
  )

  // nav animation ends

  new WOW().init()