function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


$(document).ready(function() {
  $("#testimonial-slider").owlCarousel({
    items:3,
    itemsDesktop:[1000,2],
    itemsDesktopSmall:[979,2],
    itemsTablet:[768,2],
    itemsMobile:[550,1],
    pagination: true,
    autoPlay:true
  });
});


// Responsive pricing table JS

$("ul").on("click", "li", function() {
  var pos = $(this).index() + 2;
  $("tr")
    .find("td:not(:eq(0))")
    .hide();
  $("td:nth-child(" + pos + ")").css("display", "table-cell");
  $("tr")
    .find("th:not(:eq(0))")
    .hide();
  $("li").removeClass("active");
  $(this).addClass("active");
});

// Initialize the media query
var mediaQuery = window.matchMedia("(min-width: 640px)");

// Add a listen event
mediaQuery.addListener(doSomething);

// Function to do something with the media query
function doSomething(mediaQuery) {
  if (mediaQuery.matches) {
    $(".sep").attr("colspan", 4);
  } else {
    $(".sep").attr("colspan", 2);
  }
}

// On load
doSomething(mediaQuery);