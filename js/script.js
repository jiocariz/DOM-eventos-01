//Cada vez que se haga click en una de las imágenes de la izquierda, se cambia la imagen central
let logos = document.querySelectorAll("#images img"); 
logos.forEach( logo => {
    logo.addEventListener("click", e => {
        document.querySelector("#picture img").setAttribute('src', e.target.src);
        //document.querySelector("#picture img").setAttribute('src', e.target.getAttribute("src"));
    })
});


//Cada vez que se haga click en uno de los colores, se pone un borde de ese color a la imagen central
let colors = document.querySelectorAll("#colors div");
colors.forEach( color => {
    color.addEventListener("click", e=>{
        document.querySelector("#picture").style.borderColor =  window.getComputedStyle(e.target).backgroundColor;
    })
});

//Zomm IN y OUT
let zoomIn = document.querySelector("#zoom img:nth-child(1)");
zoomIn.addEventListener("click", e=>{
    let imag = document.querySelector("#picture img");
    let dim = imag.offsetWidth;
    imag.style.width = (dim+20) + "px";
    imag.style.height = (dim+20) + "px";
});
let zoomOut = document.querySelector("#zoom img:nth-child(2)");
zoomOut.addEventListener("click", e=>{
    let imag = document.querySelector("#picture img");
    let dim = imag.offsetWidth;
    imag.style.width = (dim-20) + "px";
    imag.style.height = (dim-20) + "px";
});