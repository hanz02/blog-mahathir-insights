const nav = document.getElementById('navigation-bar');
const hero = document.getElementsByClassName('landing_bg');
const navBurger = document.querySelector('.navbar-toggler-icon');

const navChange = function (isTransparentNavPage, transparentColored = false) {
    if (window.scrollY > 55) {

        if (isTransparentNavPage) {

            if (transparentColored) {
                nav.classList.remove("transparent-colored");    
            }

            nav.classList.add("colored");
            nav.classList.remove("transparent");
        }

        nav.classList.add("scrolled");

    } else {

        //* for mobile sized, if scroll to the top and the hamburger is already clicked open, dont remove nav bar color
        if (!navBurger.classList.contains("mobile-actived")) {
            if (isTransparentNavPage) {

                if (transparentColored) {
                    nav.classList.add("transparent-colored");
                    nav.classList.remove("transparent");

                } else {
                    nav.classList.add("transparent");
                }

                nav.classList.remove("colored");
            }
        }

        nav.classList.remove("scrolled");
    }
};

//* when user click on hamburger when screen size is mobile sized
navBurger.addEventListener("click", function(e) {
    e.target.classList.toggle("mobile-actived")
    nav.classList.toggle("mobile-actived")
    
    if (document.getElementById('pg-transparent-nav') || document.getElementById('pg-transparent-nav-fblack')) {
        if (nav.classList.contains("colored")) {
            nav.classList.remove("colored");
            nav.classList.add("transparent");
        } else {
            nav.classList.add("colored");
            nav.classList.remove("transparent");
        }
    }

    isTransparentPage = true;
    transparentColored = true;
    navChange(isTransparentPage, transparentColored)
})

if (document.getElementById('pg-transparent-nav')) {
    nav.classList.add("transparent");
    nav.classList.remove("colored");
    isTransparentPage = true;

    document.addEventListener("scroll", function() {
        navChange(isTransparentPage)
    });




} else if (document.getElementById('pg-transparent-nav-fblack')) {
    nav.classList.remove("transparent");
    nav.classList.add("transparent-colored");

    isTransparentPage = true;
    transparentColored = true;

    document.addEventListener("scroll", function() {
        navChange(isTransparentPage, transparentColored)
    });

}else {
    nav.classList.add("colored");
    nav.classList.remove("transparent");
    isTransparentPage = false;

    document.addEventListener("scroll", function() {
        navChange(isTransparentPage)
    });
}