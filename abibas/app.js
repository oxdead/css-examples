const container = document.querySelector('.container');
const card = document.querySelector('.card');
const flipflopImg = document.querySelector('.flipflop img');
const title = document.querySelector('.description h3');
const description = document.querySelector('.description h4');
const sizes = document.querySelector('.sizes');
const purchaseBtn = document.querySelector('.purchase button');

container.addEventListener('mousemove', (e) => {
    let xAxis = ((window.innerWidth / 2) - e.pageX)/25;
    let yAxis = ((window.innerHeight / 2) - e.pageY)/25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;



});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none"; // transition card elements only on way out
    flipflopImg.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    title.style.transform = 'translateZ(200px)';
    description.style.transform = 'translateZ(150px)';
    sizes.style.transform = 'translateZ(150px)';
    purchaseBtn.style.transform = 'translateZ(100px)';
});


container.addEventListener('mouseleave', (e) => {

    card.style.transition = "all 0.5s ease"; // transition card elements only on way out
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    
    flipflopImg.style.transform = 'translateZ(0px) rotateZ(0deg)';
    title.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchaseBtn.style.transform = 'translateZ(0px)';

});