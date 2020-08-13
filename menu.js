var isOpen = false;
var menuItems = Array.from(document.querySelectorAll("nav.overlay-content a"));
var menuClose = document.querySelector(".closebtn");
menuItems.push(menuClose);
console.log(menuItems);
var prevFocus = null;
var focusIndex = null;

// Toggle Visibility

function openNav() {
    isOpen = true;
    // Reveal visual menu
    document.getElementById("myNav").style.width = "100%";

    // Save focus so we can return it later
    prevFocus = document.activeElement;

    // Bring focus to the first menu item
    focusIndex = 0;
    menuItems[focusIndex].focus();

    // Listen for key events and guide focus
    document.addEventListener('keydown', (e) => {
        handleKeydown(e)
    });
}
  
function closeNav() {
    isOpen = false;
    // Hide visual menu
    document.getElementById("myNav").style.width = "0%";

    // Return focus to the element that had it before menu opened
    console.log(prevFocus);
    prevFocus.focus();
    prevFocus = null;
    focusIndex = null;

    document.removeEventListener('keydown', (e) => {
        handleKeydown(e)
    });
}

// Focus Management for main menu

function handleKeydown (e) {
    if (isOpen) {
        // do stuff with up and down arrow here
        console.log("keyCode: " + e.keyCode);

        if(e.keyCode === 9 || e.keyCode === 40) {
            e.preventDefault();
            if (focusIndex === menuItems.length - 1) {
                focusIndex = 0;
            } else {
                focusIndex++;
            }
        } else if (e.keyCode === 38) {
            e.preventDefault();
            if (focusIndex === 0) {
                focusIndex = menuItems.length - 1;
            } else {
                focusIndex--;
            }
        }
        menuItems[focusIndex].focus();
    } else {
        return
    }
}