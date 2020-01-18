// Your code goes here

const contentImages = document.querySelectorAll('.img-content img');
contentImages.forEach(image => {
    image.addEventListener('mouseenter', (event) => {
        event.target.style.transform = "scale(1.2)";
        event.target.style.transition = "all 0.3s";
    });
    image.addEventListener('mouseleave', (event) => {
        event.target.style.transform = "scale(1)";
        event.target.style.transition = "all 0.3s";
    });
});

const allImages = document.querySelectorAll('img');
allImages.forEach(image => {
    image.addEventListener('click', (event) => {
        event.target.style.border = "inset springgreen 3px";
    });
    image.addEventListener('dblclick', (event) => {
        event.target.style.border = "none";
    });
});

window.addEventListener('keydown', (event) => {
    allImages.forEach(image => {
        image.style.borderRadius = "50%";
        image.style.transform = "scale(1.3)";
        image.style.transition = "all 0.3s";
    });
});

window.addEventListener('keyup', (event) => {
    allImages.forEach(image => {
        image.style.borderRadius = "";
        image.style.transform = "scale(1)";
        image.style.transition = "all 0.3s";
    });
});

const h1 = document.querySelector('.logo-heading');
h1.addEventListener('mousedown', (event) => {
    h1.style.border = "inset springgreen 3px";
});

h1.addEventListener('mouseup', (event) => {
    h1.style.border = "none";
});

const h2 = document.querySelectorAll('h2');
