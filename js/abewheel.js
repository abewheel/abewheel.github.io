(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
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
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict

// Greet user by time of day
var greeting = "";
var now = new Date();
var hour = now.getHours();
if (hour >= 4 && hour < 12) {
  greeting = "Good morning";
} else if (hour >= 12 && hour < 17) {
  greeting = "Good afternoon";
} else if (hour >= 17 && hour < 21) {
  greeting = "Good evening";
} else {
  greeting = "Hi";
}
var greetingHeader = document.getElementById("greeting");
greetingHeader.innerHTML = greeting + ", I'm Abe Wheeler";

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
  map.setCenter(new google.maps.LatLng(34.0224, -118.2851));
});

// Displays linkedin/github/email/resume name on button hover
function setContactText(button) {
  var text = "";
  if (button.href === "https://www.linkedin.com/in/abrahamwheeler/") {
    text = "abrahamwheeler";
  } else if (button.href === "https://github.com/abewheel") {
    text = "abewheel";
  } else if (button.href === "mailto:abe.wheeler3@gmail.com") {
    text = "abe.wheeler3@gmail.com";
  } else if (button.href === "https://abewheel.github.io/Abe_Wheeler_Resume.pdf") {
    text = "Abe_Wheeler_Resume.pdf";
  } else {
    text - "<br>";
  }
  document.getElementById("contact-text").innerHTML = text;
}

// Clears linkedin/github/email/resume name on mose leave
function clearContactText(button) {
  document.getElementById("contact-text").innerHTML = "<br>";
}

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(34.0224, -118.2851), // USC

    // Disables the default Google Maps UI components
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using out element and options defined above
  map = new google.maps.Map(mapElement, mapOptions);

  // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
  var image = 'img/map-marker.svg';
  var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
