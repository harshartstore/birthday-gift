const blowButton = document.getElementById("blowButton");
const flames = document.querySelectorAll(".flame");

const cakeScene = document.querySelector(".cake-scene");
const firstMessage = document.getElementById("firstMessage");
const page2 = document.getElementById("page2");

let candlesBlown = false;


// ================================
// BLOW THE CANDLES
// ================================

blowButton.addEventListener("click", function (event) {

    event.stopPropagation();

    if (candlesBlown) {
        return;
    }

    candlesBlown = true;

    // Turn off all flames
    flames.forEach(function (flame) {
        flame.classList.add("off");
    });

    // Change button text
    blowButton.textContent = "✨ MAKE A WISH ✨";

    blowButton.disabled = true;

    // Change hint text
    document.getElementById("blowHint").textContent =
        "Wish made? Good... ❤️";


    // Wait for flames to disappear
    setTimeout(function () {

        // Fade out cake
        cakeScene.style.opacity = "0";

        setTimeout(function () {

            // Hide cake scene
            cakeScene.style.visibility = "hidden";

            // Show birthday message
            firstMessage.classList.add("show");

        }, 1000);

    }, 700);

});


// ================================
// FIRST MESSAGE → PAGE 2
// ================================

firstMessage.addEventListener("click", function () {

    if (!candlesBlown) {
        return;
    }

    // Fade out first message
    firstMessage.style.opacity = "0";

    setTimeout(function () {

        // Hide first message
        firstMessage.style.visibility = "hidden";

        // Show page 2
        page2.classList.add("show");

        // Allow scrolling
        document.body.style.overflow = "auto";

    }, 700);

});