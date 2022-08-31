// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	const rightImages = document.querySelectorAll('.bg-image_right');
	const leftImages = document.querySelectorAll('.bg-image_left');


	const offsetImages  = () =>{
		let offset, cf = 2;
		console.log(123)
		if(window.innerWidth === window.screen.width) {
			 offset = -1000;
		} else {
			 offset  =  (window.innerWidth - window.screen.width) / cf ;
		}
		
		rightImages.forEach(element => {
			element.style.marginRight = offset + 'px';
		});
		leftImages.forEach(element => {
			element.style.marginLeft = offset + 'px';
		});
	}

	const popUpInit = (popupSelector, openLinkSelector) => {
		const popUp = document.querySelector(popupSelector);
		const openPopupBtns = document.querySelectorAll(openLinkSelector);
		const closeBtns = popUp.querySelectorAll('.popup__close');
		const openPopup  = () => {
			console.log((popupSelector+'_active').slice(1))
			popUp.classList.add((popupSelector+'_active').slice(1));
		}
		const closePopup  = () => {
			popUp.classList.remove((popupSelector+'_active').slice(1));
		}

		openPopupBtns.forEach(element => {
			element.addEventListener('click', openPopup)
		});

		closeBtns.forEach(element => {
			element.addEventListener('click', closePopup);
		});
	}


	popUpInit('.popup-screen', '.popup1')
	offsetImages()
	window.addEventListener(`resize`, offsetImages, false)


})
