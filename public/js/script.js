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

 
  // Text typing animation
  var words = ['I make brands that matters. ', 'I design & build digital arts.', 'I build things for the web. ', 'Turning ideas into Code. '];
  var part;
  var i = 0;
  var offset = 0;
  var len = words.length;
  var forwards = true;
  var skip_count = 0;
  var skip_delay = 15;
  var speed = 70;

  var wordflick = function () {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      $('.typewriter-animation').text(part);
    },speed);
  };
  
  $(document).ready(function () {
    wordflick();
  });