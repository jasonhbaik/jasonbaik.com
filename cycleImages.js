const images = [
    'url("./images/bustime.gif")',
    'url("./images/sim.gif")',
    'url("./images/blindsproject.gif")',
    'url("./images/mechanism.gif")',
    'url("./images/chairvision.gif")'
];

let currentIndex = 0;
const slideshow = document.getElementById('slideshow');

function cycleBackgroundGIFs() {
    slideshow.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(cycleBackgroundGIFs, 5000);
cycleBackgroundGIFs();
