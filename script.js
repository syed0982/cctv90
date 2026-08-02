// CCTV90 Website

console.log("CCTV90 Website Loaded");

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("mouseenter", function () {
            button.style.transform = "scale(1.05)";
            button.style.transition = "0.3s";
        });

        button.addEventListener("mouseleave", function () {
            button.style.transform = "scale(1)";
        });

    });

});
