// Dark Mode Button

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

});


// Smooth reveal animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.3;

        if(position < screenPosition){

            section.classList.add("show");

        }

    });

});
