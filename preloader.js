window.addEventListener('DOMContentLoaded', function () {
	contentHide();

	setTimeout(function () {
		const preloader = document.querySelector('.preloader');
		preloader.style.display = 'none';
	}, 3000)
})

function contentHide() {
	const container = document.querySelector('.container');
	container.style.opacity = 1;
}


class Progress {
	constructor() {
		this.svgText = document.querySelector('#svgText');
		this.counter = 0;
		this.stopInterval = setInterval(this.textChanger.bind(this), .5);
	}
	textChanger() {
		this.svgText.innerHTML = this.counter;
		this.counting();
	}
	counting() {
		if (this.counter < 100) {
			this.counter++;
		} else {
			clearInterval(this.stopInterval);
		}
	}
}
let progress = new Progress();