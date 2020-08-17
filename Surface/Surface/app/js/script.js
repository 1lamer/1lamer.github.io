
//////////////////////////Оббъявление ппеременных//////////////////////////////

//Главное меню на мобильной версии
// var navMain = document.querySelector('.main-nav');
// var navToggle = document.querySelector('.main-nav__toggle');
// var openCloseMenu = document.querySelector('.open-menu');


// //Модальное окно авторизации
// var link = document.querySelector(".user-list__login");
// var modal = document.querySelector(".sign-in");
// var close = modal.querySelector(".modal-close");



///////////////////////////////////////////////////////////////////////////////



//Открытие/закрытие главного меню
// navMain.classList.remove('main-nav--nojs');

// navToggle.addEventListener('click', function() {
// 	if (navMain.classList.contains('main-nav--closed')) {
// 		navMain.classList.remove('main-nav--closed');
// 		navMain.classList.add('main-nav--open');

// 		openCloseMenu.innerHTML = "Закрыть меню";
// 	} else {
// 		navMain.classList.add('main-nav--closed');
// 		navMain.classList.remove('main-nav--open');

// 		openCloseMenu.innerHTML = "Открыть меню";
// 	}
// });


//Открытие/закрытие окна авторизации

// link.addEventListener('click', function(evt) {
// 	evt.preventDefault();
// 	modal.classList.add('modal-show');

// });


// close.addEventListener('click', function(evt) {
// 	evt.preventDefault();
// 	modal.classList.remove('modal-show');
	
// });


// window.addEventListener('keydown', function(evt) {
// 	if (evt.keyCode === 27) {
// 		evt.preventDefault();
// 		if (modal.classList.contains("modal-show")) {
// 			modal.classList.remove("modal-show");
// 		}
// 	}
	
// });



//Слайдер

// const prev = document.querySelector('.slider__slide-prev');
// const next = document.querySelector('.slider__slide-next');





// const slides = document.querySelectorAll('.slider__slide');
// const dots = document.querySelectorAll('.slider__dot');

// let index = 0;

// const activeSlide = n => {
// 	// console.log(n);
// 	for(slide of slides) {
// 		slide.classList.remove('slider__slide--active');
// 	}
// 	slides[n].classList.add('slider__slide--active');
// }

// const activeDot = n => {
// 	// console.log(n);
// 	for(dot of dots) {
// 		dot.classList.remove('slider__dot--active');
// 	}
// 	dots[n].classList.add('slider__dot--active');
// }

// const prepareCurrentSlide = ind => {
// 	activeSlide(index);
// 	activeDot(index);
// }





// const nextSlide = () => {
// 	if(index == slides.length -1) {
// 		index = 0;
// 		prepareCurrentSlide(index);
// 	} else {
// 		index++;
// 		prepareCurrentSlide(index);
// 	}
// }

// const prevSlide = () => {
// 	if(index == 0) {
// 		index = slides.length -1;
// 		prepareCurrentSlide(index);
// 	} else {
// 		index--;
// 		prepareCurrentSlide(index);
// 	}
// }



// dots.forEach((item, indexDot) => {
// 	item.addEventListener('click', () => {
// 		index = indexDot;
// 		prepareCurrentSlide(index);
// 	})	
// });




// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);




// //Установка интервала пролистывания слайдов
// const interval = setInterval(nextSlide, 2500);


// const interval = () => {
// 	if(next.addEventListener('click'))
// }