let icon = document.querySelector(".icon");
let page = document.querySelector(".mobile-view");
icon.addEventListener("click", function () {
    if (page.classList !== document.querySelector(".right-0")) {
        page.classList.toggle("right-0");
    }
})
let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTop.style.display = "flex";
    }
    else {
        toTop.style.display = "none"
    }
})





$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    dots: false,
    Arrows: true,
    prevArrow: '.btn-prev',
    nextArrow: '.btn-next',
    cssEase: 'linear',
    autoplay: false,
    autoplaySpeed: 200,
    responsive: [{
        breakpoint: 1200,
        settings: {
            infinite: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 200
        }
    },

    ]
});


