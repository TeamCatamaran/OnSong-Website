var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");
var videoIframe = document.querySelector("#learn-more-video");

var videoIsOpen = false;
var prevFocus = null;

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        toggleModal();
    }
});

function toggleModal() {
    videoIsOpen = !videoIsOpen;
    modal.classList.toggle("show-modal");
    if (!modal.classList.contains("show-modal")) {
      videoIframe.src = "";
      setTimeout(function () {
        videoIframe.src = videoIframe.getAttribute("yt-src");
      }, 100);
    }

    if (videoIsOpen) {
        prevFocus = document.activeElement;
        videoIframe.focus();
    } else {
        prevFocus.focus();
        prevFocus = null;
    }
}