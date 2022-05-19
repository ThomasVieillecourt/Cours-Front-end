// const mouseSmall = document.querySelector(".cercleSmall");
// const mouseMedium = document.querySelector(".cercleMedium");
// const mouseBig = document.querySelector(".cercleBig");


// window.addEventListener('mousemove', (e) => {
//     mouseSmall.style.left = e.pageX + "px";
//     mouseSmall.style.top = e.pageY + "px";
//     document.body.style.cursor = 'none';

//     mouseMedium.style.left = e.pageX + "px";
//     mouseMedium.style.top = e.pageY + "px";

//     mouseBig.style.left = e.pageX + "px";
//     mouseBig.style.top = e.pageY + "px";
// })


// Modification du curseur //

const cercles = document.querySelectorAll(".cercles")

window.addEventListener('mousemove', (e) => {
    cercles.forEach((mouse) => {
        mouse.style.top = e.pageY + "px";
        mouse.style.left = e.pageX + "px";
    })
})


// Navbar réactive au scroll //

const nav = document.querySelector("nav");
let oldScroll = window.scrollY;
let newScroll = 0;


window.addEventListener('scroll', (e) => {
    newScroll = oldScroll;
    oldScroll = window.scrollY;

    if (oldScroll > newScroll == false) {
        nav.style.top = 0;
    }
    else if (oldScroll > newScroll == true) {
        nav.style.top = "-200px";

    }








    // this.oldScroll = this.scrollY;

    // if (this.scrollY < this.oldScroll) {
    //     nav.style.top = "-50px";
    // }

    // else if (this.oldScroll == true) {
    //     nav.style.top = 0;

    // }


})


