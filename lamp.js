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
            body.style.background = "#f2e34d"; // White background
        }
        else
        {
            // Change background to white when both lamps are on
            body.style.background = "#000"; // black background
        }
        if (lampsOn === 2) {
            // Change background to half black and half yellow when one lamp is on and one lamp is off
            body.style.background = "linear-gradient(90deg, #000 50%, #f2e34d 50%)";
        }
    }
});
