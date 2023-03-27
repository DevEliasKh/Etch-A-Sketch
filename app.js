const container = document.querySelector('.container');
const slider = document.querySelector('input');
const reset = document.querySelector('.reset');
const apply = document.querySelector('.apply');
const randomColor = document.querySelector('.random-color');
var color = 'black';

function makeGrids() {
	const madeGrids = document.querySelectorAll('.grid');
	if (madeGrids.length) {
		madeGrids.forEach((grid) => {
			grid.remove();
		});
	}
	let numberOfGrid = +slider.value;
	let gridSize = `${100 / numberOfGrid}%`;
	for (let i = 1; i <= numberOfGrid * numberOfGrid; i++) {
		const grid = document.createElement('div');
		grid.classList.add('grid');
		grid.style.height = gridSize;
		grid.style.width = gridSize;
		container.appendChild(grid);
	}
	colorize();
}

function resetGrid() {
	const madeGrids = document.querySelectorAll('.grid');
	madeGrids.forEach((grid) => {
		grid.style.backgroundColor = '#eee';
	});
}

function colorize() {
	const madeGrids = document.querySelectorAll('.grid');
	madeGrids.forEach((grid) => {
		grid.addEventListener('mousemove', () => {
			grid.style.backgroundColor = color;
		});
	});
}
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
apply.addEventListener('click', makeGrids);
reset.addEventListener('click', resetGrid);
randomColor.addEventListener('click', getRandomColor);
