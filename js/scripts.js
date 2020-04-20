/*!
    * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
const init = function(){
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
}

const reset = function(ev){
    //HTML will automatically put the form back to its initial state
    //unless we do
    ev.preventDefault();
    // programmatically we can reset it
    document.getElementById('form-user').reset();
    //if you want to do anything else...
}

const send = function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    //or the click will travel to the form and the form will submit
    let fails = validate();
    //IF we wanted to do some async things then use a Promise with .then and .catch
    if(fails.length === 0){
        //good to go
        document.getElementById('form-user').submit();
    }else{
        //there are some errors to display
        //bad user
        //let err = document.querySelector('.error');
        //let input = err.querySelector('input');
        //err.setAttribute('data-errormsg', ` ... Missing ${input.placeholder}`);
        fails.forEach(function(obj){
            let field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);
        })
    }
}

const validate = function(ev){
    //let valid = true;
    let failures = [];


    //select
    let select = document.getElementById('input-type');
    // .selectedIndex  .options  .length   .selectedValue  .value
    if( select.selectedIndex === 0 ){
        failures.push({input:'input-type', msg:''})
    }

    //inputs for text, email, tel, color, number...
    let location = document.getElementById('input-location');
    let date = document.getElementById('input-date');
    let time = document.getElementById('input-time');
    //.value, .defaultValue, length of value
    if( location.value === ""){
        failures.push({input:'input-location', msg:'Required Field'})
    }
    if( date.value === "" ){
        failures.push({input:'input-date', msg:'Required Field'})
    }
    if( time.value === ""){
        failures.push({input:'input-time', msg:'Required Field'})
    }

    //return a boolean || an object with details about the failures
    return failures;
}


document.addEventListener('DOMContentLoaded', init);


<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"></script>
       <script>
           var autocomplete;
           function initialize() {
             autocomplete = new google.maps.places.Autocomplete(
                 /** @type {HTMLInputElement} */(document.getElementById('input-location')),
                 { types: ['geocode'] });
             google.maps.event.addListener(autocomplete, 'place_changed', function() {
             });
           }
       </script>
