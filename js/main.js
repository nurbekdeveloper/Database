(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 40;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

})(jQuery);

const disabled = document.querySelector("#maruzalar-1");
console.log(disabled);



(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery


//   start test quiz js 
/*------------------*/
//Store answers and then add them up

// create an empty object to store answers
var answers = {};

// get each question div element

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');
var question_nine = document.getElementById('question-9');
var question_ten = document.getElementById('question-10');


// create event listeners so that when a radio button is clicked the 'value' is added to answers object as a value. All answers from the same question are stored in the same object property so choices overright each other!

// create a function that adds HTML input values to new properties in answers object. 'parseInt' converts string to number.

function storeAnswer(question_number, event) {
  if (event.target.type === 'radio') {
    console.log(event.target.value);
    answers['question'+question_number] = parseInt(event.target.value);
  }
}

//add event listener to each question div. Click event calls storeAnswer function with corresponding question number passed as an argument so that correct object property is created

question_one.addEventListener('click', function(event) {
  storeAnswer(1, event);
});

question_two.addEventListener('click', function(event) {
  storeAnswer(2, event);
});

question_three.addEventListener('click', function(event) {
  storeAnswer(3, event);
});

question_four.addEventListener('click', function(event) {
  storeAnswer(4, event);
});

question_five.addEventListener('click', function(event) {
  storeAnswer(5, event);
});

question_six.addEventListener('click', function(event) {
  storeAnswer(6, event);
});

question_seven.addEventListener('click', function(event) {
  storeAnswer(7, event);
});

question_eight.addEventListener('click', function(event) {
  storeAnswer(8, event);
});

question_nine.addEventListener('click', function(event) {
  storeAnswer(9, event);
});

question_ten.addEventListener('click', function(event) {
  storeAnswer(10, event);
});


// create a function to add up all answers. I hate this because I've had to hard code the answer object's properties. Need to make BETTER

function totalScore() {
  var total_score =
  answers.question1+
  answers.question2+
  answers.question3+
  answers.question4+
  answers.question5+
  answers.question6+
  answers.question7+
  answers.question8+
  answers.question9+
  answers.question10;

  return total_score;

}

// create a function that returns information about score depending on what the score is

function getInfoBasedOnScore() {
  if(totalScore() < 11) {
    var score_info = "Sizning natijangiz yetarli emas ";
  } else if(totalScore() < 21) {
    var score_info = "Najijangiz qoniqarli darajada "
  } else {
    var score_info = "Siz ajoyib natija ko`rsatdingiz";
  };

  return score_info;

}


/*-------------------------------------*/
/*Show and Hide questions on submit*/

// get each submit button element
var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');
var submit10 = document.getElementById('submit10');

// declare a function that toggles display style of question divs
// the function takes an argument which should be THE NEXT QUESTION number
function nextQuestion(question_number) {

  //get the last question number (the argument passed minus 1!)
  var current_question_number = question_number - 1;

  //turn both question number vars into strings
  var question_number = question_number.toString();
  var current_question_number = current_question_number.toString();

  //get the next question div element (concatenate next q number onto to 'question-')
  var el = document.getElementById('question-'+question_number);

  //get the current question div element
  var el2 = document.getElementById('question-'+current_question_number);
  
  //display next question
  el.style.display = "block";

  //hide current question
  el2.style.display = "none";
}

//add event listeners to each submit button element and call nextQuestion function on click. Also calling function to grow progress bar.
submit1.addEventListener('click', function() {
  
  nextQuestion(2);
  growProgressBar('20%');
});

submit2.addEventListener('click', function() {
  nextQuestion(3);
  growProgressBar('30%');
});

submit3.addEventListener('click', function() {
  nextQuestion(4);
  growProgressBar('40%');
});

submit4.addEventListener('click', function() {
  nextQuestion(5);
  growProgressBar('50%');
});

submit5.addEventListener('click', function() {
  nextQuestion(6);
  growProgressBar('60%');
});

submit6.addEventListener('click', function() {
  nextQuestion(7);
  growProgressBar('70%');
});

submit7.addEventListener('click', function() {
  nextQuestion(8);
  growProgressBar('80%');
});

submit8.addEventListener('click', function() {
  nextQuestion(9);
  growProgressBar('90%');
});

submit9.addEventListener('click', function() {
  nextQuestion(10);
  growProgressBar('100%');
});

submit10.addEventListener('click', function() {
  nextQuestion(11);
});


/*-------------------------------------*/
/*Display score and badge*/

submit10.addEventListener('click', function() {

  //print answers to questions by adding respective object properties to innerHTML of correct p elements on thank you page!
  document.getElementById("printtotalscore").innerText = totalScore();
  document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();


});

/*End of functionality -------------------------------------------------------------
------------------------------------------------------------------------------------
------------------------------------------------------------------------------------
--------------------------------------------------------------------------*/


/*Pretty things -----------------------------------------------------------------*/

function growProgressBar(percentage_width) {
  var bar = document.getElementById("progress_bar");
  bar.style.width = percentage_width;
}

/*----TO DO----*/
//display a report at the end showing all answers and info for each one

//Sometimes Always Never

// test quiz end 