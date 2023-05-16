const dateStart = document.querySelector('.date__start');
const dateEnd = document.querySelector('.date__end');

const buttonLeft = document.querySelector('.btn__left');
const buttonRight = document.querySelector('.btn__right');
const buttonNav = document.querySelector('.btn__nav');

const btns = document.querySelectorAll('.btn__nav');

const eventWrapper = document.querySelector('.event__wrapper');

const sliders = eventWrapper.querySelectorAll('.swiper__date');
sliders[0].classList.add('_visible');

const numberPage = document.querySelector('.number');

const textSlide = document.querySelector('.swiper-text');
const textDate = document.querySelector('.swiper-date');

function clickHandler(e) {
    console.log(e.target);
    console.log(e.target.dataset.index);
    const index = e.target.dataset.index
    // dateStart.innerHTML = DATA[index].start;
    // dateEnd.innerHTML = DATA[index].end;
    dateStart.innerHTML = e.target.dataset.start;
    dateEnd.innerHTML = e.target.dataset.end;
    numberPage.innerHTML = `${(+index + 1).toString().padStart(2, '0')}/${sliders.length.toString().padStart(2, '0')}`;
    // numberPage.innerHTML = `${(+index + 1).toString().padStart(2, '0')}/03`
    sliders.forEach((slider) => slider.classList.remove('_visible'))
    const targetSlider = [...sliders].find((slider) => slider.dataset.index === index);
    console.log(targetSlider)

    // targetSlider.style.visibility = "hidden";
    targetSlider.classList.add('_visible');
} 

buttonNav.addEventListener('click', clickHandler)

const swiperContainers = document.querySelectorAll('.swiper__date');
var swiper = new Swiper('.swiper__date', {
navigation: {
    nextEl: buttonRight, 
    prevEl: buttonLeft,
},
mousewheel: true,
keyboard: true,
slidesPerView: 'auto'

});
