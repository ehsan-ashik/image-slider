const leftButton = document.querySelector('#left-button')
const rightButton = document.querySelector('#right-button')
const imgSlider = document.querySelector('#slide-image')
const textSlider = document.querySelector('#slide-text')
const sliderLength = imgSlider.querySelectorAll('div').length

let currentIndex

function initialize() {
	currentIndex = 0
	disableButton(leftButton)
	leftButton.addEventListener(
		'click',
		function () {
			clickSliderBtn(true)
		},
		false
	)
	rightButton.addEventListener(
		'click',
		function () {
			clickSliderBtn(false)
		},
		false
	)
}

function clickSliderBtn(isLeft) {
	if (isLeft == true ? isFirstSlide() : isLastSlide()) return

	isLeft == true ? currentIndex-- : currentIndex++
	let transformOfset = currentIndex * 100

	imgSlider.style.transform = `translateX(-${transformOfset}%)`
	textSlider.style.transform = `translateX(${transformOfset}%)`

	//disable the buttons if the last/firstst page
	if ((isLeft == false && isLastSlide()) || (isLeft == true && isFirstSlide())) {
		disableButton(isLeft == true ? leftButton : rightButton)
	} else {
		if (isLeft) {
			if (isDisabled(rightButton)) enableButton(rightButton)
		} else {
			if (isDisabled(leftButton)) enableButton(leftButton)
		}
	}
}

//Call Begin
initialize()

//

//Helpers
function isFirstSlide() {
	return currentIndex == 0
}

function isLastSlide() {
	return currentIndex == sliderLength - 1
}

function disableButton(button) {
	button.disabled = true
}

function enableButton(button) {
	button.disabled = false
}

function isDisabled(button) {
	return button.disabled == true
}
