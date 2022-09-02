
document.addEventListener('DOMContentLoaded', () => {

	const rightImages = document.querySelectorAll('.bg-image_right');
	const leftImages = document.querySelectorAll('.bg-image_left');


	const offsetImages  = () =>{
		let offset, cf = 2;

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

	const popUpInit = (popupSelector, openLinkSelector, overlaySelector) => {
		const popUp = document.querySelector(popupSelector);
		const openPopupBtns = document.querySelectorAll(openLinkSelector);
		const closeBtns = popUp.querySelectorAll('.popup__close');
		const overlays = popUp.querySelectorAll(overlaySelector);

		const openPopup  = (event) => {
			popUp.classList.add((popupSelector+'_active').slice(1));
			event.preventDefault();
		}
		
		const closePopup  = (event) => {
			popUp.classList.remove((popupSelector+'_active').slice(1));
			event.preventDefault();
		}

		openPopupBtns.forEach(element => {
			element.addEventListener('click', openPopup)
		});

		closeBtns.forEach(element => {
			element.addEventListener('click', closePopup);
		});

		overlays.forEach(element => {
			element.addEventListener('click', closePopup);
		});

	}


	popUpInit('.popup-screen', '.popup1', '.popup-background')
	offsetImages()
	window.addEventListener(`resize`, offsetImages, false)


})
