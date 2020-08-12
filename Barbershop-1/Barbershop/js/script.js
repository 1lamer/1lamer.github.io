
///////////Оббъявление ппеременных//////////////////////////////

var link = document.querySelector(".modal-login");
var popup = document.querySelector(".sign-in");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}
//////////////////////////////////////////////////////////////////

link.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.add('modal-show');

	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}

});

close.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.remove('modal-show');
	
});

form.addEventListener('submit', function(evt) {
	evt.preventDefault();
	if (!login.value || !password.value) {
		console.log('Введите логин и пароль');
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
		}	
	}
	
});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		}
	}
	
});


var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".close-map");

if (mapClose) {
	console.log('Введите');
}

mapLink.addEventListener('click', function(evt) {
	evt.preventDefault();
	mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove('modal-show');
	
});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
		}
	}
	
});
