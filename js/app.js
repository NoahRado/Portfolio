const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle Nav
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}`;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');

    });


}


$(document).ready(function () {
    console.log('ready');
    $(this).scrollTop(0);

    $('#card-1').click(function () {
        window.open("/examples/Pflanzenwiki/index.html");
    })

    $('#card-2').click(function () {
        window.open("/examples/Museum_of_Candy/index.html");
    });

    $('#card-3').click(function () {
        alert("Swift Datei kann nicht im Browser geöffnet werden.")
    });
});



$(window).on("load", function () {
    $(".loader-wrapper").delay(1250).fadeOut("slow");
    ($("body").removeClass("preload"));
});


navSlide();




