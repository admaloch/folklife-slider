
var myCarousel = document.querySelector('#carouselExampleControls')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 20000,
    keyboard: true
})


$('.carousel-inner')
    .awesomeCursor('pause', {
        color: '#FFFFFF',
        size: 25
    });




const modalBtn = document.querySelector('#modal-btn')
modalBtn.addEventListener('click', () => {
    carousel.pause();
})

const modalClose = document.querySelector('#modal-close')
modalClose.addEventListener('click', () => {
    carousel.next();
    carousel.cycle();
})




const sliderSpeedInput = document.querySelectorAll('.slider-speed-input')
// // fast: 3000 medium 6000, slow 12000, extra slow 20000
sliderSpeedInput.forEach(btn => {
    btn.addEventListener('click', () => {
        let speed = 6000
        if (btn.id === 'speed1') {
            speed = 20000
        } else if (btn.id === 'speed2') {
            speed = 12000
        } else if (btn.id === 'speed3') {
            speed = 6000
        } else if (btn.id === 'speed4') {
            speed = 3000
        } else {
            speed = 6000
        }
        const options = carousel._config
        options.interval = speed



    })
})


const sliderStyleInput = document.querySelectorAll('.slider-style-input')
// // fast: 3000 medium 6000, slow 12000, extra slow 20000
sliderStyleInput.forEach(btn => {
    btn.addEventListener('click', () => {
        myCarousel.classList.remove('carousel-fade')
        if (btn.id === 'style2') {
            myCarousel.classList.add('carousel-fade')
        } else {
            myCarousel.classList.remove('carousel-fade')
        }
    })
})



