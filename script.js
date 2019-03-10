var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];


var boxes = document.querySelectorAll('.box');

console.log(boxes + 'boxes');

for (i = 0; i < data.length; i++) {
	for (i = 0; i < boxes.length; i++) {
		console.log(boxes[i] + 'boxes[i]');
		var boxHeader = boxes[i].querySelector('header');
		console.log(boxHeader + 'boxHeader');

		var boxContent = boxes[i].querySelector('.content');
		console.log(boxContent + 'boxContent');
		var box = boxes[i];
		console.log(box + 'boxboxboxb');

		boxes[i].id = data[i]['id'];
		console.log(boxes[i].id + 'boxes.id');

		boxHeader.innerHTML = data[i]['title'];
		boxContent.innerHTML = data[i]['content'];

		
		var catForHeaderFiltered = data[i]['categories'].filter(function (value) {
			return value.includes('special');
		})
		console.log(catForHeaderFiltered + ' header filter');
		boxHeader.classList.add(catForHeaderFiltered);
		
		var catForBoxFiltered = data[i]['categories'].filter(function (value){
			return !value.includes('special');
		})
		console.log(catForBoxFiltered + ' box filter');
		boxes[i].classList.add(catForBoxFiltered);

	}

}


