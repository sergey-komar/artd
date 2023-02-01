
$(function () {

//    $('.slider__big').slick({
//         slidesToShow: 1,
// 		slidesToScroll: 1,
// 		asNavFor: '.slider__thumb',
//         prevArrow: false,
// 		nextArrow: false,
//         fade: true,
//         dots: true
//    }) 

//    $('.slider__thumb').slick({
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     asNavFor: '.slider__big',
//     prevArrow: false,
// 	nextArrow: false,

//     responsive: [
//         {
//           breakpoint: 850,
//           settings: {
//             slidesToShow: 5,
//             slidesToScroll: 1,
//           }
//         },
//         {
//           breakpoint: 700,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 1
//           }
//         },
//         {
//           breakpoint: 550,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1
//           }
//         },
//         {
//             breakpoint: 420,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1
//             }
//           }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//       ]

// }) 


// $('.modal__slider-wrapper').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       prevArrow: '<button type="button" class="slick-prev slick-prev-modal">Next1</button>',
//       nextArrow : '<button type="button" class="slick-next slick-next-modal">Next2</button>'
// })


$('.slider__page-inner').slick({
    slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev slick-prev-img">Prev</button>',
      nextArrow : '<button type="button" class="slick-next slick-next-img">Next2</button>'
})

})


const menu = document.querySelector('.menu');
    const mobile = document.querySelector('.nav-icon');

    mobile.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    menu.classList.toggle('nav--active');
});
// const authorWorkItem = document.querySelectorAll('.author-work__item');
// const modal = document.querySelector('.modal');
// const modalClose = document.querySelector('.modal__close');


// authorWorkItem.forEach(item => {
//   item.addEventListener('click', () => {
  
//     modal.classList.add('show');
//     modal.classList.remove('hide');
//     document.body.style.overflow = 'hidden';
//   });
// });

// modalClose.addEventListener('click', () => {
//   modal.classList.add('hide');
//   modal.classList.remove('show');
//   document.body.style.overflow = '';
// })
