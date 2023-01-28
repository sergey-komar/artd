$(function () {

   $('.slider__big').slick({
        slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider__thumb',
        prevArrow: false,
		nextArrow: false,
        fade: true,
        dots: true
   }) 

   $('.slider__thumb').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__big',
    prevArrow: false,
	nextArrow: false
}) 
})


const menu = document.querySelector('.menu');
    const mobile = document.querySelector('.nav-icon');

    mobile.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    menu.classList.toggle('nav--active');
});