document.addEventListener("DOMContentLoaded", function() {
    const lamps = document.querySelectorAll(".lamp");

    lamps.forEach(lamp => {
        lamp.addEventListener("click", function () {
            lamp.classList.toggle("off");
            updateBackground();
        });
    });

    function updateBackground() {
        const body = document.body;
        const lampsOn = document.querySelectorAll(".lamp:not(.off)").length;

        if (lampsOn === 4) {
            // Change background to white when both lamps are on
            body.style.background = "#f2e34d"; // yellow background
        }
        if (lampsOn === 3) {
            // Change background to white when both lamps are on
            body.style.background = "#fff"; // White background
        }
        if (lampsOn === 2) {
            // Change background to half black and half yellow when one lamp is on and one lamp is off
            body.style.background = "linear-gradient(90deg, #000 50%, #f2e34d 50%)";
        }
        if (lampsOn === 0) {
            // Change background to white when both lamps are on
            body.style.background = "#000"; // black background
        }
    }
});
