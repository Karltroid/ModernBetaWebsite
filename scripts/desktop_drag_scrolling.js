window.addEventListener('DOMContentLoaded', (event) => {
    let mouseDown = false;
	let startX, scrollLeft;

	const slider = document.getElementById("showcase-features");

	const startDragging = (e) => {
	  mouseDown = true;
	  startX = e.pageX - slider.offsetLeft;
	  scrollLeft = slider.scrollLeft;
	}

	const stopDragging = (e) => {
	  mouseDown = false;
	}

	const move = (e) => {
	  e.preventDefault();
	  if(!mouseDown) { return; }
	  const x = e.pageX - slider.offsetLeft;
	  const scroll = x - startX;
	  slider.scrollLeft = scrollLeft - scroll;
	}


	// Add the event listeners
	slider.addEventListener('mousemove', move, false);
	slider.addEventListener('mousedown', startDragging, false);
	slider.addEventListener('mouseup', stopDragging, false);
	slider.addEventListener('mouseleave', stopDragging, false);
});