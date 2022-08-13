function Menu(e) {

    var menu = document.getElementById("navbar-items");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "flex";
    }

    e.classList.contains("bx-menu") ? 
    (menu.classList.add = "flex", e.classList.toggle("bx-x")) : 
    (menu.classList.add = "hidden", e.classList.toggle("bx-menu"));
}


// Splide Slider
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        breakpoints: {
            640: {
                perPage: 1,
            },
            1024: {
                perPage: 1,
            },
        },
        pagination: false,
        perMove: 1,
        perPage: 3,
        type: 'loop',
        
    } );
    splide.mount();
  } );


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});