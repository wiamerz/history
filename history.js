$(document).ready(function () {

// Store the text and clear the element first
const originalText = $('.sub-title').text();
$('.sub-title').text(''); // Clear immediately
let currentIndex = 0;

function typeLetter() {
    if (currentIndex < originalText.length) {
        $('.sub-title').append(originalText[currentIndex]);
        currentIndex++;
        setTimeout(typeLetter, 150);
    } else {
        // Reset
        setTimeout(() => {
            $('.sub-title').text(''); 
            currentIndex = 0;
            typeLetter();
        }, 1000);
    }
}

typeLetter(); // Start the animation


//   $(window).scroll(function() {
//     var scrollPosition = $(this).scrollTop();
//     var rotation = scrollPosition / 100; // Adjust the divisor to control the rotation speed
//     $('#scrollImage').css({
//         'transform': 'rotate(' + rotation + 'deg)'
//     });
// });


  $(window).scroll(function(){
      $("scrollImage")
          .animate({width: "-=20%"},2000)
          //Cette animation se lance immédiatement
          .animate({fontSize: "20px"},{queue:false, duration:2000})
          .fadeTo(2000, 0.5);
  });


  

});

gsap.registerPlugin(ScrollTrigger)

gsap.from(".Creation", {
  x: 100,
  opacity:0.5,
  duration: 2,
  ease: "power2.out",

  ScrollTrigger: {
  trigger: ".Creation",
  start: "top 90%",
  end: "top 20%",
  toggleAction:"play reverse play reverse",
  scrub: 1
     }
  });
