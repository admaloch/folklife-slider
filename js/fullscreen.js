// button to enter fullscreen
const fullScreenElement = document.getElementById("main-container");

// When the toggle button is clicked, enter/exit fullscreen
document.getElementById("full-screen").addEventListener("click", () => {
    if (document.fullscreenElement) {
        // exitFullscreen is only available on the Document object.
        document.exitFullscreen();
    } else {
        fullScreenElement.requestFullscreen();
    }
    carousel.next()
    carousel.cycle()
});