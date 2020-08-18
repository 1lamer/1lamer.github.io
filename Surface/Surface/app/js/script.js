
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




//Code for Athlets
const slidesAthlets = document.querySelectorAll('.slider__slide--athlets');
const dotsAthlets = document.querySelectorAll('.slider__dot--athlets');

let index = 0;

const activeSlide = n => {
	// console.log(n);
	for(slide of slidesAthlets) {
		slide.classList.remove('slider__slide--active');
	}
	slidesAthlets[n].classList.add('slider__slide--active');
}

const activeDot = n => {
	// console.log(n);
	for(dot of dotsAthlets) {
		dot.classList.remove('slider__dot--active');
	}
	dotsAthlets[n].classList.add('slider__dot--active');
}

const prepareCurrentSlide = ind => {
	activeSlide(index);
	activeDot(index);
}


//Code for Players
const slidesPlayers = document.querySelectorAll('.slider__slide--players');
const dotsPlayers = document.querySelectorAll('.slider__dot--players');

let indexPlayers = 0;

const activeSlidePlayers = nPlayers => {
	// console.log(n);
	for(slidePlayers of slidesPlayers) {
		slidePlayers.classList.remove('slider__slide--active');
	}
	slidesPlayers[nPlayers].classList.add('slider__slide--active');
}

const activeDotPlayers = nPlayers => {
	// console.log(n);
	for(dotPlayers of dotsPlayers) {
		dotPlayers.classList.remove('slider__dot--active');
	}
	dotsPlayers[nPlayers].classList.add('slider__dot--active');
}

const prepareCurrentSlidePlayers = indPlayers => {
	activeSlidePlayers(indexPlayers);
	activeDotPlayers(indexPlayers);
}



// const nextSlide = () => {
// 	if(index == slidesAthlets.length -1) {
// 		index = 0;
// 		prepareCurrentSlide(index);
// 	} else {
// 		index++;
// 		prepareCurrentSlide(index);
// 	}
// }

// const prevSlide = () => {
// 	if(index == 0) {
// 		index = slidesAthlets.length -1;
// 		prepareCurrentSlide(index);
// 	} else {
// 		index--;
// 		prepareCurrentSlide(index);
// 	}
// }


//Code for Athlets
dotsAthlets.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		prepareCurrentSlide(index);
	})	
});

//Code for Players
dotsPlayers.forEach((itemPlayers, indexDotPlayers) => {
	itemPlayers.addEventListener('click', () => {
		indexPlayers = indexDotPlayers;
		prepareCurrentSlidePlayers(indexPlayers);
	})	
});


// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);




// //Установка интервала пролистывания слайдов
// const interval = setInterval(nextSlide, 2500);


// const interval = () => {
// 	if(next.addEventListener('click'))
// }