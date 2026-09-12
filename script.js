window.addEventListener("load", () => {

    const opening = document.getElementById("opening");
    const flash = document.getElementById("flash");
    const birthday = document.getElementById("birthday");
    const page2 = document.getElementById("page2");

    let openingFinished = false;
    let page2Shown = false;


    /* =========================
       OPENING TIMELINE
    ========================= */

    setTimeout(() => {

        flash.style.transition = "opacity 0.15s ease";
        flash.style.opacity = "1";

    }, 5800);


    setTimeout(() => {

        opening.style.display = "none";

        birthday.style.transition = "opacity 1.2s ease";
        birthday.style.opacity = "1";

        openingFinished = true;

    }, 6100);


    setTimeout(() => {

        flash.style.transition = "opacity 1s ease";
        flash.style.opacity = "0";

    }, 6200);


    /* =========================
       CLICK ANYWHERE → PAGE 2
    ========================= */

    document.addEventListener("click", () => {

        if (!openingFinished || page2Shown) return;

        page2Shown = true;

        page2.style.visibility = "visible";
        page2.style.opacity = "1";

        setTimeout(() => {

            page2.querySelector("h1").style.transition =
                "opacity 1s ease, transform 1s ease";

            page2.querySelector("h1").style.opacity = "1";
            page2.querySelector("h1").style.transform = "translateY(0)";


            setTimeout(() => {

                page2.querySelector(".your-paragraph").style.transition =
                    "opacity 1.5s ease, transform 1.5s ease";

                page2.querySelector(".your-paragraph").style.opacity = "1";
                page2.querySelector(".your-paragraph").style.transform =
                    "translateY(0)";

            }, 500);

        }, 400);

    });

});