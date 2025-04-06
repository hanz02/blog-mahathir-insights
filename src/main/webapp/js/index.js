const pseudoBars = document.getElementsByClassName('pseudo-bar');
const pseudoSquare = document.getElementsByClassName('pseudo-square');

const bar_hover_in = function(event) {
    event.target.classList.add("hover")
    event.target.nextElementSibling.classList.add("hover")
}


const bar_hover_out = function(event) {
    setTimeout(function() {
        event.target.classList.remove("hover")
        event.target.nextElementSibling.classList.remove("hover")
    }, 1000)
}


for (var i = 0; i < pseudoBars.length; i++) {
    pseudoBars[i].addEventListener('mouseover', bar_hover_in);
    pseudoBars[i].addEventListener('mouseout', bar_hover_out);
}


for (var i = 0; i < pseudoSquare.length; i++) {
    pseudoSquare[i].addEventListener('mouseover', function(event) {
        event.target.classList.add("hover")
        event.target.previousElementSibling.classList.add("hover")
        
    });
    pseudoSquare[i].addEventListener('mouseout', function(event) {
        setTimeout(function() {
            event.target.classList.remove("hover")
            event.target.previousElementSibling.classList.remove("hover")
        }, 2000);

    });
}

//* appear on scroll 
const appears = document.querySelectorAll('.appear');

const cb = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('inview');
        } else {
            entry.target.classList.remove('inview');
        }
    });
}

const io = new IntersectionObserver(cb);

for(let i = 0; i < appears.length; i++) {
    io.observe(appears[i]);
}

// //* expand card 100 width on click
// const cardButtons = document.querySelectorAll('.card-wrapper a');
// const cardWrappers = document.querySelectorAll('.card-wrapper');


// cardButtons.forEach(button => {
//     button.addEventListener('click', function(e) {
//         e.preventDefault();
//         e.target.closest(".card-wrapper").classList.toggle("expand")

//         cardWrappers.forEach(element => {
//             if (!element.classList.contains("expand")) {
                
//                 setTimeout(function() {
//                     element.style.display = "none";
//                   }, 350)
//             }

//               setTimeout(function() {
//                 e.target.closest(".card-wrapper").querySelector(".card-body").classList.add("disappear") 
//               }, 500)

//               setTimeout(function() {
//                 e.target.closest(".card-wrapper").querySelector(".card-body").classList.remove("disappear") 
//                 e.target.closest(".card-wrapper").querySelector(".card-body").classList.add("show") 
//                 e.target.closest(".card-wrapper").querySelector(".card").classList.add("flex-row") 
//               }, 2500)

//         })

//     });
// });

