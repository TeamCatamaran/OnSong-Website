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

