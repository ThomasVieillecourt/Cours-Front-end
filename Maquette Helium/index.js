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



const cercles = document.querySelectorAll(".cercles")

window.addEventListener('mousemove', (e) => {
    cercles.forEach((mouse) => {
        mouse.style.top = e.pageY + "px";
        mouse.style.left = e.pageX + "px";
    })
})



