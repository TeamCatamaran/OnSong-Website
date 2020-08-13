
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